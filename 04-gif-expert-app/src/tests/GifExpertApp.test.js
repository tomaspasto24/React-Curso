import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas sobre GifExpertApp.', () => {
    
    test('Que muestre correctamente el componente.', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Mario'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    });

});