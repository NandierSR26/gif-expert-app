import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/* componente principal de la app */
export const GifExpertApp = () => {

    // almacena el nombre de las categorias | guarda el nombre de una nueva cetegoria
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Naruto']);
    //     // setCategories( cat => [ ...cat, 'Naruto' ]);
    // }

    return (
        <>
            <h2>App de GIfs</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ul>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ul>
        </>
    )
}
