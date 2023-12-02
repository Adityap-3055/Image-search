import React from 'react'

const Image = ({ data }) => {
    return (
        <a href={data.urls.regular} target="_blank" rel='noreferrer'>
            <img className='h-72 w-full object-cover rounded-lg shadow-md' src={data.urls.small} alt={data.alt_description}></img>
        </a>
    )
}

export default Image