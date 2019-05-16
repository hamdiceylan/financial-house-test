import { FETCH_TRANSACTIONS, FETCH_CLIENT, FETCH_TRANSACTION_DETAIL } from './dashboardConstants'
import { createReducer } from '../../app/common/util/reducerUtil'

const initialState = {
    transactions: [],
    client : {},
    transactionDetail: {}
}

export const fetchTransactions = (state,payload) => {
    return {
        ...state,
        transactions: payload.body.data
    }
}

export const fetchClient = (state,payload) => {
    return {
        ...state,
        currentClient: payload.body
    }
}

export const fetchTransactionDetail = (state,payload) => {
    return {
        ...state,
        currentTransaction: payload.body
    }
}

export default createReducer(initialState, {
    [FETCH_TRANSACTIONS] : fetchTransactions,
    [FETCH_CLIENT] : fetchClient,
    [FETCH_TRANSACTION_DETAIL] : fetchTransactionDetail
})
