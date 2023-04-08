import Button_Send from '@/components/ui/Button_Send';
import Content from '@/components/ui/Content';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

type Props = {};

export default function FaqDetail(props: Props) {
  const { accessToken, isAdmin } = useCookies();
  const router = useRouter();
  const { faqId } = router.query;

  const { data } = useQuery(['faq', faqId], () => api.getFAQDetail(accessToken, faqId));

  const deleteHandler = () => {
    api.deleteFAQ(accessToken, faqId);
    router.back();
  };

  return (
    <Content title={'FAQ 상세보기'}>
      <Wrapper>
        <div className="back">
          <IoChevronBack size={40} onClick={() => router.back()} />
        </div>
        <FlexStyle>
          <Table>
            <div className="write-info">
              <h3>작성자</h3>
              <div className="write-detail">
                <span>{data?.data?.adminName}</span>
                <h3>작성날짜</h3>
                <span>{data?.data?.postDate}</span>
              </div>
            </div>

            <div className="flex">
              <h3>질문</h3>
              <span className="content">{data?.data?.question}</span>
            </div>
            <div className="flex">
              <h3>답변</h3>
              <span className="content">{data?.data?.answer}</span>
            </div>
          </Table>
          <BtnWrapper className={isAdmin ? 'admin' : 'user'}>
            <Link href="/community/faq/edit/[faqId]" as={`/community/faq/edit/${faqId}`}>
              <Button_Send text={'수정'} height={50} width={150} />
            </Link>
            <Button_Send text={'삭제'} height={50} width={150} onClick={deleteHandler} />
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
  .user {
    display: none;
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
    text-overflow: ellipsis;
    overflow-y: scroll;

    &.content {
      min-height: 180px;
      margin-bottom: 20px;
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
