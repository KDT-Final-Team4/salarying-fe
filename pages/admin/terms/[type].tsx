import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import Button_Send from '@/components/ui/Button_Send';
import usePagination from '@/libs/hooks/usePagination';
import Pagination from '@/components/ui/Pagination';
import Button_2 from '@/components/ui/Button_2';
import { useQuery } from '@tanstack/react-query';
import Toggle from 'react-toggle';
import { toast } from 'react-toastify';

interface IList {
  title: string;
  id: string;
}

const list: IList[] = [
  {
    title: '서비스 이용약관',
    id: 'service',
  },
  {
    title: '개인정보 처리방침',
    id: 'privacy',
  },
  {
    title: '제3자 정보제공',
    id: 'information',
  },
  {
    title: '개인정보 마케팅 이용',
    id: 'marketing',
  },
];

const heads = ['약관 제목', '약관 버전', '약관 작성자', '상태', '상세보기'];

export default function Type() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<number>(1);
  const { accessToken } = useCookies();
  const { type } = router.query as { type };
  const [confirm, setConfirm] = useState(false);
  const [idNumber, setIdNumber] = useState();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['terms', type],
    queryFn: () => api.getTerms(accessToken, type),
    onSuccess: () => {
      setActivePage(1);
    },
  });

  // console.log(data);
  // 페이지네이션
  let pageGroups = usePagination(data?.data, 5);
  let pageMembersList = pageGroups[activePage - 1];

  const handleClick = (id, status) => {
    if (status === '비공개') {
      setConfirm(true);
      setIdNumber(id);
    }
    if (status === '공개') {
      setIdNumber(id);
      toast.error('최소 한 개의 약관은 공개상태여야 합니다.');
    }
  };

  const postStatus = async () => {
    try {
      const data: IStatusData = { force: true, status: '공개', id: idNumber };
      const res = await api.postTermsStatus(accessToken, data);
      refetch();
      setConfirm(false);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Content title="약관별 관리">
      <span>{isLoading && '로딩중'}</span>
      <Nav>
        {list.map((item) => (
          <Link key={item.id} href={`${item.id}`} className={type === item.id ? 'active' : null}>
            <li id={item.id}>{item.title}</li>
          </Link>
        ))}
      </Nav>
      <Wrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>No.</Th>
              {heads.map((title, idx) => (
                <Th key={idx}>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {pageMembersList?.map((term, index) => (
              <Tr key={index}>
                <Td>{index + (activePage - 1) * 5 + 1}</Td>
                <Td>{term.title}</Td>
                <Td>{term.version}</Td>
                <Td>{term.name}</Td>
                <Td>
                  {confirm && idNumber === term.id ? (
                    <ConfirmModal>
                      <h4>☑️ 확인 ☑️</h4>
                      <h6>
                        해당 약관을 <strong>공개상태</strong>로 변경하시겠습니까?
                        <br />
                        다른 공개 약관은 <strong>자동으로 비공개</strong>처리됩니다.
                      </h6>
                      <div>
                        <Button_2 color={'point'} name={'변경'} onClick={postStatus} />
                        <Button_2
                          name={'취소'}
                          onClick={() => {
                            setConfirm(false);
                          }}
                        />
                      </div>
                    </ConfirmModal>
                  ) : null}
                  <Toggle id={term.id} name="onBoard" checked={term?.status === '공개'} onClick={() => handleClick(term?.id, term?.status)} />
                </Td>
                <Td>
                  <Button_Send
                    text={'view'}
                    height={null}
                    width={100}
                    onClick={() => {
                      router.push({ pathname: `detail/${term.id}` });
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Wrapper>

      <ButtonArea>
        <div className="pagination">
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
        </div>
        <div>
          <Link href="new">
            <Button_2 name={'등록'} color={'point'} />
          </Link>
        </div>
      </ButtonArea>
    </Content>
  );
}

const ConfirmModal = styled.div`
  width: 450px;
  height: 300px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  border-radius: 20px;
  background-color: var(--color-primary);
  padding: 10px 30px;
  box-sizing: border-box;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h4 {
    width: inherit;
    padding-top: 20px;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-gray100);
  }
  h6 {
    color: white;
    font-size: 18px;
    line-height: 1.4;
  }
  div {
    width: inherit;
    display: flex;
    gap: 15px;
    justify-content: center;
    padding-bottom: 10px;
    button {
      cursor: pointer;
      box-sizing: border-box;
      width: 200px;
      height: 40px;
    }
  }
`;
const Nav = styled.ul`
  width: 100%;
  display: flex;
  color: var(--color-primary);
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 10px;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-weight: 400;
    border-radius: 10px;
    padding: 20px 0;
    margin: 0 20px;
    background-color: var(--color-lightgray);
    color: var(--color-primary);
    :hover {
      background-color: var(--color-point);
      transition: 0.1s;
      font-weight: 700;
      box-sizing: border-box;
    }
    &.active {
      background-color: var(--color-point);
      transition: 0.2s;
      font-weight: 700;
      box-sizing: border-box;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 552px;
  flex-direction: column;
  padding: 2rem 0;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  h1 {
    color: var(--color-gray700);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 60px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Thead = styled.thead`
  tr {
    th {
      table-layout: fixed;
      border-top: 1px solid var(--color-gray100);
      text-align: center;
      padding: 22px 12px;
      font-weight: 500;
      font-size: 14px;
      color: var(--color-gray400);
      :nth-child(1) {
        width: 5%;
        text-align: left;
      }
      :nth-child(2) {
        width: 50%;
        text-align: left;
      }
      :nth-child(3) {
        width: 10%;
      }
      :nth-child(4) {
        width: 10%;
      }
      :nth-child(5) {
        width: 10%;
      }
      :nth-child(6) {
        width: 15%;
      }
    }
  }
`;
const Tbody = styled.tbody`
  tr:hover {
    cursor: pointer;
    background-color: var(--color-gray50);
  }
  tr {
    td {
      text-align: center;
      padding: 22px 12px;
      :nth-child(1) {
        width: 5%;
        text-align: left;
      }
      :nth-child(2) {
        width: 50%;
        text-align: left;
      }
      :nth-child(3) {
        width: 10%;
      }
      :nth-child(4) {
        width: 10%;
      }
      :nth-child(5) {
        width: 10%;
      }
      :nth-child(6) {
        width: 15%;
      }
    }
  }
`;

const Th = styled.th`
  border-top: 1px solid var(--color-gray100);
  text-align: left;
  padding: 22px 12px;
  font-weight: 500;
  color: var(--color-gray400);
`;

const Td = styled.td`
  border-top: 1px solid var(--color-gray100);
  text-align: left;
  padding: 20px 12px;
  padding-right: 40px;
  color: var(--color-gray600);
  p {
    font-size: 12px;
    margin-top: 10px;
    color: var(--color-gray400);
  }
`;

const Tr = styled.tr`
  &:last-child {
    border-bottom: 1px solid var(--color-gray100);
  }
`;

const ButtonArea = styled.div`
  width: inherit;
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  button {
    width: 170px;
    height: 50px;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .pagination {
    width: 300px;
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: -10px;
  }
`;
