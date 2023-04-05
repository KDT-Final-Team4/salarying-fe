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

interface List {
  title: string;
  id: string;
  href: string;
  status: string;
  content: string;
  writer: string;
  date: number;
}

type IObject = {
  status: '공개' | '비공개';
  title: string;
  version: string;
  name: string;
  id: number;
};

const list: List[] = [
  {
    title: '서비스 이용 약관',
    id: 'service',
    href: 'service',
    status: '공개',
    content:
      '모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.국회는 의장 1인과 부의장 2인을 선출한다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.',
    writer: '우지수',
    date: 221010,
  },
  {
    title: '개인 정보 처리 방침',
    id: 'privacy',
    href: 'privacy',
    status: '공개',
    content: 'dd',
    writer: '황이삭',
    date: 221010,
  },
  {
    title: '제3자 정보 제공',
    id: 'information',
    href: 'information',
    status: '비공개',
    content: 'dd',
    writer: '우지수',
    date: 221010,
  },
  {
    title: '개인정보 마케팅 이용',
    id: 'marketing',
    href: 'marketing',
    status: '비공개',
    content: 'dd',
    writer: '우지수',
    date: 221010,
  },
];

interface StyledProps {
  toggle: boolean;
}

type TermsId = 'service' | 'privacy' | 'information' | 'marketing';
const heads = ['약관제목', '약관 버전', '약관 작성자', '게시 상태', '미리보기'];

export default function TermsId() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<number>(1);
  const [terms, setTerms] = useState([]);
  const { accessToken } = useCookies();
  const { termsId } = router.query as { termsId: TermsId };

  console.log('termsId', termsId);
  console.log('terms', terms);

  useEffect(() => {
    const getTermList = async () => {
      if (termsId) {
        const res = await api.getTerms(accessToken, termsId);
        setTerms(res?.data);
        console.log(res);
        return res;
      } else console.log('약관 타입 없음');
    };
    getTermList();
  }, [termsId]);

  // 페이지네이션
  let pageGroups = usePagination(terms);
  let pageMembersList = pageGroups[activePage - 1];
  console.log(pageMembersList);

  return (
    <Content title="약관별 관리">
      <Nav>
        {list.map((item) => (
          <Link key={item.id} href={`${item.id}`} className={termsId === item.id ? 'active' : null}>
            <li id={item.id}>{item.title}</li>
          </Link>
        ))}
      </Nav>
      <Wrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <input type="checkbox" />
              </Th>
              <Th>약관 제목</Th>
              <Th>약관 버전</Th>
              <Th>약관 작성자</Th>
              <Th>상태</Th>
              <Th>미리보기</Th>
            </Tr>
          </Thead>
          <Tbody>
            {terms.map((term, index) => (
              <Tr key={index}>
                <Td>
                  <input type="checkbox" />
                </Td>
                <Td>{term.title}</Td>
                <Td>{term.version}</Td>
                <Td>{term.name}</Td>
                <Td>{term.status}</Td>
                <Td>
                  <Button_Send text={'view'} height={null} width={100} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <div className="pagination">
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={pageGroups.length} />
        </div>
      </Wrapper>
    </Content>
  );
}

const Nav = styled.ul`
  width: 100%;
  display: flex;
  color: var(--color-primary);
  justify-content: space-between;
  margin-bottom: 30px;
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
  flex-direction: column;
  padding: 3rem;
  margin: 0 auto;
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
      border-top: 1px solid var(--color-gray100);
      text-align: left;
      padding: 22px 12px;
      font-weight: 500;
      font-size: 14px;
      color: var(--color-gray400);
    }
  }
`;
const Tbody = styled.tbody`
  tr:hover {
    background-color: var(--color-gray50);
  }
`;

const Th = styled.th`
  border-top: 1px solid var(--color-gray100);
  text-align: left;
  padding: 22px 12px;
  font-weight: 500;
  color: var(--color-gray400);
  :nth-child(2) {
    width: 40%;
  }
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

const Pages = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;

  margin: 50px 0;
  color: var(--color-gray400);
  li {
    cursor: pointer;
    padding: 5px;
    &.active {
      color: var(--color-gray800);
      background-color: var(--color-point);
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
