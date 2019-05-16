import { LOGIN_USER } from './authConstants'
import { createReducer } from '../../app/common/util/reducerUtil'

const initialState = {
    currentUser: {
       token: localStorage.getItem('access_token')  
    },
    authenticated: false,
}

export const loginUser = (state,payload) => {
    return {
        ...state,
        authenticated: true,
        currentUser: payload.body
    }
}

export default createReducer(initialState, {
    [LOGIN_USER] : loginUser
})