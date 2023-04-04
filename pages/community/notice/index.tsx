import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Content from '@/components/ui/Content';
import styled from 'styled-components';
import api from '@/libs/client/axiosClient';
import useAccessToken from '@/libs/hooks/useAccessToken';

interface Object {
  id: number;
  title: string;
  edit_id: string;
  date: string;
  state: boolean;
}
interface StyledProps {
  toggle: boolean;
}

const getNotices = async () => {
  const result = await axios
    .request({
      method: 'get',
      url: '/api/notice',
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

export default function NoticeList() {
  const { isAdmin, accessToken } = useAccessToken();
  const { data: notices, isLoading } = useQuery(['notices'], () => api.getNotice(accessToken));
  if (!accessToken) return;

  const heads = ['제목', '작성자', '게시중'];

  return (
    <Content title="공지사항">
      <Link href={'/community/notice/new'}>등록</Link>
      <TableStyle>
        <thead>
          <tr>
            {heads.map((head: string, index: number) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {!isLoading &&
            notices?.map((notice, index) => {
              <tr key={index}>
                <td>{notice.title}</td>
                <td>{notice.adminName}</td>
                <td>{notice.state}</td>
              </tr>;
            })} */}
        </tbody>
      </TableStyle>
    </Content>
  );
}

const TableStyle = styled.table`
  width: 100%;
`;
