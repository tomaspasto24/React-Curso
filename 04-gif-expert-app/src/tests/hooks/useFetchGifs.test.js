import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useFetchGifs from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en useFetchGifs', () => {

    
    test('Debe retornar el estado inicial.', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect(loading).toBe(true);
        expect(data).toEqual([]);
    });

    test('Debe de retornar un arreglo de imágenes y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const { data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });

});