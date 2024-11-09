import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Movie = ({ data }) => {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                className="aspect-video  brightness-50" />
            <div className='absolute bottom-[10%] left-8 w-1/2 sm:w-1/3'>
                <p className='font-bold sm:text-[2vw]'>{data.title}</p>
                <div>
                    <p className='text-gray-400 border border-gray-400 p-1 mb-1 inline-block rounded-md'>{data.release_date}</p>
                </div>
                <div>
                    <div className='hidden sm:block text-[1.2vw] mt-4'>
                        <p className='font-bold mb-2'>Overview</p>
                        <p>{data.overview}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <button className='bg-white text-black px-4 py-2 rounded-md text-10 lg:text-lg mr-4'><FontAwesomeIcon icon={faMagnifyingGlass} /> Trailer</button>
                    <button className='bg-slate-300/35  px-4 py-2 rounded-md text-10 lg:text-lg'> View Details</button>
                </div>
            </div>
        </>
    )
}

export default Movie
