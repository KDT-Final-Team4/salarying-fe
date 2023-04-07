import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import Button_Send from '@/components/ui/Button_Send';
import Content from '@/components/ui/Content';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { IoChevronBack } from 'react-icons/io5';

interface content {
  adminEmail: string;
  adminName: string;
  content: string;
  id: number;
  postDate: string;
  status: boolean;
  title: string;
}

export default function NoticeDetail() {
  const router = useRouter();

  const { noticeId } = router.query;
  console.log(noticeId);

  const { accessToken, isAdmin } = useCookies();

  const { data, isLoading } = useQuery(['notice', noticeId], () => api.getNoticeDetail(accessToken, noticeId), {
    // enabled: !!noticeId,
    refetchOnWindowFocus: false,
  });

  const deleteHandler = () => {
    api.deleteNotice(accessToken, noticeId);
    router.back();
  };

  return (
    <Content title={'공지사항 상세정보'}>
      <Wrapper>
        <div className="back">
          <IoChevronBack size={40} onClick={() => router.back()} />
        </div>
        <FlexStyle>
          <Table className="static">
            <div className="write-info">
              <h3>작성자</h3>
              <div className="write-detail">
                <span className="admin-name">
                  {data?.adminName}/{data?.adminEmail}
                </span>
                <h3>작성날짜</h3>
                <span>{data?.postDate}</span>
              </div>
            </div>
            <div className="flex">
              <h3>제목</h3>
              <span>{data?.title}</span>
            </div>
            <div className="flex">
              <h3>내용</h3>
              <span className="content">{data?.content}</span>
            </div>
          </Table>
          <BtnWrapper>
            <Link href="/community/notice/edit/[noticeId]" as={`/community/notice/edit/${noticeId}`}>
              <Button_Send text={'수정'} height={50} width={150} />
            </Link>
            <div>
              <Button_Send text={'삭제'} height={50} width={150} onClick={deleteHandler} />
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
  height: 600px;
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
  width: 90%;
  height: 700px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-lightgray);
  border-radius: 10px;
  padding: 60px;
`;

const Table = styled.div`
  display: grid;
  gap: 10px;
  color: var(--color-primary);
  font-weight: 700;

  .write-info {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
  .write-detail {
    display: flex;
    gap: 50px;
  }
  .flex {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
  h3 {
    font-size: 20px;
    padding-top: 20px;
  }
  span {
    height: 100%;
    font-size: 18px;
    color: var(--color-gray500);
    border: 2px solid var(--color-gray300);
    border-radius: 10px;
    padding: 10px 20px;
    line-height: 1.8;

    &.content {
      overflow-y: scroll;
      min-height: 300px;
    }
  }
`;
const BtnWrapper = styled.div`
  position: absolute;
  /* width: 500px; */
  display: flex;
  gap: 20px;
  margin: 50px;

  bottom: 0;
  right: 0;
`;
