import { HeroScreen } from "../../../components/hero/HeroScreen";
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <HeroScreen />.', () => {
    
    test('No debe de mostrar el <HeroScreen /> si no hay un héroe en el URL.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={ <HeroScreen /> } />
                    <Route path='/' element={ <h1>No hay heroes.</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('h1').text().trim() ).toBe('No hay heroes.');
    });

    test('Debe de mostrar un héroe si el parámetro existe y se encuentra.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={ <HeroScreen /> } />
                    <Route path='/' element={ <h1>No hay heroes.</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
    });

    test('Debe de regresar a la pantalla anterior.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={ <HeroScreen /> } />
                    <Route path='/' element={ <h1>No hay heroes.</h1> } />
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');
        expect( mockNavigate ).toBeCalledWith(-1);
    });

    test('Debe de mostrar el no Hero Page si no hay heroe.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={ <HeroScreen /> } />
                    <Route path='/' element={ <h1>No hay heroes.</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('No hay heroes.');
    });
});