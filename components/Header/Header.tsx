import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <Link href="/">로고</Link>
      </Logo>
      <HeaderNav>
        <ul>
          <li>로그아웃</li>
        </ul>
      </HeaderNav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  background-color: var(--color-orange400);
  display: flex;
  align-items: center;
  justify-content: space-between;
<<<<<<< HEAD
=======
  height: 70px;
  width: 100%;
>>>>>>> f6583b95247108fdc29467b1dc31bc2d5a3b8d56
  padding: 0 50px;
  height: 70px;
  margin-left: 270px;
  width: calc(100vw - 270px - var(--scrollbar-width));
  position: fixed;
`;

const Logo = styled.div``;

const HeaderNav = styled.div`
  ul {
    display: flex;
    gap: 10px;
  }
`;
