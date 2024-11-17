import React from 'react'

const ActorInfor = ({ name, image, character }) => {
    return (
        <div className='border border-slate-300 shadow-sm rounded-lg bg-black'>
            <img src={image ? `https://media.themoviedb.org/t/p/w276_and_h350_face${image}` : "/actorNoImage.svg"} alt='actor1' className='rounded-lg' />
            <div className='p-4'>
                <p className='font-bold'>{name}</p>
                <p>{character}</p>
                <p>18</p>
            </div>
        </div>
    )
}

export default ActorInfor
