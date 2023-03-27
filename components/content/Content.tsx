import React from "react";
import { ReactNode } from "react";

type contentProps = {
	title: string;
	children: ReactNode;
};

const Content = (props: contentProps) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<div>{props.children}</div>
		</div>
	);
};

export default Content;
