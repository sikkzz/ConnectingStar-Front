import firebase from "firebase/app";

// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = firebase.initializeApp({
	apiKey: "api-key",
	authDomain: "project-id.firebaseapp.com",
	databaseURL: "https://project-id.firebaseio.com",
	projectId: "project-id",
	storageBucket: "project-id.appspot.com",
	messagingSenderId: "sender-id",
	appId: "app-id",
	measurementId: "G-measurement-id",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	const notificationTitle = payload.title;
	const notificationOptions = {
		body: payload.body,
		// icon: payload.icon
	};
	self.registration.showNotification(notificationTitle, notificationOptions);
});
