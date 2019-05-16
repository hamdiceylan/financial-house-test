import React from 'react'
import { shallow } from 'enzyme'
import { TransactionList } from './TransactionList';


describe('TransactionList', () =>{
    const transactionList = shallow(<TransactionList />);

    it('renders correctly', () => {
        expect(transactionList).toMatchSnapshot();
    })

})

