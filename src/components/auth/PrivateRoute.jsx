import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.firebase.auth);

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoaded(auth) && !isEmpty(auth) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
                )
            }
        />
    );
};

export default PrivateRoute;
