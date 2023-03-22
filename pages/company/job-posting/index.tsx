import PostCard from '@/components/company/job-posting/PostCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const listData = [{ title: '공고1' }, { title: '공고2' }, { title: '공고3' }];

const JobPosting = () => {
  return (
    <Wrapper>
      <Head>
        <h1>공고 리스트</h1>
        <Link href='/company/job-posting/new'>
          <div>공고 추가</div>
        </Link>
      </Head>

      <PostList>
        {listData.map((list) => (
          <PostCard key={list.title} jobPost={list} />
        ))}
      </PostList>
    </Wrapper>
  );
};

export default JobPosting;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 100px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  h1 {
  }
`;

const PostList = styled.div`
  /* width: 100%; */
`;
