import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    /*
    // Para mostrar las categorias, entre llaves no funciona hacer un for, pero si funciones asociadas al objeto como "map"
    const categories = ['One piece', 'Dragon Ball', 'Pokemon'];
    // No se pueden tener 2 con el mismo key
    categories.map(category => {
        return <li key={ category }>{ category }</li>;
    })
    */
    
    const [categories, setCategories] = useState(['Pokemon']);// 'One piece', 'Dragon Ball'

    /*
    const handleAdd = () => {
        // Para añadir un nuevo elemento al array de categories, usamos el operador spread (que devuelve todas las posiciones una a una para agregarlas al nuevo array)
        setCategories([...categories, 'Marvel']);
    }
    // Botón que llama al handleAdd: <button onClick={ handleAdd }>Añadir</button>
    */

    // Para comunicarse con otro component hay que pasarle en la renderización la referencia a lo que queramos pasar, en este caso "setCategories"
    // El handleAdd NO se lo pasamos
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            
            <ol>
                { /* return <li key={ category }>{ category }</li>; */}
                {
                    categories.map( category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;