import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";
import CategoryTab from "@/components/StarPage/StarCard/CategoryTab";
import StarCard from "@/components/StarPage/StarCard/StarCard";
import Toggle from "@/components/StarPage/StarCard/Toggle";

// TODO: API 연결 후 삭제 예정(UI 확인용)
interface starCardDataType {
	id: number;
	subTitle: string;
	title: string;
	starNumber: number;
	state: "default" | "selected" | "have";
}

// TODO: API 연결 후 삭제 예정(UI 확인용)
const starCardData: starCardDataType[] = [
	{
		id: 0,
		subTitle: "육체 활동",
		title: "캐릭터 이름",
		starNumber: 10,
		state: "default",
	},
	{
		id: 1,
		subTitle: "육체 활동",
		title: "캐릭터 이름",
		starNumber: 10,
		state: "have",
	},
	{
		id: 2,
		subTitle: "육체 활동",
		title: "캐릭터 이름",
		starNumber: 10,
		state: "selected",
	},
	{
		id: 3,
		subTitle: "육체 활동",
		title: "캐릭터 이름",
		starNumber: 10,
		state: "default",
	},
];

const StarCardPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>별자리 카드</Header.Title>
			</Header>
			<section css={sectionStyle}>
				<CategoryTab />
				<Toggle />
				<ul css={cardSectionStyle}>
					{starCardData.map((card) => (
						<StarCard
							key={card.id}
							title={card.title}
							subTitle={card.subTitle}
							starNumber={card.starNumber}
							state={card.state}
						/>
					))}
				</ul>
			</section>
		</>
	);
};

export default StarCardPage;

const sectionStyle = css`
	width: 22.5rem;
	padding: 1.25rem 1.5rem 2.5rem 1.5rem;
	margin: 0 auto;
`;

const cardSectionStyle = css`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
`;
