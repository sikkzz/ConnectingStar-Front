import { css } from "@emotion/react";

import Modal from "@/components/common/Modal/Modal";

import { theme } from "@/styles/theme";

function HabitModifyModal() {
	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>습관 수정</h1>
				<button>수정하기</button>
			</div>
		</Modal>
	);
}

export default HabitModifyModal;

const layoutStyle = css`
	padding: 1.125rem 1.5rem 2.275rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}

	& > button {
		margin-top: 1.75rem;
	}
`;
