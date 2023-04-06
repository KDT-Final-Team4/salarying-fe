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

// const getNotice = async (noticeId: string | string[]) => {
//   const result = await axios
//     .request({
//       method: 'get',
//       url: `/api/notice/${noticeId}`,
//     })
//     .then((response) => {
//       console.log(response.data.data.noticeId);
//       return response.data.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return result;
// };

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
            <div className="flex">
              <h3>제목</h3>
              <span className="right">{data?.title}</span>
            </div>
            <div className="write-info">
              <h3>작성자</h3>
              <span className="right">
                {data?.adminName}/{data?.adminEmail}
              </span>
              <h3>작성날짜</h3>
              <span className="right">{data?.postDate}</span>
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
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: var(--color-lightgray);
  border-radius: 10px;
  padding: 60px;
`;

const Table = styled.div`
  display: grid;
  grid-template-rows: 100px 70px 1fr;
  gap: 10px;
  color: var(--color-primary);
  font-weight: 700;
  .write-info {
    display: flex;
    gap: 80px;
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
    font-size: 18px;
    color: var(--color-gray500);
    border: 2px solid var(--color-gray300);
    border-radius: 10px;
    padding: 10px 20px;
    line-height: 1.8;
    &.right {
      height: 60px;
    }
    &.content {
      overflow-y: scroll;
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
