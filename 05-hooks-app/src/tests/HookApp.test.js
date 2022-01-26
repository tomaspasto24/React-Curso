import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { HookApp } from '../HookApp';

describe('Pruebas sobre HookApp.', () => {

    test('Debe mostrar el componente correctamente.', () => {

        const wrapper = shallow( <HookApp /> );
        
        expect(wrapper).toMatchSnapshot();
    });

});