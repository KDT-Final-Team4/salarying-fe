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
    title: '서비스 이용약관',
    id: 'service',
  },
  {
    title: '개인정보 처리방침',
    id: 'privacy',
  },
  {
    title: '제3자 정보제공',
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

const heads = ['약관 제목', '약관 버전', '약관 작성자', '상태', '미리보기'];

export default function TermsId() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<number>(1);
  const { accessToken } = useCookies();
  const { termsId } = router.query as { termsId: TermsId };
  const [modalOn, setModalOn] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ['terms', termsId],
    queryFn: () => api.getTerms(accessToken, termsId),
  });

  console.log('termsId', termsId);
  console.log('data', data);

  // 페이지네이션
  let pageGroups = usePagination(data?.data, 5);
  let pageMembersList = pageGroups[activePage - 1];
  console.log(pageMembersList);
  console.log(pageGroups);

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
              <Th>No.</Th>
              {heads.map((title, idx) => (
                <Th key={idx}>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {pageMembersList?.map((term, index) => (
              <Tr key={index}>
                <Td>{index + (activePage - 1) * 5 + 1}</Td>
                <Td>{term.title}</Td>
                <Td>{term.version}</Td>
                <Td>{term.name}</Td>
                <Td>{term.status}</Td>
                <Td>
                  <Button_Send
                    text={'view'}
                    height={null}
                    width={100}
                    onClick={() => {
                      router.push({ pathname: `detail/${term.id}` });
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Wrapper>

      <ButtonArea>
        {/* <Button_2 name={'삭제'} /> */}
        <div className="pagination">
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
        </div>
        <div>
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
  margin-top: 25px;
  margin-bottom: 10px;
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
  height: 552px;
  flex-direction: column;
  padding: 2rem 0;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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
  justify-content: flex-end;
  position: relative;
  button {
    width: 170px;
    height: 50px;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .pagination {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: -10px;
    left: 0;
    right: 0;
  }
`;
