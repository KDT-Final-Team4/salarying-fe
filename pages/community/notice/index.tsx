import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMutation, useQuery, UseMutationResult } from '@tanstack/react-query';
import Content from '@/components/ui/Content';
import styled, { css } from 'styled-components';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import Button_Send from '@/components/ui/Button_Send';
import usePagination from '@/libs/hooks/usePagination';
import Pagination from '@/components/ui/Pagination';
import NoticeAddModal from '@/components/community/NoticeAddModal';
import Toggle from 'react-toggle';

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

type NoticeStatusMutationParams = {
  accessToken: string;
  id: number;
  status: boolean;
};

export default function NoticeList() {
  const [activePage, setActivePage] = useState<number>(1);
  const [openModal, setOpenModal] = useState(false);

  const { accessToken, isAdmin } = useCookies();
  const { data: notices, refetch } = useQuery(['notices'], () => api.getNotice(accessToken));

  const heads = ['제목', '작성자', '상세보기'];

  let pageGroups = usePagination(notices?.data, 5);
  let pageMembersList = pageGroups[activePage - 1];

  const { mutate } = useMutation<Data, unknown, NoticeStatusMutationParams>({
    mutationFn: ({ accessToken, id, status }) => api.putNoticeStatus(accessToken, { id, status: !status }),
    onSuccess: () => {
      refetch();
    },
  });

  const toggleHandler = (id, status) => {
    mutate({ accessToken, id, status });
  };

  return (
    <Content title="공지사항">
      <Wrapper>
        <SectionStyle>
          <TableStyle>
            <thead>
              <tr>
                {heads.map((head: string, index: number) => (
                  <th key={index}>{head}</th>
                ))}
                <th className={isAdmin ? 'admin' : 'user'}>게시중</th>
              </tr>
            </thead>
            <tbody>
              {pageMembersList?.map((notice, index) => (
                <tr key={index}>
                  <td>{notice?.title}</td>
                  <td>{notice?.adminName}</td>
                  <td>
                    <Link href="/community/notice/[noticeId]" as={`/community/notice/${notice.id}`}>
                      <Button_Send text={'view'} />
                    </Link>
                  </td>
                  <td className={isAdmin ? 'admin' : 'user'}>
                    <Toggle id="onBoard" name="onBoard" checked={notice?.status} onChange={() => toggleHandler(notice?.id, notice?.status)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableStyle>
          <div className="pagination">
            <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
            <ButtonStyle className={isAdmin ? 'admin' : 'user'}>
              {openModal && <NoticeAddModal setOpenModal={setOpenModal} />}
              <Button_Send text={'등록'} onClick={() => setOpenModal(true)} />
            </ButtonStyle>
          </div>
        </SectionStyle>
      </Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  margin: auto;
  .user {
    display: none;
  }
`;

const SectionStyle = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  position: relative;
  .pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: end;
  padding: 40px 50px;
`;

const TableStyle = styled.table`
  width: 100%;
  table-layout: fixed;

  thead {
    th {
      color: var(--color-gray400);
      font-weight: 600;
      height: 80px;
      text-align: left;
    }
    th:first-child {
      padding-left: 30px;
    }
    th + th {
      text-align: center;
    }
    margin-bottom: 40px;
  }

  tbody {
    tr {
      font-weight: 700;
      color: var(--color-gray600);
      /* text-align: center; */
      height: 80px;
      border-bottom: 1px solid rgba(156, 163, 175, 0.2);
    }
    td {
      max-height: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    td:first-child {
      padding-left: 30px;
    }
    td + td {
      text-align: center;
    }
    a {
      align-items: center;
    }
  }
`;
