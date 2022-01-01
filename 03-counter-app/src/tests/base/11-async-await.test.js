import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-await y fetch.', () => {

    test('Debe retornar el URL de la imagen.', async() => {
        const imagen = await getImagen();

        expect( imagen.includes('https://') ).toBe( true );
    });

});