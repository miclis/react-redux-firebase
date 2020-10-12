import * as types from './actionTypes';

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
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
