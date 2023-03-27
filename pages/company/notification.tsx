import Button_1 from '@/components/ui/Button_1';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import styled from 'styled-components';
import { useEffect } from 'react';

const mails = [
  {
    title: '메일1',
    id: '01',
    checked: false,
  },
  {
    title: '메일2',
    id: '02',
    checked: false,
  },
  {
    title: '메일3',
    id: '03',
    checked: false,
  },
];
const Mail = ({ title, id, handleCheckChild, checked }: any) => {
  return (
    <>
      <div>
        <input
          type='checkbox'
          onChange={(event) => handleCheckChild(event, id)}
          checked={checked}
        />
      </div>
      <div>{title}</div>
      <div>
        <Button_1 {...sendBtnProps} />
      </div>
    </>
  );
};

const sendBtnProps = {
  Icon: AiOutlineMail,
  name: 'send',
  color: '#047857',
};

const Notification = () => {
  const [checked, setChecked] = useState(false); // 전체 체크박스의 체크 여부
  const [childChecked, setChildChecked] = useState(mails); // 자식 체크박스들의 체크 여부

  // 전체 체크박스가 변경되었을 때 호출되는 함수
  const handleCheckAll = (event) => {
    const masterChecked = event.target.checked;
    setChecked(masterChecked);
    const newChild = childChecked.map((child) => {
      child.checked = masterChecked;
      return child;
    });
    setChildChecked(newChild);
  };

  // 자식 체크박스 중 하나가 변경되었을 때 호출되는 함수
  const handleCheckChild = (event, id) => {
    // const newChildChecked = [...childChecked];
    // newChildChecked[index] = event.target.checked;
    const newChildChecked = childChecked.map((mail) => {
      if (mail.id === id) {
        mail.checked = event.target.checked;
      }
      return mail;
    });
    setChildChecked(newChildChecked);
    setChecked(newChildChecked.every((mail) => mail.checked === true));
  };

  return (
    <Wrapper>
      <H1 onClick={() => console.log(childChecked)}>메일함</H1>
      <Panel>
        <input type='checkbox' checked={checked} onChange={handleCheckAll} />
        <span>전체 발송</span>
      </Panel>
      <Contents>
        {mails.map((mail, index) => (
          <Mail
            key={index}
            title={mail.title}
            handleCheckChild={handleCheckChild}
            checked={mail.checked}
            id={mail.id}
          />
        ))}
      </Contents>
    </Wrapper>
  );
};

export default Notification;

const Wrapper = styled.section`
  padding: 20px;
  width: 100%;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 20px;
`;
const Panel = styled.div`
  display: flex;
  align-items: center;
`;
const Contents = styled.div`
  flex-direction: column;
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 200px;
  gap: 3px;
  div {
    display: flex;
    align-items: center;
    background-color: var(--color-emerald100);
  }
`;

const MailTitle = styled.h3``;
const MailBtns = styled.div``;
