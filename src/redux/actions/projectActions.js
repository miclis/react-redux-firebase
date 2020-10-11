import * as types from './actionTypes';

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        // make async call to database
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: 'Net',
                authorLastName: 'Ninja',
                authorId: 12345,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({ type: types.CREATE_PROJECT, project });
            })
            .catch((err) => {
                dispatch({ type: types.CREATE_PROJECT_ERROR, err });
            });
    };
};
