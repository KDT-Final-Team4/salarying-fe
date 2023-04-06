import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import Button_Send from '@/components/ui/Button_Send';
import usePagination from '@/libs/hooks/usePagination';
import Pagination from '@/components/ui/Pagination';
import Button_2 from '@/components/ui/Button_2';
import { useQuery } from '@tanstack/react-query';

interface IList {
  title: string;
  id: string;
}

const list: IList[] = [
  {
    title: '서비스 이용 약관',
    id: 'service',
  },
  {
    title: '개인 정보 처리 방침',
    id: 'privacy',
  },
  {
    title: '제3자 정보 제공',
    id: 'information',
  },
  {
    title: '개인정보 마케팅 이용',
    id: 'marketing',
  },
];

type IObject = {
  status: '공개' | '비공개';
  title: string;
  version: string;
  name: string;
  id: number;
};

interface StyledProps {
  toggle: boolean;
}

type TermsId = 'service' | 'privacy' | 'information' | 'marketing';
const heads = ['약관 제목', '약관 버전', '약관 작성자', '상태', '미리보기'];

export default function TermsId() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<number>(1);
  const { accessToken } = useCookies();
  const { termsId } = router.query as { termsId: TermsId };

  const { data, isLoading } = useQuery({
    queryKey: ['terms', termsId],
    queryFn: () => api.getTerms(accessToken, termsId),
  });

  console.log('termsId', termsId);
  console.log('data', data);

  // 페이지네이션
  let pageGroups = usePagination(data, 5);
  let pageMembersList = pageGroups[activePage - 1];
  console.log(pageMembersList);

  return (
    <Content title="약관별 관리">
      <span>{isLoading && '로딩중'}</span>
      <Nav>
        {list.map((item) => (
          <Link key={item.id} href={`${item.id}`} className={termsId === item.id ? 'active' : null}>
            <li id={item.id}>{item.title}</li>
          </Link>
        ))}
      </Nav>
      <Wrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <input type="checkbox" />
              </Th>
              {heads.map((title, idx) => (
                <Th key={idx}>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data?.data?.map((term, index) => (
              <Tr key={index}>
                <Td>
                  <input type="checkbox" />
                </Td>
                <Td>{term.title}</Td>
                <Td>{term.version}</Td>
                <Td>{term.name}</Td>
                <Td>{term.status}</Td>
                <Td>
                  <Button_Send text={'view'} height={null} width={100} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <div className="pagination">
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
        </div>
      </Wrapper>
      <ButtonArea>
        <Button_2 name={'삭제'} />
        <div>
          <Link href="edit/termsId">
            <Button_2 name={'수정'} color={'point'} />
          </Link>
          <Link href="new">
            <Button_2 name={'등록'} color={'point'} />
          </Link>
        </div>
      </ButtonArea>
    </Content>
  );
}

const Nav = styled.ul`
  width: 100%;
  display: flex;
  color: var(--color-primary);
  justify-content: space-between;
  margin-bottom: 30px;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-weight: 400;
    border-radius: 10px;
    padding: 20px 0;
    margin: 0 20px;
    background-color: var(--color-lightgray);
    color: var(--color-primary);
    :hover {
      background-color: var(--color-point);
      transition: 0.1s;
      font-weight: 700;
      box-sizing: border-box;
    }
    &.active {
      background-color: var(--color-point);
      transition: 0.2s;
      font-weight: 700;
      box-sizing: border-box;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
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
      table-layout: fixed;
      border-top: 1px solid var(--color-gray100);
      text-align: center;
      padding: 22px 12px;
      font-weight: 500;
      font-size: 14px;
      color: var(--color-gray400);
      :nth-child(1) {
        width: 5%;
        text-align: left;
      }
      :nth-child(2) {
        width: 50%;
        text-align: left;
      }
      :nth-child(3) {
        width: 10%;
      }
      :nth-child(4) {
        width: 10%;
      }
      :nth-child(5) {
        width: 10%;
      }
      :nth-child(6) {
        width: 15%;
      }
    }
  }
`;
const Tbody = styled.tbody`
  tr:hover {
    cursor: pointer;
    background-color: var(--color-gray50);
  }
  tr {
    td {
      text-align: center;
      padding: 22px 12px;
      :nth-child(1) {
        width: 5%;
        text-align: left;
      }
      :nth-child(2) {
        width: 50%;
        text-align: left;
      }
      :nth-child(3) {
        width: 10%;
      }
      :nth-child(4) {
        width: 10%;
      }
      :nth-child(5) {
        width: 10%;
      }
      :nth-child(6) {
        width: 15%;
      }
    }
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

const ButtonArea = styled.div`
  width: inherit;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  button {
    width: 170px;
    height: 50px;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid var(--color-gray300);
  }
  div {
    display: flex;
  }
`;
