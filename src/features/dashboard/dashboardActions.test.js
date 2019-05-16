import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_TRANSACTIONS, FETCH_CLIENT, FETCH_TRANSACTION_DETAIL } from './dashboardConstants';
import { fetchTransaction, getClientDetail, getTransactionDetail } from './dashboardActions';


describe('transaction list', () =>{
    let createMockStore = configureMockStore([thunk]);
    let store = createMockStore( {dashboard :{ transactions: {}, client: {}, transactionDetail: {} }});

    let mockTransactionListResponse = {
        body: {
            data : [{
                    customerInfo:  {
                        billingFirstName: 'Hamdi'
                    }
            }]
        }
    }
    fetchMock.post('/api/v3/transaction/list', mockTransactionListResponse);

    it('creates an async action to fetch transaction list endpoint', () => {
        let expectedActions = { payload: mockTransactionListResponse, type: FETCH_TRANSACTIONS };

        return store.dispatch(fetchTransaction()).then(() => {
            expect(store.getActions()[1]).toEqual(expectedActions);
        });
    });
})

describe('client detail', () =>{
    let createMockStore = configureMockStore([thunk]);
    let store = createMockStore( {dashboard :{ transactions: {}, client: {}, transactionDetail: {} }});

    let mockClientDetailData = {
        body: {
            customerInfo : {
                billingFirstName: 'Hamdi'
            }
        }
    }
    fetchMock.post('api/v3/client', mockClientDetailData);

    it('creates an async action to fetch client detail endpoint', () => {
        let expectedActions = { payload: mockClientDetailData, type: FETCH_CLIENT };
    
        return store.dispatch(getClientDetail()).then(() => {
        expect(store.getActions()[1]).toEqual(expectedActions);
        });
    });
})

describe('client detail', () =>{
    let createMockStore = configureMockStore([thunk]);
    let store = createMockStore( {dashboard :{ transactions: {}, client: {}, transactionDetail: {} }});

    let mockTransactionDetailData = {
        body: {
            transaction : {
                merchant: {
                    transactionId: "1011028-1539357144-1293"
                }
            }
        }
    }
    fetchMock.post('api/v3/transaction', mockTransactionDetailData);
    
    
    it('creates an async action to fetch transaction detail endpoint', () => {
        const expectedActions = { payload: mockTransactionDetailData, type: FETCH_TRANSACTION_DETAIL };
      
        return store.dispatch(getTransactionDetail()).then(() => {
          expect(store.getActions()[1]).toEqual(expectedActions);
        });
    });
})










