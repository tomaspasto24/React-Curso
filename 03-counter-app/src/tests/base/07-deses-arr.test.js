import {retornaArreglo} from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion.', () => {
    test('Debe retornar un string y un numero', () => {
        // Una forma:
        // const arr = retornaArreglo(); // ['ABC', 123]
        // expect(arr).toEqual(['ABC', 123]);

        // Otra forma:
        const [letras, numeros] = retornaArreglo();

        expect(typeof(letras)).toBe('string');
        expect(letras).toBe('ABC');

        expect(typeof(numeros)).toBe('number');
        expect(numeros).toBe(123);  
    });
});