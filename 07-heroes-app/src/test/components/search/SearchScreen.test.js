import { SearchScreen } from "../../../components/search/SearchScreen";
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";

// Se simula el paquete de react-router-dom, todas las funciones siguen funcionando igual menos useNavigate, la cual retorna un jest.fn().
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas sobre <SearchScreen />.', () => {

    test('Debe mostararse correctamente con valores por defecto.', () => {
        
        const wrapper = mount( 
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen /> 
        </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Buscar un héroe');
    });

    test('Debe de mostrar a Batman y el input con el valor de queryString', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar un error si no encuentra el héroe.', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe('No hay resultados: batman123');
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de llamar el navigate a la nueva pantalla.', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        );

        // Simula el cambio en el input pasandole como segundo argumento el evento (e), que es manipulado por el handleInputChange.
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        // Se encuentra la función de la propiedad onSubmit y se manda el objeto como el evento.
        wrapper.find('form').prop('onSubmit')({
            preventDefault: () => {}
        });

        expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');
    });

}); 