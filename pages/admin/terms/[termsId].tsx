import React, { Children, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Content from '@/components/ui/Content';
import { useQuery } from '@tanstack/react-query';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { displayValue } from '@tanstack/react-query-devtools/build/lib/utils';

interface List {
  title: string;
  id: string;
  href: string;
  status: string;
  content: string;
  writer: string;
  date: number;
}

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
const headerArray = ['약관제목', '약관 버전', '약관 작성자', '게시 중'];

export default function TermsId() {
  const router = useRouter();
  const [terms, setTerms] = useState([]);
  // const token = useCookies();
  // const { data: terms, isLoading } = useQuery(['terms'], () => {
  //   api.getTerms(token, 'service');
  // });
  const token = process.env.NEXT_PUBLIC_TOKEN_JISOO;
  const { termsId } = router.query as { termsId: TermsId };

  useEffect(() => {
    const getTermList = async () => {
      if (termsId) {
        const res = await api.getTerms(token, termsId);
        setTerms(res.data);
        console.log(res);
        return res;
      } else console.log('약관 타입 없음');
    };
    getTermList();
  }, [termsId]);

  console.log('termsId', termsId);
  console.log('terms', terms);

  return (
    <Container>
      <Content title="약관 등록">
        <div></div>
      </Content>
      <Inner>
        <Nav>
          {list.map((item) => (
            <Link key={item.id} href={`${item.id}`} className={termsId === item.id ? 'active' : null}>
              <li id={item.id}>{item.title}</li>
            </Link>
          ))}
        </Nav>
        <List>
          <TableTitle>
            <input type="checkbox" />
            <p>약관 제목</p>
            <p>약관 버전</p>
            <p>약관 작성자</p>
            <p>약관 게시 상태</p>
            <p>미리 보기</p>
          </TableTitle>
          {terms.map((term) => (
            <TableBody key={term.id}>
              <input type="checkbox" />
              <p>{term.title}</p>
              <p>{term.version}</p>
              <p>{term.name}</p>
              <p>{term.status}</p>
              <button>view</button>
            </TableBody>
          ))}
        </List>
        <ButtonArea>
          <Link href="edit/termsId">
            <button>수정하기</button>
          </Link>
          <button>삭제하기</button>
          <Link href="new">
            <button className="submit">등록하기</button>
          </Link>
        </ButtonArea>
      </Inner>
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: flex-start;
`;

const Inner = styled.div`
  width: 100%;
  margin: 0 50px;
`;

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

const List = styled.div`
  width: inherit;
  padding: 40px 20px 40px 20px;
  box-sizing: border-box;
  height: 600px;
`;

const TableTitle = styled.div`
  display: flex;
  width: inherit;
  padding: 20px 40px 40px 40px;
  justify-content: flex-start;
  font-weight: 700;
  color: var(--color-gray600);
  border-radius: 10px;
  p {
    padding: 10px 0;
    width: 20%;
    display: flex;
    justify-content: center;
    :nth-child(2) {
      padding-left: 30px;
      width: 40%;
      justify-content: flex-start;
    }
    :nth-child(5) {
      margin-right: 20px;
    }
    :nth-child(6) {
      width: 10%;
      box-sizing: border-box;
      padding: 10px 20px;
    }
  }
`;
const TableBody = styled.div`
  width: inherit;
  display: flex;
  justify-content: flex-start;
  padding: 20px 40px;
  border-bottom: 1px solid var(--color-gray300);
  gap: 10px;
  color: var(--color-gray600);
  p {
    padding: 10px 0;
    width: 20%;
    display: flex;
    justify-content: center;
    :nth-child(2) {
      padding-left: 30px;
      width: 40%;
      justify-content: flex-start;
    }
    :nth-child(5) {
      margin-right: 20px;
    }
  }
  button {
    width: 10%;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 500;
    color: var(--color-primary);
    background-color: var(--color-point);
    cursor: pointer;
    :hover {
      color: var(--color-point);
      background-color: var(--color-primary);
      transition: 0.2s;
    }
  }
`;

const ButtonArea = styled.div`
  width: inherit;
  margin-bottom: 100px;
  button {
    width: 170px;
    height: 50px;
    background-color: transparent;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid var(--color-gray300);
    &.cancel {
      :hover {
        font-weight: 700;
        box-shadow: 3px 5px 3px var(--color-lightgray);
      }
    }
    &.submit {
      background-color: var(--color-point);
      border: none;
      :hover {
        box-shadow: 10px 10px 10px var(--color-lightgray);
        font-weight: 700;
      }
    }
  }
`;
