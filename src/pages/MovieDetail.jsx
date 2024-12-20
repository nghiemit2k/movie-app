import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '@components/Loading'
import Banner from '@components/MediaDetail/Banner'
import ActorList from '@components/MediaDetail/ActorList'
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList'
import MovieInformation from '@components/MediaDetail/MovieInformation'
import useFetch from '@hooks/useFetch'
import { data } from 'autoprefixer'
const MovieDetail = () => {
    const { id } = useParams()

    // get data and assign to movieInfo
    const { data: movieInfo, isLoading } = useFetch({ url: `/movie/${id}?append_to_response=release_dates,credits` })

    const { data: recommendationsResponse, isLoading: isRelatedMovieListLoading } = useFetch({ url: `/movie/${id}/recommendations` })
    const relatedMovieList = recommendationsResponse.results || []
    console.log({ movieInfo, relatedMovieList })
    if (isLoading || isRelatedMovieListLoading) return <Loading />
    return (
        <div>
            <Banner mediaInfo={movieInfo} />
            <div className='bg-black text-white text-[1.2vw]'>
                <div className='flex mx-auto max-w-screen-xl px-6 py-10 gap-6 sm:gap-8 '>
                    <div className='flex-[2]'>
                        <ActorList actors={movieInfo.credits?.cast || []} />
                        <RelatedMediaList mediaList={relatedMovieList} isLoading={isRelatedMovieListLoading} />
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
