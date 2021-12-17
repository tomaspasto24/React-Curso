import { getHeroeById } from './08-import';

// Promesa ingresa un callback con dos parámetros: resolve (resuelto), reject (rechazado).
// const promesa = new Promise( (resolve, reject) => { 
//     setTimeout( () => {
//         const personaje = getHeroeById(2);
//         //Resolve es el método que se ejecuta cuando se resuelve la promesa.
//         //Puede ingresar parámetros.
//         resolve(personaje);
        
//         //Reject es cuando se rechaza la promesa.
//         // reject('No se ha podido encontrar el héroe.');
//     }, 2000 )
// } );

// //el método then se ejecuta cuando se llama a resolve().
// promesa.then( (heroe) => {
//     console.log('then de la promesa', heroe);
// })
// .catch( (err) => console.warn(err) );

const getHeroeByIdAsync = ( id ) => new Promise( (resolve, reject) => {
        setTimeout(
            () => {
                const personaje = getHeroeById(id);
                if (personaje === undefined) reject('No se encuentra el personaje.');
                resolve(personaje);
            }, 2000)
});

// .finally se ejecuta siempre


getHeroeByIdAsync(3)
    //Como recibe un solo parámetro se pone la referencia a la función y funciona igual.
    .then( console.log )
    .catch( console.warn )
    .finally( () => console.log('Bloque Finally.'));