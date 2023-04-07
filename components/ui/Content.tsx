import styled from 'styled-components';
import React from 'react';
import { ReactNode } from 'react';

type contentProps = {
  title: string;
  children: ReactNode;
};

const Content = ({ title, children, ...others }: contentProps) => {
  return (
    <Wrapper {...others}>
      <h1>{title}</h1>
      <div className="output">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  margin-bottom: 30px;
  h1 {
    color: var(--color-primary);
    font-size: 24px;
    font-weight: 700;
    padding: 50px 0px 20px 0px;
    border-bottom: 2px solid var(--color-lightgray);
  }
  .output {
    margin: auto;
  }
`;

export default Content;
