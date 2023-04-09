import React, { useState } from 'react';
import styled from 'styled-components';
import Button_2 from '@/components/ui/Button_2';
import { useQuery } from '@tanstack/react-query';
import useCookies from '@/libs/hooks/useCookies';
import api from '@/libs/client/axiosClient';
import { toast } from 'react-toastify';
import usePagination from '@/libs/hooks/usePagination';
import Pagination from '@/components/ui/Pagination';
import { sortByProperty } from '@/libs/utils';

const users = [
  {
    id: 1,
    name: '황이삭',
    email: 'abcd@naver.com',
    progress: '서류 심사',
    status: '불합격',
  },
  {
    id: 2,
    name: '황이삭',
    email: 'abcd@naver.com',
    progress: '서류 합격',
    status: '합격',
  },
  {
    id: 3,
    name: '황이삭',
    email: 'abcd@naver.com',
    progress: '서류 심사',
    status: '불합격',
  },
  {
    id: 4,
    name: '황이삭',
    email: 'abcd@naver.com',
    progress: '서류 심사',
    status: '합격',
  },
];

// const emails: {
//   applicantEmail: string;
//   progress: string;
//   recruitingName: string;
//   sendDate: string;
//   status: string;
// }[] = [
//   {
//     recruitingName: '2023 상반기 신입사원',
//     applicantEmail: 'hwisaac0@gmail.com',
//     sendDate: '2023-03-31T07:44:38.044+00:00',
//     progress: '서류 심사',
//     status: '합격',
//   },
//   {
//     recruitingName: '2023 상반기 신입사원',
//     applicantEmail: 'hwisaac0@gmail.com',
//     sendDate: '2023-04-01T17:32:52.965+00:00',
//     progress: '서류 심사',
//     status: '합격',
//   },
//   {
//     recruitingName: '2023 상반기 신입사원',
//     applicantEmail: 'hwisaac0@gmail.com',
//     sendDate: '2023-04-01T17:33:31.981+00:00',
//     progress: '서류 심사',
//     status: '합격',
//   },
// ];

// 이메일 전송내역
export default function Notification() {
  const { accessToken } = useCookies();
  const { data, isLoading } = useQuery({
    queryKey: ['emails'],
    queryFn: () => api.getApplicantsMessage(accessToken),
    onSuccess: (data) => toast.success('이메일 목록을 가져왔습니다.'),
    onError: () => toast.error('데이터를 가져오기에 실패했습니다.'),
    select: (data) => sortByProperty(data.data, 'sendDate', false),
    refetchOnWindowFocus: false,
  });
  const [activePage, setActivePage] = useState<number>(1);
  // sortByProperty(data?.data, 'sendDate')
  let pageGroups = usePagination(data, 10);
  let pageMembersList = pageGroups[activePage - 1];

  return (
    <Wrapper>
      <h1>이메일 내역</h1>
      <Table>
        <Thead>
          <Tr>
            <Th>공고명</Th>
            <Th>이메일</Th>
            <Th>날짜</Th>
            <Th>진행 상황</Th>
            <Th>합격여부</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pageMembersList?.map((email, index) => (
            <Tr key={index}>
              <Td>{email.recruitingName}</Td>
              <Td>{email.applicantEmail}</Td>
              <Td>{email.sendDate}</Td>
              <Td>{email.progress}</Td>
              <Td>
                <Button_2 name={email.status} color={email.status === '합격' ? 'indigo' : 'rose'} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* <div className="pagination"> */}
      <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
      {/* </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin: 0 auto;
  h1 {
    color: var(--color-gray700);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 60px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const Thead = styled.thead`
  tr {
    th {
      border-top: 1px solid var(--color-gray100);
      text-align: left;
      padding: 22px 12px;
      font-weight: 500;
      font-size: 14px;
      color: var(--color-gray400);
    }
  }
`;
const Tbody = styled.tbody`
  tr:hover {
    background-color: var(--color-gray50);
  }
`;

const Th = styled.th`
  border-top: 1px solid var(--color-gray100);
  text-align: left;
  padding: 22px 12px;
  font-weight: 500;
  color: var(--color-gray400);
`;

const Td = styled.td`
  border-top: 1px solid var(--color-gray100);
  text-align: left;
  padding: 20px 12px;
  padding-right: 40px;
  color: var(--color-gray600);
  p {
    font-size: 12px;
    margin-top: 10px;
    color: var(--color-gray400);
  }
`;

const Tr = styled.tr`
  &:last-child {
    border-bottom: 1px solid var(--color-gray100);
  }
`;

const Pages = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
  color: var(--color-gray400);
  li {
    cursor: pointer;
    padding: 5px;
    &.active {
      color: var(--color-gray800);
      background-color: var(--color-point);
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: end;
  padding: 40px 50px;
`;