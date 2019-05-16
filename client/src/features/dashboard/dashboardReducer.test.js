import dashboardReducer from './dashboardReducer';
import * as constants from './dashboardConstants';

describe('dashboardReducer', () => {
    
    it('should set state with correct client detail data', () => {
        let clientDetailData = {
            body: {
                customerInfo : {
                    billingFirstName: 'Hamdi'
                }
            }
        }
        expect(dashboardReducer(undefined, { type: constants.FETCH_CLIENT, payload: clientDetailData }).currentClient)
            .toEqual(clientDetailData.body);
    });

    it('should set state with correct transaction detail data', () => {
        let transactionDetailData = {
            body: {
                transaction : {
                    merchant: {
                        transactionId: "1011028-1539357144-1293"
                    }
                }
            }
        }
        expect(dashboardReducer(undefined, { type: constants.FETCH_TRANSACTION_DETAIL, payload: transactionDetailData }).currentTransaction)
            .toEqual(transactionDetailData.body);
    });

    it('should set state with correct transactions list data', () => {
        let transactionListData = {
            body: {
                data : [{
                        customerInfo:  {
                            billingFirstName: 'Hamdi'
                        }
                }]
            }
        }
        expect(dashboardReducer(undefined, { type: constants.FETCH_TRANSACTIONS, payload: transactionListData }).transactions)
            .toEqual(transactionListData.body.data);
    });

});