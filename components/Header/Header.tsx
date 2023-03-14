import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo>로고</Logo>
      <HeaderNav>header nav</HeaderNav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  background-color: var(--color-orange400);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 50px;
`;

const Logo = styled.div``;

const HeaderNav = styled.div``;
