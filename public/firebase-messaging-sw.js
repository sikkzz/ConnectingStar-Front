import firebase from "firebase/app";

// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

self.addEventListener("install", function () {
	self.skipWaiting();
});

self.addEventListener("activate", function () {
	console.log("fcm service worker가 실행되었습니다.");
});

const firebaseConfig = {
	apiKey: "AIzaSyAxdLP9H4oibl8MY8kKB6RotDbGObgUQdM",
	authDomain: "tars-test-cf453.firebaseapp.com",
	projectId: "tars-test-cf453",
	storageBucket: "tars-test-cf453.appspot.com",
	messagingSenderId: "313852028735",
	appId: "1:313852028735:web:19e73f42d606fee82cd58a",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	const notificationTitle = payload.title;
	const notificationOptions = {
		body: payload.body,
		// icon: payload.icon
	};
	self.registration.showNotification(notificationTitle, notificationOptions);
});

export function registerServiceWorker() {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", function () {
			navigator.serviceWorker
				.register("/firebase-messaging-sw.js")
				.then(function (registration) {
					console.log("Service Worker가 scope에 등록되었습니다.:", registration.scope);
				})
				.catch(function (err) {
					console.log("Service Worker 등록 실패:", err);
				});
		});
	}
}
