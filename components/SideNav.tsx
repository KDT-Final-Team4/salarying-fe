import React from 'react';
import styled from 'styled-components';

export default function SideNav() {
  return (
    <Wrapper>
      <ul>
        <li>side item1</li>
        <li>side item2</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 200px;
  background-color: aliceblue;
`;
