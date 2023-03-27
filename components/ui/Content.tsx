import styled from "styled-components";
import React from "react";
import { ReactNode } from "react";

type contentProps = {
	title: string;
	children: ReactNode;
};

const Content = (props: contentProps) => {
	return (
		<Title>
			<h1>{props.title}</h1>
			<div className="output">{props.children}</div>
		</Title>
	);
};

const Title = styled.section`
	width: 100%;
	padding: 0 50px;
	box-sizing: border-box;
	h1 {
		color: var(--color-primary);
		font-size: 24px;
		font-weight: 700;
		padding: 50px 0px 20px 0px;
		border-bottom: 2px solid var(--color-lightgray);
	}
`;

export default Content;
