import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Router, useRouter } from 'next/router';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import Button_Send from '@/components/ui/Button_Send';
import useCookies from '@/libs/hooks/useCookies';
import api from '@/libs/client/axiosClient';
import { IoChevronBack } from 'react-icons/io5';
import SelectCategory from '@/components/ui/SelectCategory';
import { toast } from 'react-toastify';

type Props = {};

interface FaqMutationParams {
  accessToken: string;
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function NoticeEdit(props: Props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');

  const router = useRouter();
  const { accessToken, isAdmin } = useCookies();
  const { faqId } = router.query;

  const categories = [
    { categoryId: '로그인', category: '로그인' },
    { categoryId: '회원가입', category: '회원가입' },
    { categoryId: '채용공고', category: '채용공고' },
    { categoryId: '지원자', category: '지원자' },
    { categoryId: '전형절차', category: '전형절차' },
  ];

  const { data, isLoading, refetch } = useQuery(['faq', faqId], () => api.getFAQDetail(accessToken, faqId), {
    enabled: !!faqId,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setQuestion(data?.data?.question), setAnswer(data?.data?.answer);
    },
  });

  const { mutate: putFaq } = useMutation({
    mutationFn: () => api.putFAQ(accessToken, { id: faqId, question, answer, category }),
    onError: () => {
      toast.error('수정 실패');
    },
    onSuccess: () => {
      toast.success('수정 완료');
      refetch();
    },
  });

  const clickHandler = () => {
    putFaq();
    router.replace;
    router.back();
  };

  return (
    <Content title={'FAQ 수정하기'}>
      <Wrapper>
        <div className="back">
          <IoChevronBack size={40} onClick={() => router.back()} />
        </div>
        <FlexStyle>
          <Table className="static">
            <h3>카테고리</h3>
            <Category>
              <SelectCategory categories={categories} currentValue={category} setCurrentValue={setCategory} />
            </Category>
            <h3>질문</h3>
            <textarea className="big" value={question} onChange={(event) => setQuestion(event.target.value)} required></textarea>
            <h3>답변</h3>
            <textarea className="big" value={answer} onChange={(event) => setAnswer(event.target.value)} required></textarea>
          </Table>
          <BtnWrapper>
            <Button_Send text={'저장'} height={50} width={150} onClick={clickHandler} />
            <Button_Send text={'취소'} height={50} width={150} onClick={() => router.back()} />
          </BtnWrapper>
        </FlexStyle>
      </Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  margin: 50px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .back {
    margin-right: 40px;
  }
`;

const FlexStyle = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-lightgray);
  border-radius: 10px;
  padding: 60px;
`;

const Table = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 6fr;
  color: var(--color-primary);
  font-weight: 700;
  padding-bottom: 80px;
  h3 {
    font-size: 20px;
    padding-top: 20px;
  }
  textarea {
    height: 100%;
    font-size: 18px;
    color: var(--color-gray500);
    border: 2px solid var(--color-gray300);
    border-radius: 10px;
    padding: 10px 20px;
    line-height: 1.8;
    overflow-y: scroll;

    &.big {
      min-height: 180px;
      margin-bottom: 20px;
    }
  }
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  /* padding: 10px 30px; */
  align-items: center;
  justify-content: center;
  /* min-width: 100px; */
  padding-right: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
`;

const BtnWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  /* margin: 50px; */
  margin: 50px 50px 50px 0;
  bottom: 0;
  right: 0;
`;
