import {mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Pruebas en <DashboardRoutes />.', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Juanito'
        }
    };

    test('Debe de mostrarse correctamente (Marvel).', () => {
        const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            {/* MemoryRouter provee el contexto para que useNavigate se pueda usar. */}
            <MemoryRouter initialEntries={ ['/'] }>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();


        expect( wrapper.find('.text-info').text().trim() ).toBe('Juanito');
    });

    test('Debe de mostrarse correctamente (DC).', () => {
        const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            {/* MemoryRouter provee el contexto para que useNavigate se pueda usar. */}
            <MemoryRouter initialEntries={ ['/dc'] }>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('h1').text().trim() ).toBe('DC');
    });
});