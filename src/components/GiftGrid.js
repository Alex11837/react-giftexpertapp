import React/*, { useState, useEffect } */ from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
//import { getGifts } from '../helpers/getGifts';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifts(category);
    return (
        <>
            <h3 className='animate__animated animate__fadeIn__delay-2s'>{category}</h3>
            {loading && <p className='animate__animated flash'>Loading</p>}
            <div className="cardGrid ">

                {
                    images.map(img => (
                        <GiftGridItem key={img.id} {...img} />))
                }

            </div>
        </>
    )
}
