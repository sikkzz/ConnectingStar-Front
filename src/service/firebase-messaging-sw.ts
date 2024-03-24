// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// import { getToken } from "firebase/messaging";

// const firebaseConfig = {
// 	apiKey: "AIzaSyAxdLP9H4oibl8MY8kKB6RotDbGObgUQdM",
// 	authDomain: "tars-test-cf453.firebaseapp.com",
// 	projectId: "tars-test-cf453",
// 	storageBucket: "tars-test-cf453.appspot.com",
// 	messagingSenderId: "313852028735",
// 	appId: "1:313852028735:web:19e73f42d606fee82cd58a",
// };

// // Initialize Firebase

// export const app = initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// export async function handleAllowNotification() {
// 	registerServiceWorker(); // 나중에 설명
// 	try {
// 		const permission = await Notification.requestPermission();

// 		if (permission === "granted") {
// 			const token = await getToken(messaging, {
// 				vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
// 			});
// 			if (token) {
// 				sendTokenToServer(token); // (토큰을 서버로 전송하는 로직)
// 			} else {
// 				alert("토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요");
// 			}
// 		} else if (permission === "denied") {
// 			alert("web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요");
// 		}
// 	} catch (error) {
// 		console.error("푸시 토큰 가져오는 중에 에러 발생", error);
// 	}
// }

// export function requestPermission() {
// 	void Notification.requestPermission().then((permission) => {
// 		if (permission === "granted") {
// 			messaging
// 				.getToken({
// 					vapidKey:
// 						"BNInbbfmEg73Erm1sp9_7OEYA7U6_JaBku1VoGQkNWQIwFGFt7acDn8m7IbDgnpQzg3uE0Sdua1u6G-_coZ4jb0",
// 				})
// 				.then((token: string) => {
// 					console.log(`푸시 토큰 발급 완료 : ${token}`);
// 				})
// 				.catch(() => {
// 					console.log("푸시 토큰 가져오는 중에 에러 발생");
// 				});
// 		} else if (permission === "denied") {
// 			console.log("푸시 권한 차단");
// 		}
// 	});
// }
