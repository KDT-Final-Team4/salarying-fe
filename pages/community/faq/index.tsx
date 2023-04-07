import Content from '@/components/ui/Content';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import Button_Send from '@/components/ui/Button_Send';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FaqAddModal from '@/components/community/FaqAddModal';
import usePagination from '@/libs/hooks/usePagination';
import Pagination from '@/components/ui/Pagination';
import Button_1 from '@/components/ui/Button_1';
import Checkbox_1 from '@/components/ui/Checkbox_1';

export default function FAQ() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<number>(1);
  const [openModal, setOpenModal] = useState(false);
  const { accessToken, isAdmin } = useCookies();

  const { data: faqList, isLoading } = useQuery(['FAQ'], () => api.getFAQ(accessToken));

  let pageGroups = usePagination(faqList?.data, 5);

  let pageMembersList = pageGroups[activePage - 1];

  return (
    <Content title={'FAQ'}>
      <Wrapper>
        <TableStyle>
          <thead>
            <tr>
              <th>선택</th>
              <th>카테고리</th>
              <th>질문 / 답변</th>
              <th>상세보기</th>
            </tr>
          </thead>
          <tbody>
            {pageMembersList?.map((data, index) => {
              return (
                <GridStyle key={index}>
                  <td>
                    <Checkbox_1 id={data.id} />
                  </td>
                  <td>{data.category}</td>
                  <td className="second">
                    <span>Q {data.question}</span>
                    <span>A {data.answer}</span>
                  </td>
                  <td>
                    <Link href="/community/faq/[faqId]" as={`/community/faq/${data.id}`}>
                      <Button_Send text={'view'} />
                    </Link>
                  </td>
                </GridStyle>
              );
            })}
          </tbody>
        </TableStyle>
        <BottomStyle>
          <Button_1 name={'삭제'} />
          {openModal && <FaqAddModal setOpenModal={setOpenModal} />}
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
          <Button_Send text={'등록'} height={null} width={null} onClick={() => setOpenModal(true)} />
        </BottomStyle>
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
`;

const BottomStyle = styled.div`
  bottom: 0;
  right: 0;
  display: flex;
  margin-top: 30px;
  button {
    justify-content: end;
  }
`;

const TableStyle = styled.table`
  position: relative;
  text-align: left;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0 20px;
  th {
    /* min-width: 200px; */
    /* max-width: 400px; */
    color: var(--color-gray400);
    height: 80px;
    font-weight: 600;
  }
  th:first-child {
    padding-left: 30px;
  }
  th:nth-child(3) {
    width: 800px;
  }
  th:last-child {
    text-align: center;
    /* width: 100px; */
  }
`;

const GridStyle = styled.tr`
  margin: 10px;
  font-weight: 700;
  color: var(--color-gray600);
  border-bottom: 1px solid rgba(156, 163, 175, 0.2);
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
