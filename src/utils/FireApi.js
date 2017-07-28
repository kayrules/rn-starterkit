import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdCOyQSNajywdi0c3hGyxJATPyGFDsXdg",
    authDomain: "duitbelanja-e8e6d.firebaseapp.com",
    databaseURL: "https://duitbelanja-e8e6d.firebaseio.com",
    projectId: "duitbelanja-e8e6d",
    storageBucket: "duitbelanja-e8e6d.appspot.com",
    messagingSenderId: "268234826761"
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
