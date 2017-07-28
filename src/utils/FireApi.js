import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

const FireApi  = {

    // function storeHighScore(userId, score) {
    //     firebase.database().ref('users/' + userId).set({
    //         highscore: score
    //     });
    // }

}
