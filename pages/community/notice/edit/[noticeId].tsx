import React, { useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

type Props = {};

const getNotice = async (noticeId: string | string[]) => {
	const result = await axios
		.request({
			method: "get",
			url: `/api/notice/${noticeId}`,
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

const NoticeEdit = (props: Props) => {
	const router = useRouter();
	const noticeId = router.isReady ? router.query.noticeId : null;
	console.log(noticeId);

	const { data } = useQuery(["notice", noticeId], () => getNotice(noticeId));

	const changeHandler = e => {
		e.preventDefault();
	};

	return (
		<Form onSubmit={changeHandler}>
			<label htmlFor="title">제목</label>
			<input name="title" defaultValue={data ? data.title : ""} />
			<label htmlFor="content">내용</label>
			<input
				name="content"
				defaultValue={data ? data.content : ""}
				size={500}
			/>
			<button>확인</button>
			<button>취소</button>
		</Form>
	);
};

const Form = styled.form`
	width: 1200px;
	display: flex;
	flex-direction: column;

	input:nth-child(4) {
		height: 400px;
	}
`;

export default NoticeEdit;
