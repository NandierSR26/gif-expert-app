import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* componente con el formulario y funcionalidad para añadir 
una nueva categoria de gifs*/
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    // extrae lo que el usuario escriba en el input
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    // realiza una busqueda y actualiza el state con los resultados
    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('')
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
