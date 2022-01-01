// import React, { useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';
// import getGifts from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';


export const GifGrid = ( {category} ) => {

    const { data:images, loading } = useFetchGifs(category);
        
    return (
        <>
            <h3 className='card'> {category} </h3>

            {/* Evalua si loading es true */}
            { loading && <p>Loading...</p>}

            {/* Operador ternario: primera expersion si es true, segunda si es false. */}
            {/* {loading ? 'Cargando...' : 'Data cargada.'} */}

            <div className="card-grid card">
                    {images.map( img => 
                        <GifGridItem 
                            key={img.id} 
                            { ...img }
                        />
                    )}
            </div> 
        </>    
    )
}