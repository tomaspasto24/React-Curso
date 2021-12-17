



const getImagen = async() => {

    try{
        const apikey = 'UhOKKsosgEexCN7bvpVx3iWWrJBbSrfW';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
    catch (error)
    {
        //manejo de error.
        console.log(error);
    }
}


getImagen();