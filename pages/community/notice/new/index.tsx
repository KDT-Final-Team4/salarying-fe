import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { QueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import Button_Send from '@/components/ui/Button_Send';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';

type Props = {};

interface noticeDetail {
  title: string;
  content: string;
}

export default function NoticeEdit(props: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { accessToken } = useCookies();

  const router = useRouter();
  const queryClient = new QueryClient();

  const clickHandler = () => {
    api.postNotice(accessToken, { title, content });
  };

  return (
    <Content title={'공지사항 등록하기'}>
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

const Table = styled.div`
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
