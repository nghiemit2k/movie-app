import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paginateindicator from './Paginateindicator'
import Movie from './Movie'
import { useState, useEffect } from 'react'
const FeatureMovie = () => {
    const [movies, setMovies] = useState([])
    const [activeMovieId, setActiveMovieId] = useState()
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWE2MjJmNDcxMWYzZjYyOGU0NDE4Mzc3ZWJjZmQxOCIsIm5iZiI6MTczMTE1MzkwNi4wNTE1ODU3LCJzdWIiOiI2NzJmNGUyMTU5MDM2ZDJiY2YwOGVhNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C8XIRLJItXjVBZvlZrUev9VDsJD_p3xsWlsfO7wyGPc`
            }
        })
            .then(async (res) => {
                const data = await res.json()
                const popularMovies = data.results.slice(0, 4)
                setMovies(popularMovies)
                setActiveMovieId(popularMovies[0].id)
            })
    }, [])
    return (
        <div className='relative text-white'>
            {movies.filter(movie => movie.id === activeMovieId).map((movie) => (
                <Movie key={movie.id} data={movie} activeMovieId={activeMovieId} setActiveMovieId={setActiveMovieId} />
            ))}

            <Paginateindicator movies={movies} activeMovieId={activeMovieId} setActiveMovieId={setActiveMovieId} />
        </div>
    )
}

export default FeatureMovie