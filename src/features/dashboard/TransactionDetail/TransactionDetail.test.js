import React from 'react'
import { shallow } from 'enzyme'
import TransactionDetail from './TransactionDetail';


describe('TransactionDetail', () =>{
    const transactionDetail = shallow(<TransactionDetail />);

    it('renders correctly', () => {
        expect(transactionDetail).toMatchSnapshot();
    })

})

