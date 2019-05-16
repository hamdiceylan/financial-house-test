import React from 'react'
import { shallow } from 'enzyme'
import FxDetails from './FxDetails';


describe('FxDetails', () =>{
    const props = {
        merchant : {
            originalAmount: '1500',
            originalCurrency: 'GBP'
        }
    }
    const fxDetails = shallow(<FxDetails {...props} />);

    it('renders correctly', () => {
        expect(fxDetails).toMatchSnapshot();
    })

})

