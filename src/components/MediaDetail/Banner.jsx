import React from 'react'
import CircularProgressBar from '../CircularProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

const Banner = ({ mediaInfo }) => {

    const certification = ((mediaInfo.release_dates?.results || []).find(item => item.iso_3166_1 === 'US')?.release_dates || [])
        .find((releaseDate) => releaseDate.certification)?.certification

    const crews = (mediaInfo.credits?.crew || []).filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
        .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }))
    const groupedCrews = _.groupBy(crews, 'job')
    return (
        <div className='relative text-white overflow-hidden shadow-sm shadow-slate-800' >
            <img className='absolute  inset-0 brightness-[.2]' src={`https://image.tmdb.org/t/p/original/${mediaInfo.backdrop_path}`} alt="movie poster" />
            <div className='flex relative max-w-screen-xl mx-auto lg:flex-row gap-6 lg:gap-8 px-6 py-10'>
                <div className='flex-1 '>
                    <img src={`https://image.tmdb.org/t/p/w500/${mediaInfo.poster_path}`} alt="movie poster" />
                </div>
                <div className='flex-[2] text-[1.2vw]'>
                    <p className='font-bold text-[2vw] mb-2'>{mediaInfo.title}</p>
                    <div className='flex gap-4 items-center'>
                        <span className='text-gray-400 border border-gray-400 p-4'>{certification}</span>
                        <p>{mediaInfo.release_date}</p>
                        <p>{(mediaInfo.genres || []).map((genre) => genre.name).join(", ")}</p>
                    </div>
                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center gap-4'><CircularProgressBar percentage={Math.round((mediaInfo.vote_average || 0) * 10)} size={3.5} strokeWidth={0.3} />
                            Rating
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faPlay} className='mr-1' />
                            Trailer
                        </button>
                    </div>
                    <div>
                        <p className='font-bold text-[1.3vw] mb-2'>Overview</p>
                        <p>{mediaInfo.overview}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 '>
                        {
                            Object.keys(groupedCrews).map((job) => (
                                <div key={job}>
                                    <p className='font-bold'>{job}</p>
                                    <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
