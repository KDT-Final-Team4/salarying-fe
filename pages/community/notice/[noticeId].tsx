import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import styled from 'styled-components'
import Button_Point from '@/components/ui/Button_Point'
import Content from '@/components/ui/Content'

interface content {
  noticeId: string
  title: string
  adminId: string
  date: string
  edit_date: string
  content: string
  state: boolean
}

const getNotice = async (noticeId: string | string[]) => {
  const result = await axios
    .request({
      method: 'get',
      url: `/api/notice/${noticeId}`,
    })
    .then((response) => {
      console.log(response.data.data.noticeId)
      return response.data.data
    })
    .catch((error) => {
      console.log(error)
    })
  return result
}

export default function NoticeDetail() {
  const router = useRouter()
  const noticeId = router.isReady ? router.query.noticeId : null
  console.log(noticeId)

  const { data } = useQuery(['notice', noticeId], () => getNotice(noticeId))

  return (
    <Content title={'공지사항 상세정보'}>
      <Wrapper>
        <div className="flex-wrapper">
          <Table className="static">
            <h3>제목</h3>
            <span className="title">{data?.title}</span>
            <h3>내용</h3>
            <span className="content">{data?.content}</span>
          </Table>
          <BtnWrapper>
            <Link href="/community/notice/edit/[noticeId]" as={`/community/notice/edit/${noticeId}`}>
              <Button_Point name={'수정'}></Button_Point>
            </Link>
            <Button_Point name={'삭제'} />
          </BtnWrapper>
        </div>
      </Wrapper>
    </Content>
  )
}

const Wrapper = styled.div`
  margin: 50px auto 0;
  padding: 0 50px;
  box-sizing: border-box;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .flex-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
  }
`

const Table = styled.div`
  display: grid;
  grid-template-columns: 100px 1000px;
  grid-template-rows: 100px 1fr;
  color: var(--color-primary);
  h3 {
    font-size: 20px;
    font-weight: 700;
    padding-top: 20px;
  }
  span {
    font-size: 18px;
    color: var(--color-gray500);
    font-weight: 700;
    border: 2px solid var(--color-gray300);
    border-radius: 10px;
    padding: 10px 20px;
    line-height: 1.8;
    overflow-y: scroll;
    &.title {
      height: 60px;
    }
    &.content {
      min-height: 300px;
    }
  }
`
const BtnWrapper = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin: 50px 0 0;
  bottom: 0;
  right: 0;
`
