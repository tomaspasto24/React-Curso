import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas sobre <RealExampleRef />.', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente.', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });

    test('Debe mostrar el componente <MultipleCustomHooks />.', () => {

        wrapper.find('.btn').simulate('click');
        
        expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });

});