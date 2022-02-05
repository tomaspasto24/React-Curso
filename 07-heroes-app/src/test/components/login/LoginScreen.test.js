import {mount} from 'enzyme';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas sobre <LoginScreen />.', () => {

    const dispatchFunc = jest.fn();

    const contextValue = {
        user: {
            name: 'Tomy',
            logged: false
        },
        dispatch: dispatchFunc
    }

    const wrapper = mount(
    <MemoryRouter>
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen />
        </AuthContext.Provider>
    </MemoryRouter>);

    test('Debe de mostrarse correctamente.', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegación.', () => {

        wrapper.find('button').simulate('click');

        expect( dispatchFunc ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Tomás' }
        });

        expect( mockNavigate ).toHaveBeenCalledWith('/marvel', {
            replace: true
        });

        localStorage.setItem('lastPath', '/dc');

        wrapper.find('button').simulate('click');

        expect( mockNavigate ).toHaveBeenCalledWith('/dc', {
            replace: true
        });
    });

});