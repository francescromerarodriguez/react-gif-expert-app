import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Recibimos el setCategories de props (que desestructurizamos)
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    // Al llamar así a setCategories, como no tenemos las categories le decimos que coja el estado anterior y lo desestructuramos para ponerle el nuevo valor al final: setCategories(categories => [...categories, inputValue]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    // No necesitamos englobarlo en un Fragment porque el form hace de elemento que engloba todo el component
    return (
        <form onSubmit={ handleFormSubmit }>
            <h2>Add category</h2>
            <input type='text' value={inputValue} onChange={ handleInputValue }/>
        </form>
    )
}

// Obligamos que nos pasen setCategories como function
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
