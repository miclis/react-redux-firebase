import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import ProjectList from '../project/ProjectList';
import Notifications from './Notifications';

const Dashboard = (props) => {
    useFirestoreConnect(['projects']);
    const projects = useSelector((state) => state.firestore.ordered.projects);
    if (!isLoaded(projects)) {
        console.log('Not loaded yet');
        return <div>Loading...</div>;
    }

    if (isEmpty(projects)) {
        console.log('Empty');
        return <div>Todos List Is Empty</div>;
    }
    console.log('render with data');
    return (
        <div className='dashboard container'>
            <div className='row'>
                <div className='col s12 m6'>
                    <ProjectList projects={projects} />
                </div>
                <div className='col s12 m5 offset-m1'>
                    <Notifications />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
