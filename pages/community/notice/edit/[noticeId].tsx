import React, { useState, useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import { QueryClient, useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import Button_Send from '@/components/ui/Button_Send';
import useCookies from '@/libs/hooks/useCookies';
import api from '@/libs/client/axiosClient';

type Props = {};

interface noticeDetail {
  title: string;
  content: string;
}

export default function NoticeEdit(props: Props) {
  const router = useRouter();
  const [id, setId] = useState<number>();
  const accessToken = useCookies();

  useEffect(() => {
    if (!router.isReady) return;
    setId(Number(router.query.noticeId));
  }, [router.isReady, router.query]);

  const queryClient = new QueryClient();
  const { data, isLoading } = useQuery(['notice', id], () => api.getNoticeDetail(accessToken, id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
  const changeHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Content title={'공지사항 수정하기'}>
      <Wrapper>
        <FlexStyle>
          <Table className="static">
            <h3>제목</h3>
            <textarea className="title" defaultValue={data?.title} required></textarea>
            <h3>내용</h3>
            <textarea className="content" defaultValue={data?.content} required>
              {data?.content}
            </textarea>
          </Table>
          <BtnWrapper>
            <Link href="/community/notice/edit/[noticeId]" as={`/community/notice/edit/${id}`}>
              <Button_Send text={'저장'} height={50} width={150} />
            </Link>
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
