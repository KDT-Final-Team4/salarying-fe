import React from 'react';
import styled from 'styled-components';
import Button_1 from '@/components/ui/Button_1';
import { AiOutlineCheck, AiOutlineUnorderedList } from 'react-icons/ai';

export default function New() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h3>제목</h3>
        <input type='text' />
      </TitleWrapper>
      <ContentWrapper>
        <h3>내용</h3>
        <input type='textarea' />
      </ContentWrapper>
      <Button_1 name='제출' Icon={AiOutlineCheck} color='--color-indigo500' />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background-color: var(--color-indigo100);
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    align-self: flex-end;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    background-color: var(--color-indigo50);
    padding: 10px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    background-color: var(--color-indigo50);
    white-space: pre-wrap;
    padding: 10px;
  }
`;
