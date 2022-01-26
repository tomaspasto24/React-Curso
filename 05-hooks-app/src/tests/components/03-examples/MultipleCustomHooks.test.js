import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';

// mock simula que usa esa función, se debe especificcar con mockReturnValue() lo que va a devolver.
jest.mock('../../../hooks/useFetch');

describe('Pruebas sobre MultipleCustomHooks', () => {
    
    test('Debe mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Tomás',
                quote: 'Prueba'
            }]
        }); 

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text() ).toBe('Prueba');
        expect( wrapper.find('.blockquote-footer').text() ).toBe('Tomás');
    });

});