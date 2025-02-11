import Header from "@/components/common/Header/Header";
import SelectReason from "@/components/common/SelectReason/SelectReason";

import { deleteReasonData } from "@/constants/homeConstants";

const HabitDeletePage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<SelectReason
				title="어떤 이유로 그만두시나요?"
				reasonDefaultText="그만두는 이유를 선택해 주세요"
				selectData={deleteReasonData}
				footerBtnText="그만두기"
			/>
		</>
	);
};

export default HabitDeletePage;
