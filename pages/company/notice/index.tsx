import React from 'react';
import styled from 'styled-components';

const listData = [
  { title: '공지사항1', author: '공혜지', createdAt: '2023.03.03' },
  { title: '공지사항2', author: '황이삭', createdAt: '2023.03.04' },
  { title: '공지사항3', author: '우지수', createdAt: '2023.03.05' },
];

const ContentHeader = () => {
  return (
    <>
      <HeaderCell>제목</HeaderCell>
      <HeaderCell>작성자</HeaderCell>
      <HeaderCell>작성날짜</HeaderCell>
    </>
  );
};
const HeaderCell = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin: 10px 0;
`;

export default function Notice() {
  return (
    <Wrapper>
      <Head>
        <Title>공지사항</Title>
      </Head>

      <Contents>
        <ContentHeader />
        {listData.map((data) => (
          <>
            <ChildTitle>{data.title}</ChildTitle>
            <ChildAuthor>{data.author}</ChildAuthor>
            <div>{data.createdAt}</div>
          </>
        ))}
      </Contents>
    </Wrapper>
  );
}
const ChildTitle = styled.section`
  /* asdfasdf */
`
const ChildAuthor = styled.div`
  /* fafd */
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
  /* gap: 100px; */
  border: 1px solid green;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin: 50px 0;
  padding: 30px 0;
  border-bottom: 1px solid black;
`;
const Title = styled.h1`
  font-weight: 700;
`;
const Contents = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
  grid-template-columns: 1fr 100px 100px;
  gap: 3px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-emerald100);
  }
`;
