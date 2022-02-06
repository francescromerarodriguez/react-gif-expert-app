import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GidGridItem } from './GidGridItem';

export const GifGrid = ({ category }) => {

    // Al destructurar la respuesta de useFetchGifs (el custom hooks), renombramos data a images para usarlo en el component
    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {/* El operador && hace que solo se evalue lo de la derecha como un if ternario pero sin el else */}
            { loading && <h5 className="animate__animated animate__flash">Cargando...</h5> }
            <div className="card-grid" key={ category }>
                {
                    images.map(img => (
                        <GidGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
