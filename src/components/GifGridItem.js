import React from 'react';

/* componente de trajeta de cada gif, se llama desde GifGrid
y se itera con todas las imagenes, ademas se envian el 
id, titulo y urlcomo props */
export const GifGridItem = ( {id, title, url} ) => {

    // console.log(id, title, url);

    return (
        <div className="card animate__animated animate__fadeInLeft">
            <img
                src={url}
                alt={title}
            />
            <div className="card-text">
                <p>{title}</p>
            </div>
        </div>
    )
}
