import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
		.request({
			method: "get",
			url: "/api/noticeDetail",
			data: noticeId,
		})
		.then(response => {
			console.log(response.data.data.noticeId);
			return response.data.data;
		})
		.catch(error => {
			console.log(error);
		});
	return result;
};

export default function NoticeId() {
	const router = useRouter();
	const { noticeId }: any = router.query;

	useEffect(() => {
		if (!router.isReady) return;
	}, [router.isReady]);

	const { data } = useQuery(["notice", noticeId], () => getNotice(noticeId));

	return (
		<div>
			<h2>{data?.title}</h2>
			<span>{data?.content}</span>
			<div>
				<Link
					href={`/community/notice/new/${noticeId}`}
					as="/community/notice/new/1"
				>
					수정
				</Link>
				<button>삭제</button>
			</div>
		</div>
	);
}
