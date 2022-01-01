import { shallow } from "enzyme";
import '../CounterApp';
import CounterApp from "../CounterApp";


describe('Pruebas en <CounterApp />.', () => {
    //Wrapper definido para usar en tests.
    let wrapper = shallow(<CounterApp />);

    //El método BeforeEach se ejecuta antes de que entre en cada test.
    beforeEach( () => {
    
        wrapper = shallow(<CounterApp />);
    
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar el valor por defecto de 100', () => {
    
        const value = 100;

        const wrapper = shallow(<CounterApp value={ value }/>);

        const textoValor = wrapper.find('h2').text();

        expect(textoValor).toBe(value.toString());
    
    });

    test('Debe incrementar en 1 el contador con el botón +1', () => {
        
        // Método at() para especificar que devuelva el primer botón.
        const boton1 = wrapper.find('button').at(0);

        boton1.simulate('click');

        const textoContador = wrapper.find('h2').text().trim();

        expect(textoContador).toBe('11');
    
    });

    test('Debe decrementar en 1 el contador con el botón -1', () => {
    
        const boton1 = wrapper.find('button').at(2);
        console.log(boton1.html());
        boton1.simulate('click');

        const textoContador = wrapper.find('h2').text().trim();
 
        expect(textoContador).toBe('9');
    
    });

    test('Debe de dejar el valor por defecto el contador con el botón Reset', () => {

        const value = 105;
        wrapper = shallow(<CounterApp value={value}/>);
        const botonIncrementar = wrapper.find('button').at(0);
        const botonReset = wrapper.find('button').at(1);

        botonIncrementar.simulate('click');
        botonIncrementar.simulate('click');
        botonIncrementar.simulate('click');
        botonIncrementar.simulate('click');

        let textoCounter = wrapper.find('h2').text();
        expect(textoCounter).toBe('109');

        botonReset.simulate('click');
        textoCounter = wrapper.find('h2').text();
        expect(textoCounter).toBe(value.toString());
    });
});