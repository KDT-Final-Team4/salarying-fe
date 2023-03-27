import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button_1 from '@/components/ui/Button_1';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const announce = `당사는 성장을 지속하며 새로운 인재를 모집하고 있습니다. 우리와 함께 일하고 성장하실 분을 모집합니다. 열정적이고 능동적인 분들의 많은 지원 바랍니다. 지원자분들께서는 이력서와 자기소개서를 아래의 이메일로 보내주시기 바랍니다.

이메일 주소: recruit@ourcompany.com

감사합니다.
`;
export default function NoticeId() {
  const router = useRouter();
  const { noticeId } = router.query;
  return (
    <Wrapper>
      noticeId : {noticeId}
      <TitleWrapper>
        <h3>제목</h3>
        <p>당사에서는 새로운 인재를 모집하고 있습니다.</p>
      </TitleWrapper>
      <ContentWrapper>
        <h3>내용</h3>
        <p>{announce}</p>
      </ContentWrapper>
      <Button_1
        name='목록으로 돌아가기'
        Icon={AiOutlineUnorderedList}
        color='--color-indigo500'
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background-color: var(--color-indigo100);
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    width: 150px;
    align-self: flex-end;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    background-color: var(--color-indigo50);
    padding: 10px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    background-color: var(--color-indigo50);
    white-space: pre-wrap;
    padding: 10px;
  }
`;
