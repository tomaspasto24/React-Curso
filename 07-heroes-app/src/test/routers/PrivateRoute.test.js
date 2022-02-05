import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Saliendo de aquí</span>
}));

describe('Pruebas en <PrivateRoute />.', () => {
    
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si está autenticado y guardar en el localStorage.', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        };

        const wrapper = mount(
        <AuthContext.Provider value={ contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <PrivateRoute>
                    <h1>Private component</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect( wrapper.text().trim() ).toBe('Private component');

        expect(localStorage.setItem).toBeCalledWith('lastPath', '/');
    });

    test('Debe de bloquear el componente si no está autenticado.', () => {
        const contextValue = {
            user: {
                logged: false,
            }
        };

        const wrapper = mount(
        <AuthContext.Provider value={ contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <PrivateRoute>
                    <h1>Private component</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect( wrapper.text() ).toBe('Saliendo de aquí');
    })

})