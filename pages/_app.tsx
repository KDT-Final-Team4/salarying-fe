import Header from '@/components/Header/Header';
import SideNav from '@/components/SideNav';
import '@/styles/reset.css';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import styled, { createGlobalStyle } from 'styled-components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

// 앱의 레이아웃을 결정하는 컴포넌트입니다.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Header />
        <BodyContent>
          <SideNav />
          <Component {...pageProps} />
        </BodyContent>
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const Wrapper = styled.div`
  border: 1px solid blue;
`;

const BodyContent = styled.main`
  display: flex;
`;
