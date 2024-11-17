import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '@components/Loading'
import Banner from '@components/MediaDetail/Banner'
import ActorList from '@components/MediaDetail/ActorList'
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList'
import MovieInformation from '@components/MediaDetail/MovieInformation'
const MovieDetail = () => {
    const { id } = useParams()
    const [movieInfo, setMovieInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] = useState(false)
    const [relatedMovieList, setRelatedMovieList] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
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

    useEffect(() => {
        setIsRelatedMovieListLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
            }
        })
            .then(async (res) => {
                const data = await res.json()
                const currentRelatedMovieList = (data.results || []).slice(0, 12)
                setRelatedMovieList(currentRelatedMovieList)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setIsRelatedMovieListLoading(false)
            })
    }, [id])
    if (isLoading || isRelatedMovieListLoading) return <Loading />
    return (
        <div>
            <Banner mediaInfo={movieInfo} />
            <div className='bg-black text-white text-[1.2vw]'>
                <div className='flex mx-auto max-w-screen-xl px-6 py-10 gap-6 sm:gap-8 '>
                    <div className='flex-[2]'>
                        <ActorList actors={movieInfo.credits?.cast || []} />
                        <RelatedMediaList mediaList={relatedMovieList} />
                    </div>
                    <div className='flex-1'>
                        <MovieInformation movieInfo={movieInfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
