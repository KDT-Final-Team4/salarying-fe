import Content from '@/components/ui/Content';
import ax from '@/libs/client/axiosClient';
import { getSNBLayout } from '@/libs/client/getLayout';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const list = [
  { title: '서비스 이용 약관', id: 'service', status: '공개' },
  { title: '개인 정보 처리 방침', id: 'privacy', status: '공개' },
  { title: '제3자 정보 제공', id: 'information', status: '비공개' },
  { title: '개인정보 마케팅 이용', id: 'marketing', status: '비공개' },
];

export default function Terms() {
  const handleTermList = async () => {
    const termRes = await ax.getTerms();
    console.log(termRes);
  };
  handleTermList();
  return (
    <Container>
      <Content title="최종 약관">
        <div></div>
      </Content>
      <Inner>
        <List>
          {list.map((item) => (
            <Item key={item.id}>
              <h3>{item.title}</h3>
              <div>
                <Link href={`/admin/terms/${item.id}`}>
                  <p>관리하기</p>
                </Link>
              </div>
            </Item>
          ))}
        </List>
      </Inner>
    </Container>
  );
}

Terms.getLayout = getSNBLayout;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: flex-start;
`;

const Inner = styled.div`
  width: 100%;
  margin: 80px 50px 0 50px;
`;

const List = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 30px;
  align-content: space-between;
  cursor: pointer;
  color: var(--color-lightgray);
  p {
    color: var(--color-lightgray);
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px var(--color-lightgray) inset;
  }
  :hover {
    color: var(--color-primary);
    background-color: var(--color-point);
    transition: 0.3s;
    p {
      box-sizing: border-box;
      box-shadow: none;
      color: var(--color-lightgray);
      background-color: var(--color-primary);
    }
  }
  h3 {
    width: 100%;
    font-size: 28px;
    font-weight: 500;
    :after {
      content: '';
      border-bottom: solid 3px white;
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
