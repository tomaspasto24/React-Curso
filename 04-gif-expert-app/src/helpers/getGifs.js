const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=UhOKKsosgEexCN7bvpVx3iWWrJBbSrfW`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            // ? es para que si no existe el elemento images no haga nada.
            url: img.images?.downsized_medium.url,
        }
    })

    return gifs;
}

export default getGifs;