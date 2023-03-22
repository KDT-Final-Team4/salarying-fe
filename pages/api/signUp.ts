// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler from "@/libs/server/withHandler";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	stateCode: number;
	success: boolean;
	data: unknown;
	message: string;
};
enum httpMethod {
	POST = "POST",
	GET = "GET",
	PUT = "PUT",
	PATCH = "PATCH",
	DELETE = "DELETE",
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const { email, password, companyNm, companyTel } = req.body;
	switch (req.method) {
		case httpMethod.POST:
			return res.status(200).json({
				stateCode: 200,
				success: true,
				data: { email, password, companyNm, companyTel },
				message: "회원가입 성공",
			});
		default:
			return res.status(200).json({
				stateCode: 200,
				success: false,
				data: null,
				message: "잘못된 http 요청입니다.",
			});
	}
}
