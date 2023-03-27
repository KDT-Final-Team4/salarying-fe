import Header from "@/components/Header/Header";
import SideNav from "@/components/SideNav";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import SNBLayout from "@/components/layout/SNBLayout";
enum layout {
	SINGLE = "SINGLE",
	HEAD = "HEAD",
}
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: Infinity,
		},
	},
});

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	layout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

// 앱의 레이아웃을 결정하는 컴포넌트입니다.
export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const withLayout =
		Component.layout ?? (page => <SNBLayout>{page}</SNBLayout>);

	return (
		<QueryClientProvider client={queryClient}>
			{withLayout(<Component {...pageProps} />)}

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

const Wrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: calc(100vw - 270px - var(--scrollbar-width));
	align-content: flex-end;
`;

const BodyContent = styled.main`
	width: 100%;
	display: flex;
	width: 100%;
	height: calc(100vh - 70px);
	margin-left: 270px;
	margin-top: 70px;
`;
