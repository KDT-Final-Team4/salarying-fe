import Content from '@/components/ui/Content';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import Button_Send from '@/components/ui/Button_Send';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FaqAddModal from '@/components/community/FaqAddModal';
import usePagination from '@/libs/hooks/usePagination';
import Pagination from '@/components/ui/Pagination';
import Toggle from 'react-toggle';
import { toast } from 'react-toastify';

type FaqMutationParams = {
  accessToken: string;
  id: number;
  status: boolean;
};

export default function FAQ() {
  const [activePage, setActivePage] = useState<number>(1);
  const [openModal, setOpenModal] = useState(false);

  const { accessToken, isAdmin } = useCookies();

  const {
    data: faqList,
    isLoading,
    refetch,
  } = useQuery(['FAQ'], () => api.getFAQ(accessToken).then((res) => res.data), {
    notifyOnChangeProps: ['data'],
  });

  let pageGroups = usePagination(faqList, 5);

  let pageMembersList = pageGroups[activePage - 1];

  const { mutate } = useMutation<Data, unknown, FaqMutationParams>({
    mutationFn: ({ accessToken, id, status }) => api.putFAQStatus(accessToken, { id, status: !status }),
    onError: () => {
      toast.error('게시중 상태변경 실패');
    },

    onSuccess: () => {
      refetch();
      toast.success('게시중 상태변경 완료');
    },
  });

  const toggleHandler = (id, status) => {
    mutate({ accessToken, id, status });
  };
  return (
    <Content title={'FAQ'}>
      <Wrapper>
        <SectionStyle>
          <TableStyle>
            <thead>
              <tr>
                <th>카테고리</th>
                <th>질문 / 답변</th>
                <th>상세보기</th>
                <th className={isAdmin ? 'admin' : 'user'}>게시중</th>
              </tr>
            </thead>
            <tbody>
              {pageMembersList?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.category}</td>
                    <td className="second">
                      <span>Q {data.question}</span>
                      <span>A {data.answer}</span>
                    </td>
                    <td>
                      <Link
                        href={{
                          pathname: '/community/faq/[faqId]/[category]',
                          query: {
                            faqId: data.id,
                            category: JSON.stringify(data.category),
                          },
                        }}
                        as={`/community/faq/${data.id}/${data.category}`}
                        passHref
                      >
                        <Button_Send text={'view'} />
                      </Link>
                    </td>
                    <td className={isAdmin ? '' : 'user'}>
                      <Toggle id="onBoard" checked={data?.status} onChange={() => toggleHandler(data?.id, data?.status)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TableStyle>
          <div className="pagination">
            <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
            <ButtonStyle className={isAdmin ? '' : 'user'}>
              {openModal && <FaqAddModal setOpenModal={setOpenModal} />}
              <Button_Send text={'등록'} onClick={() => setOpenModal(true)} />
            </ButtonStyle>
          </div>
        </SectionStyle>
      </Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
  .user {
    display: none;
  }
`;

const SectionStyle = styled.div`
  height: 950px;
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
  position: relative;
  text-align: left;
  table-layout: fixed;
  width: 100%;
  border-spacing: 0 20px;
  th {
    color: var(--color-gray400);
    height: 80px;
    font-weight: 600;
  }
  th:first-child {
    padding-left: 30px;
  }
  th:nth-child(2) {
    width: 50%;
  }
  th:nth-child(3) {
    text-align: center;
  }
  th:nth-child(4) {
    text-align: center;
  }

  tr {
    margin: 10px;
    font-weight: 700;
    color: var(--color-gray600);
    border-bottom: 1px solid rgba(156, 163, 175, 0.2);
  }

  td {
    max-height: 100px;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  td:first-child {
    padding-left: 30px;
    /* text-align: center; */
  }

  td:nth-child(3) {
    text-align: center;
  }

  td:last-child {
    text-align: center;
  }

  .second {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 20px;
    line-height: 1.8;
  }
`;
