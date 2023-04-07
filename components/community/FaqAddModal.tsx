import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { QueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import Button_Send from '@/components/ui/Button_Send';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import SelectCategory from '@/components/ui/SelectCategory';

type Props = {};

interface noticeDetail {}

export default function FaqAddModal({ setOpenModal }: any) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');

  const { accessToken } = useCookies();
  const categories = [
    { categoryId: '로그인', category: '로그인' },
    { categoryId: '회원가입', category: '회원가입' },
    { categoryId: '채용공고', category: '채용공고' },
    { categoryId: '지원자', category: '지원자' },
    { categoryId: '전형절차', category: '전형절차' },
  ];

  const clickHandler = () => {
    api.postFAQ(accessToken, { question, answer, category });
    setOpenModal(false);
  };

  return (
    <Wrapper>
      <FlexStyle>
        <Table className="static">
          <h3>카테고리</h3>
          <Category>
            <SelectCategory categories={categories} currentValue={category} setCurrentValue={setCategory} />
          </Category>
          <h3>질문</h3>
          <textarea className="title" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
          <h3>답변</h3>
          <textarea className="content" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
        </Table>
        <BtnWrapper>
          <div>
            <Button_Send text={'등록'} height={50} width={150} onClick={clickHandler} />
          </div>
          <div onClick={() => setOpenModal(false)}>
            <Button_Send text={'취소'} height={50} width={150} />
          </div>
        </BtnWrapper>
      </FlexStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  /* z-index: 1000; */
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: auto;
  background-color: var(--color-lightgray);
  padding: 100px 80px;
  border-radius: 10px;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 100px 800px;
  grid-template-rows: 150px 100px 1fr;
  color: var(--color-primary);
  font-weight: 700;
  h3 {
    font-size: 20px;
    padding-top: 20px;
  }
  textarea {
    font-size: 18px;
    color: var(--color-gray500);
    border: 2px solid var(--color-gray300);
    border-radius: 10px;
    padding: 10px 20px;
    line-height: 1.8;
    overflow-y: scroll;
    &.title {
      height: 60px;
    }
    &.content {
      min-height: 300px;
    }
  }
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 10px;
`;

const BtnWrapper = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin: 50px 0 0;
  bottom: 0;
  right: 0;
`;
