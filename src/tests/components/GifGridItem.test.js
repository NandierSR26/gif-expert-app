import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";



describe('pruebas en GifGridItem', () => {
    
    const title = 'un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> )


    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe obtener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props().src);

        expect( img.props().src ).toBe(url);
        expect( img.props().alt ).toBe(title);
    });
    
    test('debe de tener animatedFadein', () => {
        const div = wrapper.find('div');

        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );
    });
    
});
