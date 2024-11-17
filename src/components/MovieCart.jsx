import React from 'react'
import CircularProgressBar from './CircularProgressBar'
import { Link } from 'react-router-dom'
const MovieCart = ({ id, title, poster_path, release_date, point, mediaType }) => {
    return (
        <Link to={`/movie/${id}`} className='border border-slate-800 rounded-lg '>
            <div className=' relative'>
                {
                    mediaType === 'tv' && (
                        <p className='absolute top-1 right-1 bg-black text-white p-1 text-sm rounded-md box-shadow-md font-bold'>TV Show</p>
                    )
                }
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" className='rounded-lg' />
                <div className='px-4  relative -top-[1.5vw]'>
                    <div>
                        <CircularProgressBar percentage={Math.round(point * 10)}
                            strokeColor={point > 7 ? 'green' : point > 5 ? 'yellow' : 'red'}

                        />
                        <p className='font-bold mt-2'>{title}</p>
                        <p className='text-gray-300'>{release_date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCart
