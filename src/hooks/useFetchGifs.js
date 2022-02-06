import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

// Un custom hook es como un functional component pero personalizado y orientado a ser un hook
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Hacemos el useEffect para que se ejecute una vez al cargar el hook (por el array vacío), y con cada cambio se ejecute de nuevo
    useEffect( () => {
        // Importamos el helper que llama al fetch
        getGifs( category )
            .then( imgs => {
                // Le ponemos un timeout de 1s para que se vea el cargando en el GifGrid
                setTimeout(()=>{
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 1000);
            });
    }, []);

    return state; // Devuelve el objeto con data y loading
}