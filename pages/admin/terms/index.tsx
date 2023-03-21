import Link from "next/link";
import React from "react";
import styled from "styled-components";

const list = [
  { title: "서비스 이용 약관", id: 1, status: "공개" },
  { title: "개인 정보 처리 방침", id: 2, status: "공개" },
  { title: "제3자 정보 제공", id: 3, status: "비공개" },
  { title: "개인정보 마케팅 이용", id: 4, status: "비공개" },
];

const Terms = () => {
  return (
    <Container>
      <Title>
        <h1>약관 관리</h1>
      </Title>
      <List>
        {list.map((item) => (
          <Link href={`/admin/terms/${item.id}`} key={item.id}>
            <Item>
              <p>{item.title}</p>
              <p>{item.status}</p>
            </Item>
          </Link>
        ))}
      </List>
      <button>
        <Link href="admin/terms/new">약관 추가하기</Link>
      </button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 150vh;
  width: 100%;
  align-items: center;
  padding-top: 50px;
`;

const Title = styled.section`
  width: 80%;
  h1 {
    color: #0072fd;
    font-size: 34px;
    font-weight: 700;
    padding-bottom: 20px;
    padding-top: 70px;
    border-bottom: 2px solid lightgray;
    margin-bottom: 40px;
  }
`;

const List = styled.section`
  width: 80%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;
  padding: 20px 30px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  :nth-last-child(1) {
    border: none;
  }
  :hover {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
`;
export default Terms;
