import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import Button_Send from '@/components/ui/Button_Send';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { toast } from 'react-toastify';

type Props = {};

interface TParams {
  title: string;
  content: string;
  adminName: string;
}

interface TNoticeDetail {
  id: number;
  title: string;
  adminName: string;
  status: boolean;
}

export default function NoticeAddModal({ setOpenModal }: any) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [adminName, setAdminName] = useState('');

  const { accessToken } = useCookies();

  const queryClient = useQueryClient();

  const router = useRouter();

  const addNoticeMutation = useMutation<Data, unknown, TParams>({
    mutationFn: () => api.postNotice(accessToken, { title, content }),
    onMutate: async (newNotice) => {
      setTitle('');
      setContent('');

      await queryClient.cancelQueries({ queryKey: ['notices'] });
      const previousNotice = queryClient.getQueryData<TNoticeDetail[]>(['notices']);

      if (previousNotice) {
        queryClient.setQueryData<TNoticeDetail[]>(
          ['notices'],
          [...previousNotice, { id: Math.random(), title: newNotice.title, adminName: newNotice.adminName, status: true }],
        );
      }
      return { previousNotice };
    },

    onError: (error, newNotice, { previousNotice }) => {
      queryClient.setQueryData(['notices'], previousNotice);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['notices'] });
      toast.success('등록완료');
      router.replace(router.asPath);
    },
  });

  const clickHandler = () => {
    addNoticeMutation.mutate({ title, content, adminName });
    setOpenModal(false);
  };

  return (
    <Wrapper>
      <FlexStyle>
        <Table className="static">
          <h3>제목</h3>
          <textarea className="title" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
          <h3>내용</h3>
          <textarea className="content" onChange={(e) => setContent(e.target.value)}></textarea>
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
  grid-template-rows: 100px 1fr;
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
