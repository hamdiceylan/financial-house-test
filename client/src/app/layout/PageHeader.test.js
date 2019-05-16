import React from 'react'
import { shallow } from 'enzyme'
import PageHeader from './PageHeader';

describe('PageHeader', () =>{
    const pageHeader = shallow(<PageHeader />);

    it('renders correctly', () => {
        expect(pageHeader).toMatchSnapshot();
    })
})

