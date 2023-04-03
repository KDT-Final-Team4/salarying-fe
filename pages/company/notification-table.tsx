import React, { useState } from 'react';
import styled from 'styled-components';
import Button_2 from '@/components/ui/Button_2';

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

const GridHeaderCell = styled.th`
  color: var(--color-gray400);
  height: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-top: 2px;
`;

const GridRow = ({ user }) => {
  return (
    <TableRow>
      <GridCellNameEmail>
        <h6>{user.name}</h6>
        <span>{user.email}</span>
      </GridCellNameEmail>
      <GridCell>
        <Button_2 name={'전송하기'} color={'lime'} />
      </GridCell>
    </TableRow>
  );
};

const GridCell = styled.td`
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid var(--color-gray100);
  height: 60px;
  color: var(--color-gray600);
`;

const GridCellNameEmail = styled(GridCell)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  span {
    font-size: 14px;
    color: var(--color-gray400);
  }
`;

const TableRow = styled.tr``;

export default function Notification() {
  return (
    <Wrapper>
      <H1>알림 서비스</H1>
      <Table>
        <tbody>
          {users.map((user) => (
            <GridRow key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
      <Pages>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
      </Pages>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 20px 50px;
  width: 100%;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 50px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 50px;
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
