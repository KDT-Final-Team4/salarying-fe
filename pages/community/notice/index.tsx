import Link from "next/link";
import axios from "axios";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { response } from "msw";

interface Object {
	id: number;
	title: string;
	owner_id: string;
	date: string;
}
const fetchNotice = (): any => {
	const adminId = "aaa@aaa.com";
	axios({
		url: "/notice",
		method: "get",
		data: adminId,
	})
		.then(response => console.log(response))
		.catch(error => console.log("axios에러"));
};
export default function NoticeList() {
	const query = useQuery(["notices"], fetchNotice);
	console.log(query);

	const noticeArray: Array<Object> = [
		{
			id: 1,
			title: "공지사항 제목 1",
			owner_id: "aaa@aaa.com",
			date: "YYYY-MM-DD HH-MM-SS",
		},
		{
			id: 2,
			title: "공지사항 제목 2",
			owner_id: "aaa@aaa.com",
			date: "YYYY-MM-DD HH-MM-SS",
		},
	];
	return (
		<div>
			{noticeArray?.map((number, idx) => (
				<div key={idx}>
					<Link href={`/community/notice/${number.id}`}>{number.title}</Link>
					<span>
						<strong>{number.owner_id}</strong>
						<time>{number.date}</time>
					</span>
				</div>
			))}
		</div>
	);
}
