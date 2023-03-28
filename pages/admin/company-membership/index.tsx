import Content from '@/components/ui/Content'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const list = [
  { company: '카카오', id: 1, manager: '우지수' },
  { company: '네이버', id: 2, manager: '황이삭' },
  { company: '코사마트', id: 3, manager: '공혜지' },
  { company: '패스트캠퍼스', id: 4, manager: '유재석' },
]

export default function CompanyMembership() {
  return (
    <Container>
      <Content title="기업 회원 관리" children={''}></Content>
      <Inner>
        {list.map((item) => (
          <Item key={item.id}>
            <p>{item.company}</p>
            <p>{item.manager}</p>
          </Item>
        ))}
      </Inner>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: flex-start;
`

const Inner = styled.div`
  width: 100%;
  margin: 0 50px;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

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
`
