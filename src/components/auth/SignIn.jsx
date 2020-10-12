import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../../redux/actions/authActions';

const SignIn = (props) => {
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setState({ [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.signIn(state);
    };

    const { authError, auth } = props;

    if (auth.uid) return <Redirect to='/' />;
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Sign In</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange} value={state.email} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} value={state.password} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Login</button>
                    <div className='red-text center'>{authError ? <p>{authError}</p> : null}</div>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = {
    signIn: authActions.signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
