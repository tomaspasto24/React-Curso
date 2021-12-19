import React from 'react';
import PropTypes from 'prop-types';
// Ejemplo de componente. En react hay componentes basados en clases y en funciones, en nuestro caso vamos a trabajar
// con los que estan basados en funciones. FC (Funcional Component).

const PrimeraApp = ( { saludo, subtitulo } ) => {
    //Se puede renderizar en HTML todas las variables menos objetos en si y booleanos.
    const persona = {
        nombre: 'Esteban',
        edad: 33
    };
    // Para retornar varios elementos se usa los parentesis y una etiqueta fragment, div o <> como en el caso, 
    // las divs se acumulan por eso es preferible usar Fragment o <>.
    return (
        <>
            {/* Se puede poner cualquier variable de javascript dentro de los {} */}
            <h1> {saludo} </h1>
            {/* Convierte el objeto en string para poder renderizarlo. */}
            <pre> { JSON.stringify(persona) } </pre>
            <p> {subtitulo} </p>
        </>
        );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo por defecto.',
}

export default PrimeraApp;