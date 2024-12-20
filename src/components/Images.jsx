import React, { useState, useEffect } from 'react'

const ImagesComponent = ({ src, width, height, className }) => {
    const [currentSrc, setCurrentSrc] = useState(`https://placehold.co/${width}x${height}?text=Loading`)
    useEffect(() => {
        const image = new Image()
        image.src = src
        image.onload = () => {
            setCurrentSrc(src)
        }
        return () => {
            // cleanup function
            image.onload = null
        }
    }, [src])
    return (
        <img src={currentSrc} alt='No Image'
            className={currentSrc === src ? className : `${className} blur-md`} width={width} height={height} />
    )
}

export default ImagesComponent
