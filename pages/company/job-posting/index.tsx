import PostCard from '@/components/company/job-posting/PostCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const listData = [{ title: '알바직 모집' }, { title: '인턴 모집' }, { title: 'CEO 모집' }, { title: '총무 모집' }]

const JobPosting = () => {
  return (
    <Wrapper>
      <Head>
        <Title>공고 리스트 보기</Title>
      </Head>

      <PostList>
        {listData.map((list) => (
          <PostCard key={list.title} jobPost={list} />
        ))}
      </PostList>
    </Wrapper>
  )
}

export default JobPosting

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
  /* gap: 100px; */
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin: 50px 0;
  padding: 30px 0;
`
const Title = styled.h1`
  font-weight: 700;
  color: var(--color-primary);
`
const PostList = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 20px;
`
