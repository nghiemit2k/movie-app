import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
    return (
        <header className='h-14 lg:h-20 bg-slate-900 flex justify-between items-center text-white px-4 '>
            <div className='flex items-center gap-4 lg:gap-6'>
                <img src="./netflix.png" alt="Netflix" className='sm:w-28 w-14' />
                <a href="#" className='lg:text-xl'>Film</a>
                <a href="#" className='lg:text-xl'>Serie TV</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='cursor-pointer' />
            </div>
        </header>
    )
}

export default Header
