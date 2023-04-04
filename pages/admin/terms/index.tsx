import Content from '@/components/ui/Content';
import api from '@/libs/client/axiosClient';
import { getSNBLayout } from '@/libs/client/getLayout';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAccessToken from '@/libs/hooks/useAccessToken';
import useCookies from '@/libs/hooks/useCookies';

const list = [
  { title: '서비스 이용 약관', id: 'service', status: '공개' },
  { title: '개인 정보 처리 방침', id: 'privacy', status: '공개' },
  { title: '제3자 정보 제공', id: 'information', status: '비공개' },
  { title: '개인정보 마케팅 이용', id: 'marketing', status: '비공개' },
];

export default function Terms() {
  // const { accessToken: token } = useAccessToken();
  const token = useCookies();
  console.log(token);
  // const token ='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcImFkbWluQGVtYWlsLmNvbVwiLFwicm9sZVwiOlwiQURNSU5cIixcImp3dFR5cGVcIjpcIkFDQ0VTU1wiLFwiZW5hYmxlZFwiOmZhbHNlLFwidXNlcm5hbWVcIjpcImFkbWluQGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpbe1wiYXV0aG9yaXR5XCI6XCJBRE1JTlwifV0sXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2V9IiwiaXNzIjoiNCB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2ODA1OTA5MDUsImV4cCI6MTY4MDY3NzMwNX0.xIkNeyvg8jCJPlmgnB5s-be8uXJGldzuELNgOvKbPUw';
  const fetcher = () => api.getTerms(token, 'service');
  const { data: terms, isLoading } = useQuery(['terms'], fetcher);

  if (!token) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // const { accessToken: token, isAdmin } = useAccessToken();
  // const fetcher = () => api.getTerms(token, 'service');
  // const { data: terms, isLoading } = useQuery(['terms'], fetcher);
  console.log(terms);

  // const handleTermList = async () => {
  //   const termRes = await api.getTerms(token, 'service');
  //   console.log(termRes);
  // };
  // handleTermList();
  return (
    <Container>
      <Content title="최종 약관">
        <div></div>
      </Content>
      <Inner>
        <List>
          {list.map((item) => (
            <Item key={item.id}>
              <h3>{item.title}</h3>
              <div>
                <Link href={`/admin/terms/${item.id}`}>
                  <p>관리하기</p>
                </Link>
              </div>
            </Item>
          ))}
        </List>
      </Inner>
    </Container>
  );
}

Terms.getLayout = getSNBLayout;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: flex-start;
`;

const Inner = styled.div`
  width: 100%;
  margin: 80px 50px 0 50px;
`;

const List = styled.section`
  display: grid;
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
  padding: 30px;
  align-content: space-between;
  cursor: pointer;
  color: var(--color-lightgray);
  p {
    color: var(--color-lightgray);
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px var(--color-lightgray) inset;
  }
  :hover {
    color: var(--color-primary);
    background-color: var(--color-point);
    transition: 0.3s;
    p {
      box-sizing: border-box;
      box-shadow: none;
      color: var(--color-lightgray);
      background-color: var(--color-primary);
    }
  }
  h3 {
    width: 100%;
    font-size: 28px;
    font-weight: 500;
    :after {
      content: '';
      border-bottom: solid 3px white;
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
function getTerms(arg0: string[], getTerms: any): { isLoading: any; data: any } {
  throw new Error('Function not implemented.');
}
