import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAxdLP9H4oibl8MY8kKB6RotDbGObgUQdM",
	authDomain: "tars-test-cf453.firebaseapp.com",
	projectId: "tars-test-cf453",
	storageBucket: "tars-test-cf453.appspot.com",
	messagingSenderId: "313852028735",
	appId: "1:313852028735:web:19e73f42d606fee82cd58a",
};

export const app = initializeApp(firebaseConfig);
