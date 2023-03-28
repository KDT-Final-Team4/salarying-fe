import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Content from '@/components/ui/Content'
import styled from 'styled-components'

interface Object {
  id: number
  title: string
  edit_id: string
  date: string
  state: boolean
}
interface StyledProps {
  toggle: boolean
}

const getNotices = async () => {
  const result = await axios
    .request({
      method: 'get',
      url: '/api/notice',
    })
    .then((response) => {
      return response.data.data
    })
    .catch((error) => {
      console.log(error)
    })
  return result
}

export default function NoticeList() {
  const { data: notices, isLoading } = useQuery(['notices'], getNotices)

  const headerArray = ['제목', '작성자', '작성날짜', '게시중']

  return (
    <Content title="공지사항">
      <Link href={'/community/notice/new'}>등록</Link>
      <List>
        <Top>
          {headerArray.map((header, idx) => (
            <div key={idx} className="item">
              {header}
            </div>
          ))}
        </Top>
        {!isLoading &&
          notices?.map((notice, idx) => (
            <ContentList key={idx}>
              <Link href="/community/notice/[noticeId]" as={`/community/notice/${notice.id}`}>
                <strong className="item">{notice.title}</strong>
              </Link>
              <span className="item">{notice.edit_id}</span>
              <time className="item">{notice.date}</time>
              <ToggleBtn toggle={notice.state}>
                <Circle toggle={notice.state} />
              </ToggleBtn>
            </ContentList>
          ))}
      </List>
    </Content>
  )
}

const List = styled.div`
  color: var(--color-gray600);
`
const Top = styled.section`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--color-gray400);
  font-weight: 700;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 50px 0;
  .item {
    margin: 0 auto;
  }
`

const ContentList = styled.section`
  width: 100%;
  align-items: center;
  font-size: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 80px;
  border-radius: 40px;
  border-bottom: 2px solid var(--color-lightgray);
  margin: 0 0 30px 0;
  .item {
    margin: 0 auto;
  }
  > strong {
    font-weight: 700;
    color: var(--color-gray600);
  }
  > span {
    font-weight: 700;
    color: var(--color-gray500);
  }
  > time {
    font-weight: 700;
    color: var(--color-gray500);
  }
`
const ToggleBtn = styled.button<StyledProps>`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? 'none' : 'var()')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`
const Circle = styled.div<StyledProps>`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
`
