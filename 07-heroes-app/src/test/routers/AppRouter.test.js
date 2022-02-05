import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";

describe('Pruebas sobre AppRouter', () => {

    test('Debe de mostrar el login si no esta autenticado el usuario.', () => {
        const contextValue = {
            user: {
                logged: false
            }
        };

        const wrapper = mount( <AuthContext.Provider value={ contextValue }>
            <AppRouter/>
        </AuthContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('Login Screen');
    });

    test('Debe de mostrar el componente Marvel si está autenticado.', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Tomás'
            }
        };

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists() ).toBe( true );
    });

});