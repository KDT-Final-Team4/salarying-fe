import React, { useCallback } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import Link from 'next/link'
import Button_Point from '@/components/ui/Button_Point'
import Content from '@/components/ui/Content'

type Props = {}

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

export default function NoticeEdit(props: Props) {
  const router = useRouter()
  const noticeId = router.isReady ? router.query.noticeId : null
  console.log(noticeId)

  const { data } = useQuery(['notice', noticeId], () => getNotice(noticeId))

  const changeHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Content title={'공지사항 수정하기'}>
      <Wrapper>
        <div className="flex-wrapper">
          <Table id="editNotice" className="static">
            <h3>제목</h3>
            <textarea form="editNotice" className="title">
              {data?.title}
            </textarea>
            <h3>내용</h3>
            <textarea form="editNotice" className="content">
              {data?.content}
            </textarea>
          </Table>
          <BtnWrapper>
            <Link href="/community/notice/edit/[noticeId]" as={`/community/notice/edit/${noticeId}`}>
              <Button_Point name={'확인'}></Button_Point>
            </Link>
            <Button_Point name={'취소'} />
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

const Table = styled.form`
  display: grid;
  grid-template-columns: 100px 1000px;
  grid-template-rows: 100px 1fr;
  color: var(--color-primary);
  h3 {
    font-size: 20px;
    font-weight: 700;
    padding-top: 20px;
  }
  textarea {
    font-size: 18px;
    color: var(--color-gray500);
    font-weight: 700;
    border: 2px solid var(--color-gray300);
    border-radius: 15px;
    padding: 10px 20px;
    line-height: 1.8;
    min-height: 60px;
    overflow-y: hidden;
    resize: none;
    &.title {
      height: 60px;
      overflow-y: scroll;
    }
  }
  textarea:last-child {
    min-height: 300px;
    overflow-y: scroll;
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
