import * as firebase from "firebase";
// firebase initialize
const config = {
	apiKey: "AIzaSyBJOYExQiluA7TeEk_rRRLkjQlu_1BoP9A",
	authDomain: "expensify-dc43a.firebaseapp.com",
	databaseURL: "https://expensify-dc43a.firebaseio.com",
	projectId: "expensify-dc43a",
	storageBucket: "expensify-dc43a.appspot.com",
	messagingSenderId: "1052470829400"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
