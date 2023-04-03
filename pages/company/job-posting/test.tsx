import PostCard from '@/components/company/job-posting/TestPostCard';
import ax from '@/libs/client/axiosClient';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const listData = [{ title: '알바직 모집' }, { title: '인턴 모집' }, { title: 'CEO 모집' }, { title: '총무 모집' }];
const res = {
  stateCode: 200,
  success: true,
  data: [
    {
      id: 2,
      title: '2023 상반기 신입사원',
      postDate: '2023-03-28T06:01:37.166+00:00',
      task: '인사',
      status: '서류심사',
    },
    {
      id: 4,
      title: '2023 상반기 신입사원',
      postDate: '2023-03-28T06:01:51.254+00:00',
      task: '경영',
      status: '서류심사',
    },
    {
      id: 6,
      title: '2023 상반기 신입사원',
      postDate: '2023-03-28T06:02:13.290+00:00',
      task: '전산',
      status: '서류심사',
    },
    {
      id: 10,
      title: 'stringㄹㄹ',
      postDate: '2023-03-30T10:13:05.901+00:00',
      task: 'stringㄹㄹ',
      status: '서류심사',
    },
    {
      id: 12,
      title: 'stringㄹㄹ',
      postDate: '2023-03-30T10:16:43.937+00:00',
      task: 'stringㄹㄹ',
      status: '서류심사',
    },
    {
      id: 14,
      title: 'stringㄹㄹ',
      postDate: '2023-03-30T10:17:06.408+00:00',
      task: 'stringㄹㄹ',
      status: '서류심사',
    },
    {
      id: 23,
      title: 'testTitle',
      postDate: '2023-03-31T17:23:31.613+00:00',
      task: 'testTask',
      status: '서류전형',
    },
    {
      id: 25,
      title: 'testTitle',
      postDate: '2023-03-31T17:25:06.514+00:00',
      task: 'testTask',
      status: '서류전형',
    },
  ],
  message: '정상출력 데이터',
};

const JobPosting = () => {
  // useQuery(["jobPostings"], () => )
  const handleClick = async () => {};
  return (
    <Wrapper>
      <Head>
        <Title onClick={handleClick}>공고 리스트 보기</Title>
      </Head>

      <PostList>
        {res.data.map((post) => (
          <PostCard key={post.title} jobPost={post} />
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
  padding: 0 100px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin: 50px 0;
  padding: 30px 0;
`;
const Title = styled.h1`
  font-weight: 700;
  color: var(--color-primary);
`;
const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
