import Link from "next/link";
import React from "react";
import styled from "styled-components";

const list = [
  { company: "카카오", id: 1, manager: "우지수" },
  { company: "네이버", id: 2, manager: "황이삭" },
  { company: "코사마트", id: 3, manager: "공혜지" },
  { company: "패스트캠퍼스", id: 4, manager: "유재석" },
];

const CompanyMembership = () => {
  return (
    <Container>
      <Title>
        <h1>기업 회원 관리</h1>
      </Title>
      <List>
        {list.map((item) => (
          <Item key={item.id}>
            <p>{item.company}</p>
            <p>{item.manager}</p>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
  :nth-last-child(1) {
    border: none;
  }
  :hover {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
`;

export default CompanyMembership;
