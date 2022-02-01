import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";

describe('Pruebas sobre AppRouter', () => {
    
    const contextValue = {
        user: {
            logged: false
        }
    };

    test('Debe de mostrar el login si no esta autenticado el usuario.', () => {
        
        const wrapper = mount( <AuthContext.Provider value={ contextValue }>
            <AppRouter/>
        </AuthContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('Login Screen');
    });

});