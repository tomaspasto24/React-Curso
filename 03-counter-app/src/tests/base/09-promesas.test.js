import getHeroeByIdAsync from "../../base/09-promesas"
import heroes from "../../data/heroes";


describe('Pruebas con promesas.', () => {
    // El done ingresado como parametro sirve para que sea llamado al momento en el que se quiera terminar
    // el test, por ejemplo en el then de una llamada asíncrona.
    test('getHeroeByIdAsync debe retornar un héroe async.', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( (heroe) => {
                expect(heroe).toEqual(heroes.find( (h) => h.id === id));
                done();
            });
    });

    test('Debe retornar un error en caso de que el héroe por id no exista.', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( (error) => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            })
    });

})