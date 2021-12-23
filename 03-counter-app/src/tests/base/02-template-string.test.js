// Se importa la libreria de jest-dom para tener las opciones de test. Es opcional.
import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Tomas!', () => {

        const nombre = 'Tomas';

        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola ' + nombre + '!');
    });

    test('getSaludo debe retronar Hola Carlos!, en caso de que no haya parametros provistos', () => {
        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Carlos!');
    })
})