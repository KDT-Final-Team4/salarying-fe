import React from 'react'
import { BsFillBoxFill } from 'react-icons/bs'
import styled from 'styled-components'

export default function PostCard({ jobPost }) {
  return (
    <Card>
      <Left>
        <BsFillBoxFill size="30" />
        <div>
          <Title>{jobPost.title}</Title>
          <SubTitle>abcd@naver.com</SubTitle>
        </div>
      </Left>
      <Right>
        <Btn>자세히 보기</Btn>
        <Btn>관리</Btn>
      </Right>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-primary);
  align-items: center;
  width: 100%;
  border-radius: 10px;
  padding: 20px 30px;
  background-color: var(--color-lightgray);
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-sub);
    color: #fff;
    button {
      color: #fff;
      &:hover {
        background-color: var(--color-lightgray);
        color: var(--color-primary);
      }
    }
  }
`
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  div {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
`

const Title = styled.h3`
  font-weight: 700;
`
const SubTitle = styled.h4`
  font-weight: 400;
  font-size: 12px;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* gap: 5px; */
`
const Btn = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 5px;
  padding: 4px 10px;
  transition: all 0.2s;
  cursor: pointer;
`
