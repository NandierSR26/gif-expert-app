

/* helper que hace la consulta a la api y retorna los resultados */
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=baQq8U4hR67UYu7vKUGHStXXDXvWyjxr&q=${encodeURI(category)}&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // contruye objeto con las propiedades necesarias
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs);
    return gifs;

}