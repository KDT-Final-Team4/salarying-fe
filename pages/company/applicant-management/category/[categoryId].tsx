import ApplicantGrid_data from '@/components/company/applicant-management/category/ApplicantGrid_data';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const listData = [
  {
    title: '이름1',
  },
  { title: '이름2' },
  { title: '이름3' },
  { title: '이름4' },
];

export default function CategoryId() {
  return (
    <Wrapper>
      <Head>
        <Title>지원자 상세</Title>
        <Link href='/company/applicant-management'>목록으로 돌아가기</Link>
      </Head>
      <Body>
        <Overview>
          <h2>알바직 모집 지원 현황</h2>
          <Procedure>
            <h3>전형단계</h3>
            <div>
              <Step>
                <span>서류</span>
              </Step>
              <Step>면접</Step>
            </div>
          </Procedure>
        </Overview>
        <ApplicantGrid>
          <ApplicantGrid_head>지원자</ApplicantGrid_head>
          <ApplicantGrid_head>결정</ApplicantGrid_head>
          <ApplicantGrid_data name={'황이삭'} />
          <ApplicantGrid_data name={'공혜지'} />
          <ApplicantGrid_data name={'우지수'} />
        </ApplicantGrid>
        <Pagination>
          <li className='active'>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </Pagination>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 50px;
  width: 100%;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
`;
const Title = styled.h1``;
const Body = styled.main``;
const Overview = styled.div`
  h2 {
    font-weight: 700;
    font-size: 20px;
    margin: 20px 0;
  }
`;

const Procedure = styled.div`
  display: flex;
  background-color: var(--color-gray300);
  align-items: center;
  padding: 10px 20px;
  h3 {
    margin-right: 50px;
    font-weight: 700;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const Step = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const ApplicantGrid = styled.table`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: auto;
  /* gap: 5px; */
  row-gap: 5px;
  div {
    background-color: var(--color-pink50);
    height: 50px;
    display: flex;
    &:nth-child(2n + 1) {
      padding-left: 30px;
    }
    &:nth-child(2n) {
      justify-content: center;
    }
  }
`;

const ApplicantGrid_head = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Pagination = styled.ul`
  display: flex;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 5px;
  li {
    font-size: 14px;
    cursor: pointer;
    color: var(--color-gray500);
    &.active {
      color: var(--color-gray900);
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
