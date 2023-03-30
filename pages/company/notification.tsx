import Button_1 from '@/components/ui/Button_1';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button_2 from '@/components/ui/Button_2';
import Checkbox_1 from '@/components/ui/Checkbox_1';

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

const GridHeaderCell = styled.h3`
  color: var(--color-gray400);
  height: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-top: 2px;
`;
const GridRow = ({ user, id }) => {
  return (
    <>
      <GridCell>
        {/* <input type="checkbox" /> */}
        <Checkbox_1 id={id} />
      </GridCell>
      <GridCellNameEmail>
        <h6>{user.name}</h6>
        <span>{user.email}</span>
      </GridCellNameEmail>
      <GridCell>
        <Button_2 name={'전송하기'} color={'lime'} />
      </GridCell>
    </>
  );
};
const GridCell = styled.div`
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

const GridCellLines = styled(GridCell)``;

export default function Notification() {
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
      <H1 onClick={() => console.log(childChecked)}>지원자 상세</H1>
      <Panel>
        <input type="checkbox" />
        <Button_2 name="전송하기" color="sky" />
      </Panel>

      <GridContents>
        {users.map((user) => (
          <GridRow key={user.id} user={user} id={user.id} />
        ))}
      </GridContents>
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
const Panel = styled.div`
  display: flex;
  gap: 20px;
`;
const GridContents = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50px auto 100px;
  /* border-top: 1px solid var(--color-gray100); */

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
