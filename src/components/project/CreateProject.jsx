import React, { useReducer } from 'react';
import * as projectActions from '../../redux/actions/projectActions';
import { connect } from 'react-redux';

const CreateProject = (props) => {
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        title: '',
        content: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setState({ [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createProject(state);
        props.history.push('/');
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Create New Project</h5>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' onChange={handleChange} value={state.title} />
                </div>
                <div className='input-field'>
                    <label htmlFor='content'>Content</label>
                    <textarea
                        id='content'
                        className='materialize-textarea'
                        onChange={handleChange}
                        value={state.content}
                    />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    createProject: projectActions.createProject,
};

export default connect(null, mapDispatchToProps)(CreateProject);
