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
      <Inner>
        <Title>
          <h1>약관 관리</h1>
        </Title>
        <List>
          {list.map((item) => (
            <Item key={item.id}>
              <Link href={`/admin/terms/${item.id}`}>
                <p>{item.title}</p>
                <p>{item.status}</p>
              </Link>
            </Item>
          ))}
        </List>
      </Inner>
      {/* <button>
        <Link href="/admin/terms/new">약관 추가하기</Link>
      </button> */}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 50px;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 80%;
  height: 70%;
  border: 1px solid lightgray;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: #eeefff;
`;

const Title = styled.section`
  width: 100%;
  h1 {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    padding: 20px 30px;
    border-radius: 15px 15px 0 0;
    background-color: #000c8e;
  }
`;

const List = styled.section`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  padding: 20px 30px;
  cursor: pointer;
  a {
    width: 100%;
    color: #0072fd;
    display: flex;
    justify-content: space-between;
  }
  :hover {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
`;
export default Terms;
