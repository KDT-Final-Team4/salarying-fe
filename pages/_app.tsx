import SideNav from '@/components/SideNav';
// import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

// 앱의 레이아웃을 결정하는 컴포넌트입니다.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <SideNav />
      <Component {...pageProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;
