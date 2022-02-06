// La función es async para que se ejecute cuando se necesite y no al cargar y con await para que espere la respuesta antes de continuar el código
export const getGifs = async(category) => {

    console.log(category);
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=SXMtydRC8lo5zfW0Lw10X58mD9HrV4LY`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    
    return gifs;

}