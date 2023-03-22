import React from 'react';
import styled from 'styled-components';

export default function ApplicantCard({ applicant }) {
  return (
    <Card>
      <Title>{applicant?.name}</Title>
      <Btns>
        <div>공고</div>
        <div>채용중</div>
        <div>{applicant.pass ? '합격' : '불합격'}</div>
      </Btns>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--color-gray700);
`;

const Title = styled.h3``;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  div {
    border: 1px solid blue;
    width: 70px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;
