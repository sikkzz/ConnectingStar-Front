import axios from "axios";

import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import Button from "@/components/MyPage/Button/Button";
import { registerServiceWorker } from "@/serviceWorker";
import { messaging } from "@/settingFcm";
import { getToken } from "firebase/messaging";

import { buttonData, buttonDataWithIcon } from "@/constants/myPageConstants";

import {
	layoutStyle,
	profileBoxStyle,
	profileImgStyle,
	buttonBoxStyle,
} from "@/components/MyPage/Landing/Landing.style";

const axiosInstance = axios.create({
	withCredentials: true,
});

interface ResponseType {
	tokenInfo: string;
	nickname: string;
}

const sendToken = (token: string, name: string, password: string) => {
	const data = axiosInstance.post<ResponseType>(
		`https://ce56-220-78-161-185.ngrok-free.app/api/fcm/register?token=${token}&nickname=${name}&password=${password}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	return data;
};

const Landing = () => {
	const handleAllowNotification = async () => {
		registerServiceWorker();
		try {
			const permission = await Notification.requestPermission();

			console.log(permission);

			if (permission === "granted") {
				const token = await getToken(messaging, {
					vapidKey:
						"BNInbbfmEg73Erm1sp9_7OEYA7U6_JaBku1VoGQkNWQIwFGFt7acDn8m7IbDgnpQzg3uE0Sdua1u6G-_coZ4jb0",
				});
				console.log(token);

				if (token) {
					sendToken(token, "test", "test");
				} else {
					alert("토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요");
				}
			} else if (permission === "denied") {
				alert("web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요");
			}
		} catch (error) {
			console.error("푸시 토큰 가져오는 중에 에러 발생", error);
		}
	};
	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle}>
				<div css={profileImgStyle} />
				<div className="test" onClick={handleAllowNotification}>
					<p>사용자 닉네임</p>
					<RightArrowIcon />
				</div>
			</div>

			{buttonDataWithIcon.map((data) => (
				<div css={buttonBoxStyle} key={data.id}>
					{data.id !== "프로필" && <h3>{data.id}</h3>}

					{data.button.map((buttonData) => (
						<Button
							key={buttonData.text}
							icon={buttonData.icon}
							text={buttonData.text}
							text2={buttonData.text2}
							link={buttonData.link}
						/>
					))}
				</div>
			))}

			{buttonData.map((data) => (
				<div css={buttonBoxStyle} key={data.id}>
					<h3>{data.id}</h3>

					{data.button.map((buttonData) => (
						<Button
							key={buttonData.text}
							text={buttonData.text}
							subText={buttonData.subText}
							hasArrowIcon={buttonData.text !== "현재 버전"}
							isSubText={true}
							link={buttonData.link}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Landing;
