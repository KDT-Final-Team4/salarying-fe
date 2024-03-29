import Header from '@/components/Header/Header';
import SideNav from '@/components/SideNav';
import '@/styles/reset.css';
import 'react-toggle/style.css';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import styled, { createGlobalStyle } from 'styled-components';
import SNBLayout from '@/components/layout/SNBLayout';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

enum layout {
  SINGLE = 'SINGLE',
  HEAD = 'HEAD',
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
  const withLayout = Component.layout ?? ((page) => <SNBLayout>{page}</SNBLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      {withLayout(
        <>
          <Head>
            <link rel="icon" href="/favicon.png"></link>
            <title>HiredPro</title>
          </Head>
          <Component {...pageProps} />
          <ToastContainer autoClose={2000} pauseOnHover={false} />
        </>,
      )}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
