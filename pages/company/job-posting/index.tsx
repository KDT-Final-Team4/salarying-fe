import PostCard from '@/components/company/job-posting/PostCard';
import Button_3 from '@/components/ui/Button_3';
import Button_Point from '@/components/ui/Button_Point';
import ax from '@/libs/client/axiosClient';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { GrFormAdd } from 'react-icons/gr';

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
  const handleClick = async () => {};

  return (
    <Wrapper>
      <Head>
        <Title onClick={handleClick}>공고 리스트</Title>
      </Head>
      <PostList>
        <AddCard>
          <GrFormAdd size="50" />
        </AddCard>
        {res.data.map((post, index) => (
          <PostCard key={post.title + index} jobPost={post} />
        ))}
      </PostList>
    </Wrapper>
  );
};

export default JobPosting;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: auto;
  height: fit-content;
  margin: 0 auto;
`;
const AddBtn = styled(Button_3)`
  cursor: pointer;
  margin-bottom: 20px;
  align-self: flex-end;
`;
const AddCard = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-primary);
  align-items: center;
  width: 600px;
  border: 2px dashed var(--color-primary);
  border-radius: 10px;
  padding: 20px 30px;
  background-color: var(--color-lightgray);
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100px;
  cursor: pointer;

  svg {
    border-radius: 100%;
    background-color: var(--color-gray100);
  }
  &:hover {
    background-color: var(--color-sub);
    color: #fff;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    button {
      color: #fff;
      &:hover {
        background-color: var(--color-lightgray);
        color: var(--color-primary);
      }
    }
    svg {
      background-color: var(--color-lightgray);
      color: var(--color-primary);
    }
  }
  &:active {
    background-color: var(--color-lightgray);
  }
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
