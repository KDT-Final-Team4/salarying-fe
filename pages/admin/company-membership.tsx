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
      <Inner>
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
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 50px;
  justify-content: center;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;
  padding: 20px 30px;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0px 3px 10px #c2c2c2;
  cursor: pointer;
  :nth-last-child(1) {
    border: none;
  }
  :hover {
    background-color: #f5f5f5;
  }
`;

export default CompanyMembership;
