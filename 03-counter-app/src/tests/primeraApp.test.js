import '@testing-library/jest-dom';
import React from 'react';
import PrimeraApp from "../primeraApp";
// import { render } from "@testing-library/react";
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';

    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

    //     expect( getByText(saludo) ).toBeInTheDocument;
    // });

    test('Debe mostrar <PrimeraApp /> correctamente.', () => {

        const saludo = 'Hola soy Goku';
        // Se genera una renderización del componente <PrimeraApp /> ingresado como argumento.
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>);
        
        //Se espera que esa renderización generada sea igual a la que se encuentra en el Snapshot correspondiente.
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar el subtitulo enviado en props.', () => {

        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy un subtitulo enviado por props';

        const wrapper = shallow(
        <PrimeraApp 
            saludo={ saludo }
            subtitulo={ subtitulo }
        />
        );

        // El método find de wrapper busca por etiquetas o por ids de las etiquetas. Con text() se trae el texto contenido.
        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    })
})