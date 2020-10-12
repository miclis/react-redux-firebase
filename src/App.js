import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard} />
                    <PrivateRoute path='/project/:id' component={ProjectDetails} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <PrivateRoute path='/create' component={CreateProject} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
