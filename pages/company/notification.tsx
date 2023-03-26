import Button_1 from '@/components/ui/Button_1';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import styled from 'styled-components';

const mails = [
  {
    title: '메일1',
  },
  {
    title: '메일2',
  },
  {
    title: '메일2',
  },
];
const sendBtnProps = {
  Icon: AiOutlineMail,
  name: 'send',
  color: '#047857',
};
const Notification = () => {
  return (
    <Wrapper>
      <H1>메일함</H1>
      <Panel>
        <input type='checkbox' />
        <span>전체 발송</span>
      </Panel>
      <Contents>
        <div>
          <input type='checkbox' />
        </div>
        <div>메일</div>
        <div>
          <Button_1 {...sendBtnProps} />
        </div>
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

const Mail = styled.div`
  display: flex;
  align-items: center;
`;
const MailTitle = styled.h3``;
const MailBtns = styled.div``;
