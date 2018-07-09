import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// immediately export it.
// pass an empty object and then wire authReducer into it.
// whatever keys, we need thoughts when we name our functions
// auth or something 
export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
})

// console.log('STRIPE KEY IS ', process.env.REACT_APP_STRIPE_KEY)
// console.log('Environment is ', process.env.NODE_ENV)