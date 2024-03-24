import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyBgtxkSrEsNCsMu1yeYre67RtE0BieRwvI",
	authDomain: "testalert-86372.firebaseapp.com",
	projectId: "testalert-86372",
	storageBucket: "testalert-86372.appspot.com",
	messagingSenderId: "30857958400",
	appId: "1:30857958400:web:a8ffbd3379fe0d2b2e74e5",
	measurementId: "G-WK5D1VYMWP",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
