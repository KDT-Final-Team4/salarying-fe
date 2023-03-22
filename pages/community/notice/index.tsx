import Link from "next/link";
import axios from "axios";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { response } from "msw";
import noticeArray from "../../../notice.json";

interface Object {
	id: number;
	title: string;
	edit_id: string;
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
		.catch(error => {
			console.log(error);
			return noticeArray;
		});
};

export default function NoticeList() {
	const query = useQuery({
		queryKey: ["notices"],
		queryFn: fetchNotice,
	});

	return (
		<div>
			{query.data?.map((number, idx) => (
				<div key={idx}>
					<Link href={`/community/notice/${number.id}`}>{number.title}</Link>
					<span>
						<strong>{number.edit_id}</strong>
						<time>{number.date}</time>
					</span>
				</div>
			))}
		</div>
	);
}
