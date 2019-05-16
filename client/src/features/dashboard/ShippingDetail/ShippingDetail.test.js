import React from 'react'
import { shallow } from 'enzyme'
import ShippingDetail from './ShippingDetail';

describe('ShippingDetail', () =>{
    const props = {
        client : {
            shippingAddress1: 'address 1',
            shippingAddress2: 'address 2',
            shippingCity: 'city',
            shippingCountry: 'country',
            shippingPostcode: 'post code'
        }
    }
    const shippingDetail = shallow(<ShippingDetail {...props} />);

    it('renders correctly', () => {
        expect(shippingDetail).toMatchSnapshot();
    })

})

