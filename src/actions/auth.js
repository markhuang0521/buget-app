import React from "react";
import { firebase, googleAuthProvider } from "../firebase/firebase";

export const logIn = uid => ({
	type: "LOGIN",
	uid
});

export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const logOut = () => ({
	type: "LOGOUT"
});

export const startLogOut = () => {
	return () => {
		return firebase.auth().signOut();
	};
};
