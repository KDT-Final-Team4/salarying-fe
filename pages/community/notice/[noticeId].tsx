import React from "react";
import { useRouter } from "next/router";
import notice from "../../../mokeup/notice.json";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { response } from "msw";

interface content {
	noticeId: string;
	title: string;
	adminId: string;
	date: string;
	edit_date: string;
	content: string;
	state: boolean;
}

const getNotice = async noticeId => {
	const result = await axios
		.get(`/notice/${noticeId}`)
		.then(response => response.data)
		.catch(error => {
			return notice;
		});
	return result;
};

export default function NoticeId() {
	const router = useRouter();
	const { noticeId } = router.query;

	const { data } = useQuery(["notice", noticeId], () => getNotice(noticeId));

	return (
		<div>
			<h2>{data?.title}</h2>
			<span>{data?.content}</span>
			<div>
				<button>수정</button>
				<button>삭제</button>
			</div>
		</div>
	);
}
