import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCsuanuC6E4JlL7U9vjWj6VY5DGNbVM8rk",
	authDomain: "parthon-clone.firebaseapp.com",
	projectId: "parthon-clone",
	storageBucket: "parthon-clone.appspot.com",
	messagingSenderId: "238309287930",
	appId: "1:238309287930:web:7183e0b0a4b28384c0a643",
	measurementId: "G-YXKFRMVK4G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
