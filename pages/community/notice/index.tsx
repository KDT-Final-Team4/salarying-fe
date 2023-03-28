import Link from 'next/link'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Content from '@/components/ui/Content'
import styled from 'styled-components'
import { useMemo } from 'react'

interface Object {
  id: number
  title: string
  edit_id: string
  date: string
  state: boolean
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

  const columns = useMemo(
    () => [
      {
        accessor: 'title',
        Header: '제목',
      },
      {
        accessor: 'edit_id',
        Header: '작성자',
      },
      {
        accessor: 'date',
        Header: '작성날짜',
      },
      {
        accessor: 'state',
        Header: '게시중',
      },
      {
        accessor: 'id',
        Notice_id: '공지사항id',
      },
    ],
    []
  )

  return (
    <Content title="공지사항">
      <div>
        <Link href={'/community/notice/new'}>등록</Link>
      </div>
      {/* {!isLoading && notices && <Table columns={columns} data={notices} />} */}
      <List></List>
    </Content>
  )
}

const List = styled.section`
  .list-item {
    font-size: 18px;
    border-bottom: 1px solid var(--color-lightgray);
    margin: 50px 0;
    padding: 0 30px;
  }
`
