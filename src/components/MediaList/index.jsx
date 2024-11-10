import React from 'react'
import MovieCart from './MovieCart'
import { useState, useEffect } from 'react'
const MediaList = () => {

    const [mediaList, setMediaList] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/day', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWE2MjJmNDcxMWYzZjYyOGU0NDE4Mzc3ZWJjZmQxOCIsIm5iZiI6MTczMTE1MzkwNi4wNTE1ODU3LCJzdWIiOiI2NzJmNGUyMTU5MDM2ZDJiY2YwOGVhNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C8XIRLJItXjVBZvlZrUev9VDsJD_p3xsWlsfO7wyGPc`
            }
        })
            .then(async (res) => {
                const data = await res.json()
                const trendingMovies = data.results.slice(0, 12)
                setMediaList(trendingMovies)
            })
    }, [])
    return (
        <div className='px-8 text-[1.2vw] py-10 bg-black text-white'>
            <div className='flex items-center gap-4 mb-6'>
                <p className='text-[2vw] font-bold'>Trending</p>
                <ul className='flex border border-white rounded-full'>
                    <li className='bg-white text-black px-2 py-1 rounded cursor-pointer'>
                        All
                    </li>
                    <li className='px-2 py-1 rounded cursor-pointer'>
                        Movies
                    </li>
                    <li className='px-2 py-1 rounded cursor-pointer'>
                        Series
                    </li>
                </ul>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
                {mediaList.map((movie) => (
                    <MovieCart key={movie.id} title={movie.title || movie.name} poster_path={movie.poster_path}
                        release_date={movie.release_date || movie.first_air_date} point={movie.vote_average}

                        mediaType={movie.media_type}
                    />
                ))}
            </div>
        </div>
    )
}

export default MediaList
