import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';


describe('pruebas de GifExpertApp', () => {

    test('mostrar el componente', () => {
        const wapper = shallow( <GifExpertApp />);

        expect( wapper ).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {

        const categories = ['one punch', 'naruto'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
    
});
