import PostCard from '@/components/company/job-posting/PostCard';
import Button_3 from '@/components/ui/Button_3';
import Button_Point from '@/components/ui/Button_Point';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { GrFormAdd } from 'react-icons/gr';
import AddModal from '@/components/company/job-posting/AddModal';
import useCookies from '@/libs/hooks/useCookies';
import api from '@/libs/client/axiosClient';
import useRecruitList from '@/libs/hooks/useRecruitList';
import { sortByProperty } from '@/libs/utils';


const JobPosting = () => {
  const handleClick = async () => {};
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, refetch } = useRecruitList();
  return (
    <Wrapper>
      {openModal && <AddModal setOpenModal={setOpenModal} refetch={refetch} />}
      <Head>
        <Title onClick={handleClick}>공고 리스트</Title>
      </Head>
      <PostList>
        <AddCard onClick={() => setOpenModal(true)}>
          <GrFormAdd size="50" />
        </AddCard>
        {sortByProperty(data?.data, 'postDate', false).map((post, index) => (
          <PostCard key={post.title + index} jobPost={post} />
        ))}
      </PostList>
    </Wrapper>
  );
};

export default JobPosting;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: auto;
  height: fit-content;
  margin: 0 auto;
`;
const AddBtn = styled(Button_3)`
  cursor: pointer;
  margin-bottom: 20px;
  align-self: flex-end;
`;
const AddCard = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-primary);
  align-items: center;
  width: 600px;
  border: 2px dashed var(--color-primary);
  border-radius: 10px;
  padding: 20px 30px;
  background-color: var(--color-lightgray);
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100px;
  cursor: pointer;

  svg {
    border-radius: 100%;
    background-color: var(--color-gray100);
  }
  &:hover {
    background-color: var(--color-sub);
    color: #fff;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    button {
      color: #fff;
      &:hover {
        background-color: var(--color-lightgray);
        color: var(--color-primary);
      }
    }
    svg {
      background-color: var(--color-lightgray);
      color: var(--color-primary);
    }
  }
  &:active {
    background-color: var(--color-lightgray);
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin: 50px 0;
  padding: 30px 0;
`;
const Title = styled.h1`
  font-weight: 700;
  color: var(--color-primary);
`;
const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 80px;
`;
