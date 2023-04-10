import React, { useRef, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { QueryClient, dehydrate, hydrate, useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import Button_Send from '@/components/ui/Button_Send';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import SelectCategory from '@/components/ui/SelectCategory';
import { toast } from 'react-toastify';

type Props = {};

interface noticeDetail {}

interface TParams {
  question: string;
  answer: string;
  category: string;
}

interface TfaqDetail {
  id: number;
  question: string;
  answer: string;
  category: string;
  status: boolean;
}

export default function FaqAddModal({ setOpenModal }: any) {
  const questionRef = useRef<HTMLTextAreaElement>(null);
  const answerRef = useRef<HTMLTextAreaElement>(null);
  // const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('로그인');

  const router = useRouter();

  const { accessToken } = useCookies();
  const categories = [
    { categoryId: '로그인', category: '로그인' },
    { categoryId: '회원가입', category: '회원가입' },
    { categoryId: '채용공고', category: '채용공고' },
    { categoryId: '지원자', category: '지원자' },
    { categoryId: '전형절차', category: '전형절차' },
    { categoryId: '기타', category: '기타' },
  ];

  // const putfaq = useMutation({ mutationFn: () => api.postFAQ(accessToken, { question, answer, category }) });

  const queryClient = useQueryClient();

  const addFaqMutation = useMutation<Data, unknown, TParams>({
    mutationFn: ({ question, answer, category }) => api.postFAQ(accessToken, { question, answer, category }),
    onMutate: async (newFaq) => {
      setCategory('');
      //optimistic update할 때, 데이터를 덮어쓰지 않도록 미리 취소
      await queryClient.cancelQueries({ queryKey: ['FAQ'] });
      //이전의 faq에 대한 스냅샷
      const previousFaq = queryClient.getQueryData<TfaqDetail[]>(['FAQ']);
      //새로운 값에 대한 Optimistically update
      if (previousFaq) {
        queryClient.setQueryData<TfaqDetail[]>(
          ['FAQ'],
          [...previousFaq, { id: Math.random(), question: newFaq.question, answer: newFaq.answer, category: newFaq.category, status: true }],
        );
      }
      //return 스냅샷했던 값
      return { previousFaq };
    },

    onError: (error, newFaq, { previsousFaq }) => {
      queryClient.setQueryData(['FAQ'], previsousFaq);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['FAQ'] });
      toast.success('등록완료');
      router.replace(router.asPath);
    },
  });

  const clickHandler = () => {
    addFaqMutation.mutate({ question: questionRef.current.value, answer: answerRef.current.value, category });
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
          <textarea className="title" name="question" ref={questionRef} required />
          <h3>답변</h3>
          <textarea className="content" name="answer" ref={answerRef} required />
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
