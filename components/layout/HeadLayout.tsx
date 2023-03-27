import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export default function HeadLayout({ children }) {
  return (
    <Wrapper>
      <Header>
        <Logo>
          <Link href='/'>HiredPro</Link>
        </Logo>
        <HeaderNav>
          <ul>
            <li>로그아웃</li>
          </ul>
        </HeaderNav>
      </Header>

      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background-color: var(--color-gray100);
  width: 100%;
  border: 3px solid red;
  height: 70px;
  box-shadow: 0px 5px 20px #dedede;
`;

const Logo = styled.div``;

const HeaderNav = styled.div`
  ul {
    display: flex;
    gap: 10px;
  }
`;
