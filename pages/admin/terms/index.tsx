import Content from '@/components/ui/Content';
import api from '@/libs/client/axiosClient';
import { getSNBLayout } from '@/libs/client/getLayout';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import useCookies from '@/libs/hooks/useCookies';
import { useRouter } from 'next/router';

const list = [
  { title: '서비스 이용약관', type: 'service' },
  { title: '개인정보 처리방침', type: 'privacy' },
  { title: '제3자 정보제공', type: 'information' },
  { title: '개인정보 마케팅 이용', type: 'marketing' },
];

export default function Terms() {
  const { accessToken } = useCookies();
  const router = useRouter();
  const [termType, setTermType] = useState();
  // console.log('termType ::::: ', termType);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['terms', termType],
    queryFn: () => api.getTerms(accessToken, termType),
    onSuccess: (data) => {
      const num = data?.data?.filter((item) => item.status === '공개')[0].id;
      router.push(`/admin/terms/detail/${num}`);
    },
  });
  const handleClickViewButton = (type) => {
    setTermType(type);
    refetch();
  };

  return (
    <Content title="최종 약관">
      <Inner>
        <List>
          {list.map((item) => (
            <Item key={item.type}>
              <h3>{item.title}</h3>
              <ButtonArea>
                <p
                  onClick={() => {
                    handleClickViewButton(item.type);
                  }}
                >
                  최종약관 보기
                </p>
                <Link href={`/admin/terms/${item.type}`}>
                  <p>관리하기</p>
                </Link>
              </ButtonArea>
            </Item>
          ))}
        </List>
      </Inner>
    </Content>
  );
}

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  margin-top: 50px;
`;

const List = styled.section`
  display: grid;
  width: inherit;
  height: inherit;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 30px 20px 20px 30px;
  align-content: space-between;
  cursor: pointer;
  color: var(--color-lightgray);
  h3 {
    width: 100%;
    font-size: 28px;
    font-weight: 500;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 10px;
  p {
    color: var(--color-lightgray);
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px var(--color-lightgray) inset;
    :hover {
      box-shadow: none;
      color: var(--color-primary);
      background-color: var(--color-point);
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
