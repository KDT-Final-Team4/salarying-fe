import axios from "axios";
import styled from "styled-components";
import Avatar, { genConfig } from "react-nice-avatar";

export default function Home() {
	const handleClick = async () => {
		const res = await axios.request({
			method: "post",
			url: "/api/users/login",
			data: {
				email: "test@test.com",
				password: "test@test.com",
				companyNm: "fast campus",
				companyTel: "010-1234-4231",
			},
		});
		console.log(res.data);
	};
	// const config = genConfig({ sex: "man", hairStyle: "normal" });
	return (
		<Wrapper>
			<span onClick={handleClick}>Home</span>
			{/* <Avatar style={{ width: '8rem', height: '8rem' }} {...config} /> */}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color: var(--color-sky200);
`;
