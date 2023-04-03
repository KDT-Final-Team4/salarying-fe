import Button_1 from '@/components/ui/Button_1';
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

const CategoryId = () => {
  const [checked, setChecked] = useState(false); // 전체 체크박스의 체크 여부
  const [childChecked, setChildChecked] = useState(users); // 자식 체크박스들의 체크 여부

  // 전체 체크박스가 변경되었을 때 호출되는 함수
  // const handleCheckAll = (event) => {
  //   const masterChecked = event.target.checked;
  //   setChecked(masterChecked);
  //   const newChild = childChecked.map((child) => {
  //     child.checked = masterChecked;
  //     return child;
  //   });
  //   setChildChecked(newChild);
  // };

  // 자식 체크박스 중 하나가 변경되었을 때 호출되는 함수
  // const handleCheckChild = (event, id) => {
  // const newChildChecked = [...childChecked];
  // newChildChecked[index] = event.target.checked;
  // const newChildChecked = childChecked.map((mail) => {
  //   if (mail.id === id) {
  //     mail.checked = event.target.checked;
  //   }
  //   return mail;
  // });
  // setChildChecked(newChildChecked);
  // setChecked(newChildChecked.every((mail) => mail.checked === true));
  // };

  return (
    <Wrapper>
      <h1 onClick={() => console.log(childChecked)}>지원자 리스트</h1>
      <Table>
        <Thead>
          <Tr>
            <Th>Index</Th>
            <Th>이름</Th>
            <Th>이메일</Th>
            <Th>진행 상황</Th>
            <Th>상태</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>{index}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.progress}</Td>
              <Td>
                <Button_2 name={user.status} color={user.status === '합격' ? 'indigo' : 'pink'} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pages>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
      </Pages>
    </Wrapper>
  );
};

export default CategoryId;

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

  margin: 50px 0;
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
