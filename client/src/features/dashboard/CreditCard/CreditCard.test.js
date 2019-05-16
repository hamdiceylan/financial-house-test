import React from 'react'
import { shallow } from 'enzyme'
import CreditCard from './CreditCard';


describe('CreditCard', () =>{
    const props = {
        client : {
            number: '4242-4242-4242-4242',
            expiryMonth: '12',
            expiryYear: '21'
        }
    }
    const creditCard = shallow(<CreditCard {...props} />);

    it('renders correctly', () => {
        expect(creditCard).toMatchSnapshot();
    })

})

