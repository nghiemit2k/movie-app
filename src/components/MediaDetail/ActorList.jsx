import React, { useState } from 'react'
import ActorInfor from './ActorInfor'
const ActorList = ({ actors = [] }) => {
    const [isShowMore, setIsShowMore] = useState(false)
    const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4)
    return (
        <div>
            <p className='font-bold text-[1.4vw] mb-4'>Actors</p>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                {currentActors.map((actor) => (
                    <ActorInfor key={actor.id} id={actor.id} name={actor.name}
                        character={actor.character} image={actor.profile_path}
                    />
                ))}
            </div>
            <button onClick={() => setIsShowMore(!isShowMore)} className='text-white bg-slate-500 px-4 py-2 rounded-lg mt-4'>
                {isShowMore ? "Show less" : "Show more"}
            </button>
        </div>
    )
}

export default ActorList
