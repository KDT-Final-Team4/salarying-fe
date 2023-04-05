import Content from '@/components/ui/Content';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const list = [
  { company: '카카오', id: 1, manager: '우지수' },
  { company: '네이버', id: 2, manager: '황이삭' },
  { company: '코사마트', id: 3, manager: '공혜지' },
  { company: '패스트캠퍼스', id: 4, manager: '유재석' },
];

export default function CompanyMembership() {
  return (
    <Container>
      <Content title="기업 회원 관리">
        <div></div>
      </Content>
      <Inner>
        <Nav>
          {/* {list.map((item) => (
            <Link key={item.id} href={`${item.id}`} className={termsId === item.id ? 'active' : null}>
              <li id={item.id}>{item.title}</li>
            </Link>
          ))} */}
        </Nav>
        <List>
          <TableTitle>
            <input type="checkbox" />
            <p>기업</p>
            <p>어쩌고</p>
            <p>저쩌고</p>
            <p>ㅇ히이</p>
            <p>미리 보기</p>
          </TableTitle>
          {/* {terms.map((term) => (
            <TableBody key={term.id}>
              <input type="checkbox" />
              <p>{term.title}</p>
              <p>{term.version}</p>
              <p>{term.name}</p>
              <p>{term.status}</p>
              <button>view</button>
            </TableBody>
          ))} */}
        </List>
        <ButtonArea>
          <Link href="edit/termsId">
            <button>수정하기</button>
          </Link>
          <button>삭제하기</button>
          <Link href="new">
            <button className="submit">등록하기</button>
          </Link>
        </ButtonArea>
      </Inner>
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: flex-start;
`;

const Inner = styled.div`
  width: 100%;
  margin: 0 50px;
`;

const Nav = styled.ul`
  width: 100%;
  display: flex;
  color: var(--color-primary);
  justify-content: space-between;
  margin-bottom: 30px;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-weight: 400;
    border-radius: 10px;
    padding: 20px 0;
    margin: 0 20px;
    background-color: var(--color-lightgray);
    color: var(--color-primary);
    :hover {
      background-color: var(--color-point);
      transition: 0.1s;
      font-weight: 700;
      box-sizing: border-box;
    }
    &.active {
      background-color: var(--color-point);
      transition: 0.2s;
      font-weight: 700;
      box-sizing: border-box;
    }
  }
`;

const List = styled.div`
  width: inherit;
  padding: 40px 20px 40px 20px;
  box-sizing: border-box;
  height: 600px;
`;

const TableTitle = styled.div`
  display: flex;
  width: inherit;
  padding: 20px 40px 40px 40px;
  justify-content: flex-start;
  font-weight: 700;
  color: var(--color-gray600);
  border-radius: 10px;
  p {
    padding: 10px 0;
    width: 20%;
    display: flex;
    justify-content: center;
    :nth-child(2) {
      padding-left: 30px;
      width: 40%;
      justify-content: flex-start;
    }
    :nth-child(5) {
      margin-right: 20px;
    }
    :nth-child(6) {
      width: 10%;
      box-sizing: border-box;
      padding: 10px 20px;
    }
  }
`;
const TableBody = styled.div`
  width: inherit;
  display: flex;
  justify-content: flex-start;
  padding: 20px 40px;
  border-bottom: 1px solid var(--color-gray300);
  gap: 10px;
  color: var(--color-gray600);
  p {
    padding: 10px 0;
    width: 20%;
    display: flex;
    justify-content: center;
    :nth-child(2) {
      padding-left: 30px;
      width: 40%;
      justify-content: flex-start;
    }
    :nth-child(5) {
      margin-right: 20px;
    }
  }
  button {
    width: 10%;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 500;
    color: var(--color-primary);
    background-color: var(--color-point);
    cursor: pointer;
    :hover {
      color: var(--color-point);
      background-color: var(--color-primary);
      transition: 0.2s;
    }
  }
`;

const ButtonArea = styled.div`
  width: inherit;
  margin-bottom: 100px;
  button {
    width: 170px;
    height: 50px;
    background-color: transparent;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid var(--color-gray300);
    &.cancel {
      :hover {
        font-weight: 700;
        box-shadow: 3px 5px 3px var(--color-lightgray);
      }
    }
    &.submit {
      background-color: var(--color-point);
      border: none;
      :hover {
        box-shadow: 10px 10px 10px var(--color-lightgray);
        font-weight: 700;
      }
    }
  }
`;
