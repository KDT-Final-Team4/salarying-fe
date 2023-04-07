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
  const [status, setStatus] = useState(false);

  const { accessToken } = useCookies();
  const { data: notices, refetch } = useQuery(['notices'], () => api.getNotice(accessToken));

  const heads = ['제목', '작성자', '상세보기', '게시중'];

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
                  <td>
                    <Toggle id="onBoard" name="onBoard" checked={notice?.status} onChange={() => toggleHandler(notice?.id, notice?.status)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableStyle>
          <div className="pagination">
            <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
          </div>
        </SectionStyle>
        <NewButton>
          {openModal && <NoticeAddModal setOpenModal={setOpenModal} />}
          <Button_Send text={'등록'} onClick={() => setOpenModal(true)} />
        </NewButton>
      </Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  margin: auto;
`;

const SectionStyle = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  .pagination {
    display: flex;
    justify-content: center;
  }
`;

const NewButton = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: end;
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
    td + td {
      text-align: center;
    }
    a {
      align-items: center;
    }
  }
`;

const LinkStyle = styled.div``;

const ToggleBtn = styled.button<StyledProps>`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? 'none' : 'var(--color-primary)')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.div<StyledProps>`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(80px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
