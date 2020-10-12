import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

// Initilize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBn8GA11Gh3RLz08jnwvJA6VpQWwxL-fec',
    authDomain: 'redux-fire-test.firebaseapp.com',
    databaseURL: 'https://redux-fire-test.firebaseio.com',
    projectId: 'redux-fire-test',
    storageBucket: 'redux-fire-test.appspot.com',
    messagingSenderId: '526827958400',
    appId: '1:526827958400:web:7eefccc583275746657665',
    measurementId: 'G-DHQJSEJXZE',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
