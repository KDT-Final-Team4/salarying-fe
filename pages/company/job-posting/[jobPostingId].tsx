import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

interface IPostData {
  title: string;
  postDate: string;
  task: string;
  status: string;
}
const postData: IPostData = {
  title: '2023 상반기 신입사원',
  postDate: '2023-03-28T06:02:13.290+00:00',
  task: '전산',
  status: '서류심사',
};

export default function JobPostingId() {
  const router = useRouter();
  const { jobPostingId } = router.query;
  return (
    <Wrapper>
      <Head>
        <H1></H1>
        <PostDate>{postData.postDate}</PostDate>
      </Head>
      <Body>
        <Overview>
          <Row_title>
            <h2>{postData.title}</h2>
            <span>인턴 모집</span>
          </Row_title>
          <Row_procedure>
            <h2>전형단계</h2>
            <div>
              <Step>
                <span>서류</span>
              </Step>
              <Step>면접</Step>
            </div>
          </Row_procedure>
        </Overview>
        <PostingContent></PostingContent>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 50px;
  width: 100%;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;
const PostDate = styled.div`
  display: flex;
  gap: 30px;
  span {
    font-weight: 700;
  }
`;
const Body = styled.main``;
const Overview = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Overview__Row = styled.div`
  display: flex;
  background-color: var(--color-gray300);
  align-items: center;
  padding: 10px 20px;

  h2 {
    font-weight: 700;
  }
`;
const Row_title = styled(Overview__Row)`
  justify-content: space-between;
  span {
  }
`;

const Row_procedure = styled(Overview__Row)`
  h2 {
    margin-right: 50px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const Step = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const PostingContent = styled.p`
  margin-top: 30px;
  white-space: pre-wrap;
  background-color: var(--color-gray100);
  padding: 20px;
`;
