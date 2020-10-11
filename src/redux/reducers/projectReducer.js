import { projects } from '../../tools/mockData';
import * as types from '../actions/actionTypes';

const initState = { projects };

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case types.CREATE_PROJECT:
            console.log('created project', action.project);
            return state;
        case types.CREATE_PROJECT_ERROR:
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
