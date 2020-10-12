import * as types from '../actions/actionTypes';

const initState = {
    authError: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_ERROR:
            console.log('Login error');
            return { ...state, authError: 'Login failed' };
        case types.LOGIN_SUCCESS:
            console.log('Login success');
            return { ...state, authError: null };
        case types.SIGNOUT_SUCCESS:
            console.log('Logged out');
            return state;
        case types.SIGNUP_SUCCESS:
            console.log('Signup success');
            return { ...state, authError: null };
        case types.SIGNUP_ERROR:
            console.log('Signup error');
            return { ...state, authError: action.err.message };
        default:
            return state;
    }
};

export default authReducer;
