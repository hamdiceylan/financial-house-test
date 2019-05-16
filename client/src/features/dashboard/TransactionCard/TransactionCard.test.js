import React from 'react'
import { shallow } from 'enzyme'
import TransactionCard from './TransactionCard';

describe('TransactionCard', () =>{
    const props = {
        transaction : {
            transactionId: 'transactionId',
            fxTransactionId: 'fx',
            referenceNo: 'reference',
            operation: 'operation',
            status: 'status',
            type: 'type'
        }
    }
    const transactionCard = shallow(<TransactionCard {...props} />);

    it('renders correctly', () => {
        expect(transactionCard).toMatchSnapshot();
    })

})

