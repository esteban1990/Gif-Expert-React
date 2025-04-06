


export const getGifsImages = async(category) => {

    const api_key = `fbC7UA2YXO9XfXTiMfZBldmCj2YkJ1R0`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();



    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
            
        }
    })
    return gifs;
}