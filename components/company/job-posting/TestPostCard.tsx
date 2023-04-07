// postCard.tsx
import Button_2 from '@/components/ui/Button_2';
import { useRouter } from 'next/router';
import React from 'react';
import { BsFillBoxFill } from 'react-icons/bs';
import styled from 'styled-components';

interface IProps {
  jobPost: {
    id: number;
    title: string;
    postDate: string;
    task: string;
    status: string;
  };
}

export default function PostCard({ jobPost }: IProps) {
  const router = useRouter();
  return (
    <Card>
      <Left>
        <BsFillBoxFill size="30" />
        <div>
          <Title>{jobPost?.title}</Title>
          <SubTitle>{jobPost?.postDate.split('T')[0]}</SubTitle>
          <Info>{jobPost?.task}</Info>
          <Info>{jobPost?.status}</Info>
        </div>
      </Left>
      <Right>
        <Btn onClick={() => router.push(`/company/job-posting/${jobPost?.id}`)}>자세히 보기</Btn>
        <Btn>관리</Btn>
      </Right>
    </Card>
  );
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--color-sub);
    color: #fff;
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);

    button {
      color: #fff;
      &:hover {
        background-color: var(--color-lightgray);
        color: var(--color-primary);
      }
    }
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  div {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-weight: 700;
`;

const SubTitle = styled.h4`
  font-weight: 400;
  font-size: 12px;
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  /* color: var(--color-sub); */
  p {
    display: flex;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Btn = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 5px;
  padding: 4px 10px;
  transition: all 0.2s;
  cursor: pointer;
`;
