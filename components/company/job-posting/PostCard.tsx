import React from 'react'
import { BsFillBoxFill } from 'react-icons/bs'
import styled from 'styled-components'

export default function PostCard({ jobPost }) {
  return (
    <Card>
      <Left>
        <BsFillBoxFill color="#fff" size="30" />
        <div>
          <Title>{jobPost.title}</Title>
          <span>abcd@naver.com</span>
        </div>
      </Left>
      <Right>
        <Btns>
          <Btn>자세히 보기</Btn>
          <Btn>관리</Btn>
        </Btns>
      </Right>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary);
  color: var(--color-lightgray);
  align-items: center;
  width: 100%;
  border-radius: 10px;
  padding: 20px 30px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-sub);
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
const Right = styled.div`
  display: flex;
`

const Title = styled.h3`
  font-weight: 700;
`
const Btns = styled.div`
  display: flex;
  gap: 10px;
`
const Btn = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-lightgray);
`
