import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

const ProjectDetails = (props) => {
    const { id } = props.match.params;

    useFirestoreConnect([
        {
            collection: 'projects',
            doc: id,
        },
    ]);

    const project = useSelector(({ firestore: { data } }) => data.projects && data.projects[id]);

    if (!isLoaded(project))
        return (
            <div className='container center'>
                <p>Loading project...</p>
            </div>
        );

    if (isEmpty(project)) return <div>No such project...</div>;

    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>
                        Posted by {project.authorFirstName} {project.authorLastName}
                    </div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
