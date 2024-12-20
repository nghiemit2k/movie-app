import React from 'react'
import Paginateindicator from './Paginateindicator'
import Movie from './Movie'
import { useState, useEffect } from 'react'
import useFetch from '@hooks/useFetch'
const FeatureMovie = () => {
    const [activeMovieId, setActiveMovieId] = useState()
    const { data: popularMoviesResponse } = useFetch({ url: `/movie/popular` })
    console.log({ popularMoviesResponse })
    const movies = (popularMoviesResponse.results || []).slice(0, 4)
    // set active movie id when movies array is not empty
    // useEffect: run when movies array is changed
    useEffect(() => {
        if (movies.length > 0) {
            setActiveMovieId(movies[0].id)
        }

    }, [JSON.stringify(movies)]) // compare movies array use JSON.stringify to avoid re-render
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
