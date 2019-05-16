import React from 'react'
import { shallow } from 'enzyme'
import ClientDetail from './ClientDetail'


describe('ClientDetail', () =>{
    const clientDetail = shallow(<ClientDetail />);

    it('renders correctly', () => {
        expect(clientDetail).toMatchSnapshot();
    })

})

