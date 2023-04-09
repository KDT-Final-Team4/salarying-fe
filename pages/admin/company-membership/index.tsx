import Content from '@/components/ui/Content';
import Pagination from '@/components/ui/Pagination';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import usePagination from '@/libs/hooks/usePagination';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import styled from 'styled-components';

export default function CompanyMembership() {
  const heads = ['기업 이름', '기업 담당자'];
  const { accessToken } = useCookies();
  const [activePage, setActivePage] = useState<number>(1);
  const { data } = useQuery(['corporations'], () => api.getCorporations(accessToken), {
    onSuccess: () => {
      setActivePage(1);
      console.log(data);
    },
  });
  // 페이지네이션
  let pageGroups = usePagination(data?.data, 5);
  let pageMembersList = pageGroups[activePage - 1];

  return (
    <Content title="기업 회원 조회">
      <Wrapper>
        <Table>
          <Thead>
            <Tr>
              {heads.map((title, idx) => (
                <Th key={idx}>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {pageMembersList?.map((corporation, index) => (
              <Tr key={index}>
                <Td>{corporation.company_name}</Td>
                <Td>{`${corporation.name}/${corporation.position}`}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <div className="pagination">
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
        </div>
      </Wrapper>
    </Content>
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
  .pagination {
    display: flex;
    justify-content: center;
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
  :nth-child(2) {
    width: 40%;
  }
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
