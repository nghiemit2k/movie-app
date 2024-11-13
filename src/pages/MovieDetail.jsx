import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '@components/Loading'
import Banner from '@components/MediaDetail/Banner'
import ActorList from '@components/MediaDetail/ActorList'
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList'

const MovieDetail = () => {
    const { id } = useParams()
    const [movieInfo, setMovieInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWE2MjJmNDcxMWYzZjYyOGU0NDE4Mzc3ZWJjZmQxOCIsIm5iZiI6MTczMTE1MzkwNi4wNTE1ODU3LCJzdWIiOiI2NzJmNGUyMTU5MDM2ZDJiY2YwOGVhNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C8XIRLJItXjVBZvlZrUev9VDsJD_p3xsWlsfO7wyGPc`
            }
        })
            .then(async (res) => {
                const data = await res.json()
                setMovieInfo(data)

            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [id])
    if (isLoading) return <Loading />

    return (
        <div>
            <Banner mediaInfo={movieInfo} />
            <div className='bg-black text-white text-[1.2vw]'>
                <div className='flex mx-auto max-w-screen-xl px-6 py-10 gap-6 '>
                    <div className='flex-[2]'>
                        <ActorList actors={movieInfo.credits?.cast || []} />
                        <RelatedMediaList />
                    </div>
                    <div className='flex-1'>
                        <p className='font-bold text-[1.4vw] mb-4'>Information</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
