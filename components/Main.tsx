import React from 'react';
import styled from 'styled-components';

export default function Main({ title, children }: any) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div>{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  border: 1px solid blue;
  width: 100%;
`;
