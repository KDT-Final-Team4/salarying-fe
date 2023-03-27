import React from 'react';
import styled from 'styled-components';

export default function PostCard({ jobPost }) {
  return (
    <Card>
      <Title>{jobPost.title}</Title>
      <Btns>
        <Btn>자세히 보기</Btn>
        <Btn>관리</Btn>
      </Btns>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-stone300);
  align-items: center;
  width: 100%;
  border-radius: 10px;
  padding: 20px 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h3``;
const Btns = styled.div`
  display: flex;
  gap: 10px;
`;
const Btn = styled.button`
  border: none;
  background-color: transparent;
`;
