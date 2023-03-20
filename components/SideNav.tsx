import React from 'react';
import styled from 'styled-components';

export default function SideNav() {
  return (
    <Wrapper>
      <ul>
        <li>약관 관리</li>
        <li>기업 회원관리</li>
        <li>공지사항</li>
        <li>FAQ</li>
        <li>1:1 문의</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 200px;
  background-color: aliceblue;
  border: 3px solid red;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 50px;
    li {
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;
      border-bottom: 1px solid var(--color-gray300);
    }
  }
`;
