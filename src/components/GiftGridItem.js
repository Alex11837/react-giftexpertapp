import React from 'react'

export const GiftGridItem = ({title,url}) => {
    return (
        
        <div className='card animate__animated animate__fadeIn__delay-2s' >
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
