import React from 'react'
import MovieCart from '@components/MovieCart'
import Loading from '@components/Loading'
const RelatedMediaList = ({ mediaList = [], isLoading = false }) => {

    return (
        <div className='mt-6'>
            <p className='text-[1.4vw] font-bold mt-4'>More like this</p>
            {isLoading ? <Loading /> :
                <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                    {mediaList.map((media) => (
                        <MovieCart key={media.id} media={media} mediaType={media.media_type}
                            title={media.title || media.name}
                            poster_path={media.poster_path}
                            release_date={media.release_date || media.first_air_date}
                            point={media.vote_average}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default RelatedMediaList
