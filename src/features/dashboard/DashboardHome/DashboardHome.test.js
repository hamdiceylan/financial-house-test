import React from 'react'
import { shallow } from 'enzyme'
import DashboardHome from './DashboardHome';


describe('DashboardHome', () =>{
    const dashboardHome = shallow(<DashboardHome />);

    it('renders correctly', () => {
        expect(dashboardHome).toMatchSnapshot();
    })

})

