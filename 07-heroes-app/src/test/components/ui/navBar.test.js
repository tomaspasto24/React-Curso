import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/NavBar';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas sobre <navBar />.', () => {

    test('Debe de mostrarse correctamente.', () => {

        const contextValue = {
            user: {
                name: 'Tomás'
            },
            dispatch: jest.fn()
        };

        const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={ contextValue }>
                <Navbar />
            </AuthContext.Provider>
        </MemoryRouter>
        );

        expect( wrapper.find('.text-info').text().trim() ).toBe('Tomás');
    });

    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos. ', () => {

        const dispatch = jest.fn();

        const contextValue = {
            user: {
                name: 'Tomás'
            },
            dispatch: dispatch
        };

        const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={ contextValue }>
                <Navbar />
            </AuthContext.Provider>
        </MemoryRouter>
        );
        
        wrapper.find('button').simulate('click');

        expect( dispatch ).toHaveBeenCalledWith({
            type: types.logout,
        }); 

        expect( mockNavigate ).toHaveBeenCalledWith('/login', {
            replace: true
        });
    });
});