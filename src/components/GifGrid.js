import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'; 

/* componente contenedor de los resultados de una categoria,
recibe como props una categoria, desde GifExpertApp */
export const GifGrid = ({ category }) => {

    
    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            {<div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>}
        </>
    )
}
