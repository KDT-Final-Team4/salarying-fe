import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Object {
	id: number;
	title: string;
	edit_id: string;
	date: string;
}

export default function NoticeList() {
	const fetchNotice = async () => {
		const result = await axios
			.request({
				method: "get",
				url: "/api/notice",
			})
			.then(response => {
				return response.data.data;
			})
			.catch(error => {
				console.log(error);
			});
		return result;
	};
	const { data, isLoading } = useQuery(["notices"], fetchNotice);

	console.log(data);

	return (
		<div>
			{!isLoading &&
				data?.map((number, idx) => (
					<div key={idx}>
						<Link
							href={`/community/notice/${number.id}`}
							as="/community/notice/1"
						>
							{number.title}
						</Link>
						<strong>{number.edit_id}</strong>
						<time>{number.date}</time>
					</div>
				))}
		</div>
	);
}
