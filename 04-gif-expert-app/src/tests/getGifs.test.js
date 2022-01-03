import getGifs from "../helpers/getGifs";

describe('Pruebas con getGifs.js', () => {

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('OnePunch');

        expect(gifs.length).toBe(10);
    });

    test('No debería entregar elementos', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
});