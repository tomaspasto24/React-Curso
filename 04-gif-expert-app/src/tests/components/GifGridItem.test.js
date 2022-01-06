import { shallow } from "enzyme"
import React from 'react';
import { GifGridItem } from "../../Components/GifGridItem";

describe('Test sobre GifGridItem.js', () => {
    const id = 22;
    const title = 'Prueba';
    const url = 'https://hola.com';
    const wrapper = shallow(<GifGridItem id={id} title={title} url={url}/>);

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    
    });

    test('Debe tener un parrafo con el titulo', () => {

        const textoParrafo = wrapper.find('p').text().trim();
        expect(textoParrafo).toBe(title);

    });

    test('Debe tener la imagen igual al url y al alt', () => {

        const img = wrapper.find('img');
        const src = img.props().src;
        const alt = img.props().alt;

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        expect(div.prop('className')).toContain('animate__fadeIn')
    });
})