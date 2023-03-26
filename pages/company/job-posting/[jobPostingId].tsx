import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const posting = `
회사명: [회사명]
채용분야: [채용분야]
근무지역: [근무지역]
근무형태: [근무형태]
모집인원: [모집인원]
담당업무: [담당업무]

자격요건:
- [자격요건1]
- [자격요건2]
- [자격요건3]
- [자격요건4]

우대사항:
- [우대사항1]
- [우대사항2]
- [우대사항3]

근무조건:
- 연봉: [연봉]
- 복리후생: [복리후생]
- 근무시간: [근무시간]

지원방법:
- 이메일: [이메일 주소]
- 문의전화: [문의전화번호]
- 제출서류: [제출서류]

많은 분들의 지원 바랍니다. 감사합니다.
`;

export default function JobPostingId() {
  const router = useRouter();
  const { jobPostingId } = router.query;
  return (
    <Wrapper>
      <Head>
        <H1>공고 등록</H1>
        <Author>
          <span>작성자</span>
          <span>공혜지</span>
        </Author>
      </Head>
      <Body>
        <Overview>
          <Row_title>
            <h2>공고 제목</h2>
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
        <PostingContent>{posting}</PostingContent>
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
const Author = styled.div`
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
