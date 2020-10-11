import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from './config/fbConfig';

import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })), reduxFirestore(firebase))
);

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    useFirestoreForProfile: true,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
