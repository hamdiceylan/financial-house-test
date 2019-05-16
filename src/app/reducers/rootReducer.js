import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'
import dashboardReducer from '../../features/dashboard/dashboardReducer'

const rootReducers = combineReducers({
    form: FormReducer,
    auth: authReducer,
    async: asyncReducer,
    dashboard: dashboardReducer
});

export default rootReducers;