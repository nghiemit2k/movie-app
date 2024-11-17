import React from 'react'
import MovieCart from '@components/MovieCart'
import { useState, useEffect } from 'react'

const MediaList = ({ title, tabs }) => {

    const [mediaList, setMediaList] = useState([])
    const [activeTabId, setActiveTabId] = useState(tabs[0]?.id)
    useEffect(() => {
        const url = tabs.find((tab) => tab.id === activeTabId)?.url
        if (url) {
            fetch(url, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                }
            })
                .then(async (res) => {
                    const data = await res.json()
                    const trendingMovies = data.results.slice(0, 12)
                    setMediaList(trendingMovies)
                })
        }
    }, [activeTabId, tabs])
    return (
        <div className='px-8 text-[1.2vw] py-10 bg-black text-white'>
            <div className='flex  items-center gap-4 mb-6'>
                <p className='text-[2vw] font-bold'>{title}</p>
                <ul className='flex border border-white rounded-full overflow-hidden'>
                    {tabs.map((tab) => (
                        <li key={tab.id} className={`bg-slate-500 text-white px-3 py-1 rounded cursor-pointer ${activeTabId === tab.id ? 'bg-slate-800 text-white' : ''}`}
                            onClick={() => setActiveTabId(tab.id)}>
                            {tab.name}
                        </li>
                    ))}
                    {/* <li className='px-2 py-1 rounded cursor-pointer'>
                        Movies
                    </li>
                    <li className='px-2 py-1 rounded cursor-pointer'>
                        Series
                    </li> */}
                </ul>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6'>
                {mediaList.map((movie) => (
                    <MovieCart id={movie.id} key={movie.id} title={movie.title || movie.name} poster_path={movie.poster_path}
                        release_date={movie.release_date || movie.first_air_date} point={movie.vote_average}

                        mediaType={movie.media_type || activeTabId}
                    />
                ))}
            </div>
        </div>
    )
}

export default MediaList
