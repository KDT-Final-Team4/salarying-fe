import React from 'react';
import styled from 'styled-components';

export default function PostCard({ jobPost }) {
  return (
    <Card>
      <Title>{jobPost.title}</Title>
      <Btns>
        <Btn>수정</Btn>
        <Btn>삭제</Btn>
      </Btns>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
  /* margin: 10px 0; */
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h3``;
const Btns = styled.div`
  display: flex;
  gap: 10px;
`;
const Btn = styled.button``;
