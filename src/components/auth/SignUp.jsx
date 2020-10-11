import React, { useReducer } from 'react';

const SignUp = () => {
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange} value={state.email} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} value={state.password} />
                </div>
                <div className='input-field'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' onChange={handleChange} value={state.firstName} />
                </div>
                <div className='input-field'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' onChange={handleChange} value={state.lastName} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
