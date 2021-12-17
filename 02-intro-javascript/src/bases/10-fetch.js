
//Api key sacada de Giphy Developers.
const apikey = 'UhOKKsosgEexCN7bvpVx3iWWrJBbSrfW';

// Petición utilizando Fetch API, devuelve una promesa.
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`); 


// El segundo .then es porque resp.json devuelve otra promesa, entonces se concadenan los then.
peticion
    .then( (resp) => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        //Se crea una imagen y se asigna a src la imagen.
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch( console.warn );