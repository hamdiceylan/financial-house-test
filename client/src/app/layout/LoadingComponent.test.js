import React from 'react'
import { shallow } from 'enzyme'
import LoadingComponent from './LoadingComponent'


describe('LoadingComponent', () =>{
    const loadingComponent = shallow(<LoadingComponent />);

    it('renders correctly', () => {
        expect(loadingComponent).toMatchSnapshot();
    })

})

