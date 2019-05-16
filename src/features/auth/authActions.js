import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions'
import { LOGIN_USER } from './authConstants'

export const login = (history) => {
    return async (dispatch, getState) => {
      try {
        dispatch(asyncActionStart())
        const response = await fetch('/api/v3/merchant/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"email":"demo@bumin.com.tr","password":"cjaiU8CV"})
        });
        const body = await response.json();
        localStorage.setItem('access_token', body.token);
        dispatch({type: LOGIN_USER,payload: {body}})
        history.push('dashboard')
        dispatch(asyncActionFinish())
      } catch(error){
        dispatch(asyncActionError())
        console.log(error);
      }
    }
};

