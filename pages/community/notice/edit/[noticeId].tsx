import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Router, useRouter } from 'next/router';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import Button_Send from '@/components/ui/Button_Send';
import useCookies from '@/libs/hooks/useCookies';
import api from '@/libs/client/axiosClient';
import { title } from 'process';

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

  const id = router.query.noticeId;

  const { data, isLoading } = useQuery(['notice', id], () => api.getNoticeDetail(accessToken, id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setTitle(data.title), setContent(data.content);
    },
  });

  const mutation = useMutation(() => api.putNotice(accessToken, { id, title, content }));

  return (
    <Content title={'공지사항 수정하기'}>
      <Wrapper>
        <FlexStyle>
          <Form className="static">
            <h3>제목</h3>
            <textarea className="title" value={title} onChange={(event) => setTitle(event.target.value)} required></textarea>
            <h3>내용</h3>
            <textarea className="content" value={content} onChange={(event) => setContent(event.target.value)} required>
              {data?.content}
            </textarea>
          </Form>
          <BtnWrapper>
            <Button_Send text={'저장'} height={50} width={150} />
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
  margin: 50px;
  width: 90%;
  display: flex;
  justify-content: center;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 1000px;
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
