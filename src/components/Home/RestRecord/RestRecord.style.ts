import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;

	& > h1 {
		${theme.font.head_a}
	}

	& > p {
		white-space: pre-wrap;

		& > span {
			color: ${theme.color.main_blue};
			${theme.font.body_a_bold};
		}
	}
`;

export const inputBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: relative;

	& > label {
		color: ${theme.color.font_gray};
		${theme.font.head_c};
	}

	& > textarea {
		all: unset;
		padding: 1rem;
		background-color: ${theme.color.bg};
		border-radius: 15px;
		height: 11.875rem;
		-ms-overflow-style: none; /* 인터넷 익스플로러 */
		scrollbar-width: none; /* 파이어폭스 */

		&::-webkit-scrollbar {
			display: none;
		}

		&::placeholder {
			color: ${theme.color.button_deactivated};
		}
	}

	& > span {
		${theme.font.body_c_bold};
		color: ${theme.color.font_gray};
		align-self: flex-end;
	}
`;
