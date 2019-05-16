import { FETCH_TRANSACTIONS, FETCH_CLIENT, FETCH_TRANSACTION_DETAIL } from './dashboardConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions'

export const fetchTransaction = () => {
    return async (dispatch, getState) => {
      try {
        dispatch(asyncActionStart())
        const response = await fetch('/api/v3/transaction/list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('access_token')
          },
          body: JSON.stringify({"fromDate": "2011-07-01","toDate": "2019-08-01"})
        });
        const body = await response.json();
        dispatch({type: FETCH_TRANSACTIONS,payload: {body}})
        dispatch(asyncActionFinish())
      } catch(error){
        dispatch(asyncActionError())
        console.log(error);
      }
    }
};

export const getClientDetail = (transactionId) => {
    return async (dispatch,getState) => {
        try{
            dispatch(asyncActionStart())
            const response = await fetch('/api/v3/client', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.getItem('access_token')
                },
                body: JSON.stringify({"transactionId": transactionId})
              });
              const body = await response.json();
              dispatch({type: FETCH_CLIENT,payload: {body}})

            dispatch(asyncActionFinish())
        } catch(error){
            dispatch(asyncActionError())
            console.log(error);
        }
    }
};

export const getTransactionDetail = (transactionId) => {
    return async (dispatch,getState) => {
        try{
            dispatch(asyncActionStart())
            const response = await fetch('/api/v3/transaction', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.getItem('access_token')
                },
                body: JSON.stringify({"transactionId": transactionId})
              });
              const body = await response.json();
              dispatch({type: FETCH_TRANSACTION_DETAIL,payload: {body}})

            dispatch(asyncActionFinish())
        } catch(error){
            dispatch(asyncActionError())
            console.log(error);
        }
    }
};