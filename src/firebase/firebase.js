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

database.ref().set({
    name: 'Andrew Mead',
    age: 22,
    isSingle: true,
    location: {
        city: 'Montreal',
        country: 'Canada'
    }
});

// database.ref().set('This is my data');

database.ref('age').set(26);
database.ref('location/city').set('Bulgaria');