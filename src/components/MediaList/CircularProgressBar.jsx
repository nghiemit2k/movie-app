import React from 'react'

const CircularProgressBar = ({ percentage = 0, size = 3, strokeWidth = 0.25, strokeColor = 'green' }) => {
    const radius = size / 2 - strokeWidth
    return (
        <div>
            <svg width={`${size}vw`} height={`${size}vw`}>
                <circle r={`${radius}vw`} cx={`${size / 2}vw`} cy={`${size / 2}vw`} stroke='white'
                    strokeWidth={`${strokeWidth}vw`} />
                <circle r={`${radius}vw`} cx={`${size / 2}vw`} cy={`${size / 2}vw`} stroke={strokeColor}
                    strokeWidth={`${strokeWidth}vw`} fill='none'
                    strokeDasharray={`${2 * Math.PI * radius}vw`}
                    strokeDashoffset={`${2 * Math.PI * radius - (percentage / 100) * 2 * Math.PI * radius}vw`}
                    transform='rotate(-90)'
                    style={{ transformOrigin: 'center' }}
                    strokeLinecap='round'
                />
                <text x={`${size / 2}vw`} y={`${size / 2}vw`} textAnchor='middle' fill='white' fontSize='20px' alignmentBaseline='middle'>
                    {percentage}
                </text>
            </svg>
        </div>
    )
}

export default CircularProgressBar
