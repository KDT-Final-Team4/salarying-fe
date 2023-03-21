/**참고
 * 기본세팅 : https://www.daleseo.com/mock-service-worker/
 * server/browser분리 : https://dantechblog.gatsbyjs.io/posts/msw-mock-api/
 */
import { rest } from "msw";

const notices = [
	{
		id: 1,
		title: "공지사항 제목 1",
		admin_id: "aaa@aaa.com",
		date: "YYYY-MM-DD HH-MM-SS",
		state: true,
	},
	{
		id: 2,
		title: "공지사항 제목 2",
		admin_id: "aaa@aaa.com",
		date: "YYYY-MM-DD HH-MM-SS",
		state: false,
	},
];

const noticeEx = {
	noticeId: `1`,
	title: `공지사항 제목 1`,
	adminId: "aaa@aaa.com",
	date: "YYYY-MM-DD HH-MM-SS",
	edit_date: "YYYY-MM-DD-HH-MM-SS",
	content:
		"국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 언론·출판은 타인의 명예나 권리 또는 공중도덕이나 사회윤리를 침해하여서는 아니된다. 언론·출판이 타인의 명예나 권리를 침해한 때에는 피해자는 이에 대한 피해의 배상을 청구할 수 있다.",
	state: true,
};

export const handlers = [
	rest.get("/notice", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(notices));
	}),

	rest.post("/notices", (req, res, ctx) => {
		notices.push(req.push);
		return res(ctx.status(201));
	}),
];
