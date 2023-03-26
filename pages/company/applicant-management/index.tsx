import PostCard from '@/components/company/job-posting/PostCard';
import ApplicantCard from '@/components/company/notice/ApplicantCard';
import React from 'react';
import styled from 'styled-components';

const listData = [
  { title: '알바직 모집' },
  { title: '인턴 모집' },
  { title: 'CEO 모집' },
  { title: '총무 모집' },
];

export default function ApplicantManagement() {
  return (
    <Wrapper>
      <Head>
        <Title>지원자 관리</Title>
      </Head>

      <PostList>
        {listData.map((list) => (
          <PostCard key={list.title} jobPost={list} />
        ))}
      </PostList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
  /* gap: 100px; */
  border: 1px solid green;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin: 50px 0;
  padding: 30px 0;
  border-bottom: 1px solid black;
`;
const Title = styled.h1``;
const PostList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
