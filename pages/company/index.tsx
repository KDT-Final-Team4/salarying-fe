import Card_1 from '@/components/ui/Card_1';
import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import styled from 'styled-components';

const Company = () => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <Overviews>
        <Card_1 title="활성화 공고" content="4 건" dark={true} />
        <Card_1 title="비활성화 공고" content="2 건" Icon={AiFillCar} />
        <Card_1 title="total" content="content" Icon={AiFillCar} />
      </Overviews>
      <Chart></Chart>
      <RecentNotices></RecentNotices>
    </Wrapper>
  );
};

export default Company;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 50px;
`;

const Overviews = styled.div`
  height: auto;
  width: 100%;
  border: 1px solid var(--color-orange50);
  display: flex;
  gap: 20px;
  overflow: hidden;
`;
const Chart = styled.div`
  height: 100px;
  width: 100%;
  background-color: var(--color-blue300);
`;
const RecentNotices = styled.div`
  height: 100px;
  width: 100%;
  background-color: var(--color-sky300);
`;
