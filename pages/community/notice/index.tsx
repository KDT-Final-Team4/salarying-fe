import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { response } from "msw";
import noticeArray from "../../../mokeup/notices.json";

interface Object {
	id: number;
	title: string;
	edit_id: string;
	date: string;
}

const fetchNotice = async () => {
	const result: any = await axios
		.get("/notice")
		.then(response => response.data)
		.catch(error => {
			return noticeArray;
		});
	return result;
};

export default function NoticeList() {
	const { data, isLoading } = useQuery(["notices"], fetchNotice);

	console.log(data);

	return (
		<div>
			{!isLoading &&
				data?.map((number, idx) => (
					<div key={idx}>
						<Link href={`/community/notice/${number.id}`}>{number.title}</Link>
						<strong>{number.edit_id}</strong>
						<time>{number.date}</time>
					</div>
				))}
		</div>
	);
}
