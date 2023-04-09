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
import { toast } from 'react-toastify';

type Props = {};

interface noticeDetail {
  title: string;
  content: string;
}

export default function NoticeEdit(props: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();
  const { accessToken, isAdmin } = useCookies();
  const { noticeId } = router.query;

  const { data, isLoading, refetch } = useQuery(['notice', noticeId], () => api.getNoticeDetail(accessToken, noticeId), {
    enabled: !!noticeId,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setTitle(data?.title), setContent(data?.content);
    },
  });

  const { mutate: putNotice } = useMutation({
    mutationFn: () => api.putNotice(accessToken, { id: noticeId, title, content }),
    onError: () => {
      toast.error('수정 실패');
    },
    onSuccess: () => {
      toast.success('수정 완료');
      refetch();
    },
  });

  const clickHandler = () => {
    putNotice();
    router.replace;
    router.back();
  };
  return (
    <Content title={'공지사항 수정하기'}>
      <Wrapper>
        <div className="back">
          <IoChevronBack size={40} onClick={() => router.back()} />
        </div>
        <FlexStyle>
          <Table className="static">
            <h3>제목</h3>
            <textarea className="title" value={title} onChange={(event) => setTitle(event.target.value)} required></textarea>
            <h3>내용</h3>
            <textarea className="content" value={content} onChange={(event) => setContent(event.target.value)} required></textarea>
          </Table>
          <BtnWrapper>
            <Button_Send text={'저장'} height={50} width={150} onClick={clickHandler} />
            <div onClick={() => router.back()}>
              <Button_Send text={'취소'} height={50} width={150} />
            </div>
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
  height: 700px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-lightgray);
  border-radius: 10px;
  padding: 60px;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 100px 1fr;
  color: var(--color-primary);
  font-weight: 700;
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
    &.title {
      height: 60px;
    }
    &.content {
      min-height: 300px;
    }
  }
`;

const BtnWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  margin: 50px;
  bottom: 0;
  right: 0;
`;
