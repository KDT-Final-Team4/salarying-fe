import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Content from "@/components/content/Content";

interface Object {
	id: number;
	title: string;
	edit_id: string;
	date: string;
	state: boolean;
}

const getNotices = async () => {
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

export default function NoticeList() {
	const { data: notices, isLoading } = useQuery(["notices"], getNotices);

	return (
		<Content title="공지사항">
			<div>
				<Link href={"/community/notice/new"}>등록</Link>
			</div>
			{!isLoading &&
				notices?.map((notice, idx) => (
					<div key={idx}>
						<Link
							href="/community/notice/[noticeId]"
							as={`/community/notice/${notice.id}`}
						>
							{notice.title}
						</Link>
						<strong>{notice.edit_id}</strong>
						<time>{notice.date}</time>
					</div>
				))}
		</Content>
	);
}
