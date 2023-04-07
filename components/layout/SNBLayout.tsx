import React, { useEffect } from 'react';
import Header from '@/components/Header/Header';
import SideNav from '@/components/SideNav';
import styled from 'styled-components';
import useCookies from '@/libs/hooks/useCookies';
import { useRouter } from 'next/router';

export default function SNBLayout({ children }) {
  console.log('SNBLayout 호출 됨');
  const { accessToken, isAdmin } = useCookies();
  const router = useRouter();

  if (!accessToken && router.isReady) {
    router.push('/login');
  }

  return (
    <Wrapper>
      {/* <Header /> */}
      <BodyContent>
        <SideNav />
        {children}
      </BodyContent>
    </Wrapper>
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
  height: 100vh;
  margin-left: 270px;
`;
