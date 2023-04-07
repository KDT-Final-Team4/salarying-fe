import MeCard from '@/components/company/MeCard';
import Card_1 from '@/components/ui/Card_1';
import TableUI from '@/components/ui/TableUI';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { toast } from 'react-toastify';
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

const countStatus = (arr, status: string): number => {
  const filtered = arr?.filter((el) => el.status === status);
  return filtered.length;
};
function getStatusObj(arr) {
  const statusCount = {};
  arr?.forEach((item) => {
    if (statusCount.hasOwnProperty(item.status)) {
      statusCount[item.status]++;
    } else {
      statusCount[item.status] = 1;
    }
  });
  return statusCount;
}
const Company = () => {
  const { accessToken } = useCookies();
  const { data, isLoading } = useQuery({
    queryKey: ['recruitList'],
    queryFn: () => api.getRecruiting(accessToken),
    onSuccess: (data) => toast.success('공고리스트 받아오기 성공'),
    refetchOnWindowFocus: false,
  });
  const { data: me } = useQuery({
    queryKey: ['user'],
    queryFn: () => api.getUserMe(accessToken),
    onSuccess: (data) => toast.success('유저데이터 가져오기 성공'),
    onError: (err) => toast.error('유저 데이터 받아오기 실패'),
    refetchOnWindowFocus: false,
  });
  const statusObj: any = getStatusObj(data?.data);

  return (
    <Wrapper onClick={() => console.log(me)}>
      <Title>Dashboard</Title>
      <FirstRow>
        <MeCard userData={me?.data} />
        <Overviews>
          <div>
            <H2>Overviews</H2>
          </div>
          <div>
            <Card_1 title="총 공고" content={`${data?.data?.length}`} Icon={AiFillCar} dark={true} />
            {Object.keys(statusObj).map((status) => (
              <Card_1 key={status} title={status} content={`${statusObj[status]} 건`} />
            ))}
          </div>
        </Overviews>
      </FirstRow>

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
  width: fit-content;
  padding: 50px;
  margin: 0 auto;
  gap: 30px;
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
  display: flex;
  flex-direction: column;
  height: auto;
  width: fit-content;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid var(--color-gray200);
  overflow: hidden;
  gap: 20px;
  div:first-child {
  }
  div:last-child {
    display: flex;
    gap: 20px;
  }
`;
const FirstRow = styled.div`
  display: flex;
  gap: 30px;
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
