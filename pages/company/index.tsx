import Card_1 from '@/components/ui/Card_1';
import TableUI from '@/components/ui/TableUI';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import styled from 'styled-components';

/** 공고리스트 */
const resData = [
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
];

const Company = () => {
  const { accessToken } = useCookies();
  const { data, isLoading } = useQuery({
    queryKey: ['recruitList'],
    queryFn: () => api.getRecruiting(accessToken),
    onSuccess: (data) => console.log(data),
  });
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <Overviews>
        <div>
          <H2>Overviews</H2>
        </div>
        <div>
          <Card_1 title="활성화 공고" content="4 건" dark={true} />
          <Card_1 title="비활성화 공고" content="2 건" Icon={AiFillCar} />
          <Card_1 title="total" content="content" Icon={AiFillCar} />
        </div>
      </Overviews>
      <Chart></Chart>
      <RecentNotices>
        <div>
          <H2>최신 공고</H2>
          <Link href="/company/job-posting">바로가기</Link>
        </div>
        <TableUI dataList={data?.data?.slice(0, 4)} titles={['id', '이름', 'date', 'progress', 'stats']} />
      </RecentNotices>
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

const H2 = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: var(--color-gray600);
`;

const Overviews = styled.div`
  height: auto;
  width: fit-content;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid var(--color-gray200);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div:first-child {
  }
  div:last-child {
    display: flex;
    gap: 20px;
  }
`;
const Chart = styled.div`
  height: 100px;
  width: 100%;
`;
const RecentNotices = styled.div`
  height: fit-content;
  padding: 30px;
  width: 100%;
  border: 1px solid var(--color-gray200);
  border-radius: 10px;
  div:first-child {
    display: flex;
    align-items: flex-end;

    gap: 10px;
    margin-bottom: 30px;
    justify-content: space-between;
    a {
      font-weight: 700;
      color: var(--color-emerald500);
      cursor: pointer;
      &:hover {
        color: var(--color-emerald700);
      }
    }
  }
`;
