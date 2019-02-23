import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCJzkaB_G0sA9d-5MeK2VE5X7P0WtgdJgI",
    authDomain: "expensify-c60db.firebaseapp.com",
    databaseURL: "https://expensify-c60db.firebaseio.com",
    projectId: "expensify-c60db",   
    storageBucket: "expensify-c60db.appspot.com",
    messagingSenderId: "353569462182"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};