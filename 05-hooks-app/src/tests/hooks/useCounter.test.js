import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter.', () => {

    test('Debe de retornar counter en 100.', () => {
        const { result } = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);
    });

    test('Debe de incrementar el counter en 1.', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        // Dentro de act es donde van las funciones para actuar sobre el hook.
        act( () => {

            increment();
        
        });

        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('Debe de decremetnar el counter en 1.', () => {
        const { result } = renderHook( () => useCounter(100));
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('Debe de resetear el counter.', () => {
        const { result } = renderHook( () => useCounter(100));

        const { increment, reset } = result.current;

        act( () => {
            increment();
            increment();
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);
    });
    
});