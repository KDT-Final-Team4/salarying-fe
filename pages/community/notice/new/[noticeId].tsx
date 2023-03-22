import React from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function New() {
	const router = useRouter();
	const { noticeId } = router.query;

	const queryClient = useQueryClient();
	const noticeData = queryClient.getQueryData(["notice", noticeId]);
	console.log(noticeData);
	const fetchNotice = () => {
		const adminId = "aaa@aaa.com";
		axios({
			url: "/notice",
			method: "get",
			data: adminId,
		})
			.then(response => console.log(response))
			.catch(error =>
				fetch("/notice")
					.then(response => response.json)
					.then(data => console.log("data", data)),
			);
	};

	const updateNotice = values => {
		axios({
			url: "/notice",
			method: "post",
			data: values,
		})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const { data } = useQuery({
		queryKey: ["notice", noticeId],
		queryFn: () => fetchNotice(),
	});

	// const { mutate } = useMutation(
	// 	values => {
	// 		updateNotice(values);
	// 	},
	// 	{
	// 		onSuccess: () => {
	// 			queryClient.invalidateQueries(["notice", noticeId]);
	// 		},
	// 	},
	// );

	const handleSubmit = event => {
		event.preventDefault();
	};

	// if (data) {
	// 	return <form onSubmit={handleSubmit(mutate)}></form>;
	// }
	return <div>New</div>;
}
