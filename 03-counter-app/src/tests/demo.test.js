

// Describe sirve para juntar uno o varios tests en grupos.
describe('Pruebas en el archivo demo.test.js', () => {

    test ( 'Prueba Ejemplo', () => {
        // 1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // compara si son lo mismos strings.
    })

});