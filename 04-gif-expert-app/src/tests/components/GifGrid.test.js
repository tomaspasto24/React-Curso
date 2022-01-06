import { shallow } from "enzyme";
import { GifGrid } from "../../Components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';
jest.mock("../../hooks/useFetchGifs");


describe('Pruebas en GifGrid.js', () => {
    const category = 'One Punch';
    
    test('Debe mostrar el componente correctamente.', () => {

        //Hace que la función que se quiere simular devuelva ese objeto.
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);    
        expect(wrapper).toMatchSnapshot();
    });

    test('Se deben mostrar items cuando se cargan imágenes en useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://facebook.com',
            title: 'Facebook',
        },
        {
            id: '123',
            url: 'https://google.com',
            title: 'Google',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);    

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });

});