import React, { useEffect } from 'react'

const Paginateindicator = ({ movies, activeMovieId, setActiveMovieId }) => {

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMovieId(prevId => {
                const currentIndex = movies.findIndex(movie => movie.id === prevId);
                const nextIndex = (currentIndex + 1) % movies.length;
                return movies[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [movies, setActiveMovieId]);
    return (
        <div className='absolute right-8 bottom-[10%]'>
            <ul className='flex  gap-1'>
                {movies.map((movie) => (
                    <li key={movie.id} className={`w-6 h-1  cursor-pointer ${movie.id === activeMovieId ? 'bg-slate-100' : 'bg-slate-600'}`}
                    ></li>
                ))}

            </ul>
        </div>
    )
}

export default Paginateindicator