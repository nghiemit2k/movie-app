import React from 'react'
import MovieCart from './MovieCart'
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
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWE2MjJmNDcxMWYzZjYyOGU0NDE4Mzc3ZWJjZmQxOCIsIm5iZiI6MTczMTE1MzkwNi4wNTE1ODU3LCJzdWIiOiI2NzJmNGUyMTU5MDM2ZDJiY2YwOGVhNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C8XIRLJItXjVBZvlZrUev9VDsJD_p3xsWlsfO7wyGPc`
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
                <ul className='flex border border-white rounded-full'>
                    {tabs.map((tab) => (
                        <li key={tab.id} className={`bg-white text-black px-2 py-1 rounded cursor-pointer ${activeTabId === tab.id ? 'bg-red-500 text-white' : ''}`}
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
