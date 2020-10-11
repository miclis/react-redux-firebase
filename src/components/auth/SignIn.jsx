import React, { useReducer } from 'react';

const SignIn = () => {
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
        console.log(state);
    };

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
                </div>
            </form>
        </div>
    );
};

export default SignIn;
