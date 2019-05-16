import React from 'react'
import { shallow } from 'enzyme'
import CustomerInfo from './CustomerInfo';


describe('CustomerInfo', () =>{
    const props = {
        customerInfo : {
            billingFirstName: 'first name',
            billingLastName: 'last name',
            email: 'email',
            billingState: 'state',
        }
    }
    const customerInfo = shallow(<CustomerInfo {...props} />);

    it('renders correctly', () => {
        expect(customerInfo).toMatchSnapshot();
    })

})

