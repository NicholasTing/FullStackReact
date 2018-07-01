import { combineReducers } from 'redux';
import authReducer from './authReducer';

// immediately export it.
// pass an empty object and then wire authReducer into it.
// whatever keys, we need thoughts when we name our functions
// auth or something 
export default combineReducers({
    auth: authReducer
})