import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Avatar, { genConfig } from 'react-nice-avatar';
import styled from 'styled-components';

// const userData = {
//   companyName: 'test ok',
//   companyPhoneNumber: '010-1234-1234 ok',
//   email: 'test@email.com ok',
//   name: '김나나 ok',
//   position: '대표 ok',
//   lastSignIn: '2023-04-06T06:31:54.921+00:00',
//   lastModified: '2023-03-28T06:00:30.895+00:00',
//   status: '일반',
// };
export default function MeCard({ userData }) {
  const config = genConfig(userData?.email);
  const [edit, setEdit] = useState(false);
  return (
    <Wrapper>
      <HeadRow>
        <h2>회원정보</h2>
        <BsThreeDots />
      </HeadRow>
      <Row_1>
        <MyAvatar style={{ width: '3rem', height: '3rem' }} {...config}></MyAvatar>
        <div>
          <h4>{userData?.name}</h4>
          <h5>{userData?.email}</h5>
        </div>
      </Row_1>
      <Row_2>
        <h4> {userData?.companyName}</h4>
        <h5>{userData?.companyPhoneNumber}</h5>
      </Row_2>
      {!edit ? <Btn onClick={() => setEdit(true)}>수정하기</Btn> : <ConfirmBtn onClick={() => setEdit(false)}>확인</ConfirmBtn>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid var(--color-gray50);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: fit-content;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const HeadRow = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 14px;
    font-weight: 600;
  }
  svg {
    color: var(--color-gray400);
  }
  /* padding: 10px 0; */
`;

const Row = styled.div`
  display: flex;
  /* border: 1px solid red; */
  height: 60px;
  gap: 15px;
  h4 {
    font-weight: 500;
  }
  h5 {
    font-size: 14px;
    color: var(--color-gray400);
  }
`;

const Row_1 = styled(Row)`
  align-items: center;
  /* border: 1px solid red; */
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const Row_2 = styled(Row)`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
const MyAvatar = styled(Avatar)``;

const Btn = styled.button`
  height: 30px;
  background-color: var(--color-emerald50);
  color: var(--color-emerald500);
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-emerald100);
  }
`;

const ConfirmBtn = styled(Btn)`
  background-color: var(--color-blue50);
  color: var(--color-blue500);
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-blue100);
  }
`;
