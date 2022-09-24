import { getGifs } from "../../helpers/getGifs";

describe('pruebas con getGifs', () => {

    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('one ounch');

        expect( gifs.length ).toBe( 10 );
    });

    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });
    
});
