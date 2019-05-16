import React from 'react'
import { shallow } from 'enzyme'
import DashboardNav from './DashboardNav';


describe('DashboardNav', () =>{
    const dashboardNav = shallow(<DashboardNav />);

    it('renders correctly', () => {
        expect(dashboardNav).toMatchSnapshot();
    })

})

