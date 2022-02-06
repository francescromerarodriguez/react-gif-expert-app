import React from 'react'

export const GidGridItem = ( props ) => {

    // Destructuramos las props aquí
    const { id, title, url } = props;

    // Como class es una palabra reservada de JS, se debe poner "className" para poner clases de css
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
