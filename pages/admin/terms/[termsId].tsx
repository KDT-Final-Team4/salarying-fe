import React, { Children, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

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
    title: "서비스 이용 약관",
    id: "service",
    href: "service",
    status: "공개",
    content:
      "모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.국회는 의장 1인과 부의장 2인을 선출한다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.",
    writer: "우지수",
    date: 221010,
  },
  {
    title: "개인 정보 처리 방침",
    id: "privacy",
    href: "privacy",
    status: "공개",
    content: "dd",
    writer: "황이삭",
    date: 221010,
  },
  {
    title: "제3자 정보 제공",
    id: "information",
    href: "information",
    status: "비공개",
    content: "dd",
    writer: "우지수",
    date: 221010,
  },
  {
    title: "개인정보 마케팅 이용",
    id: "marketing",
    href: "marketing",
    status: "비공개",
    content: "dd",
    writer: "우지수",
    date: 221010,
  },
];

export default function TermsId() {
  const router = useRouter();
  const { termsId } = router.query;

  console.log(termsId);

  return (
    <Container>
      <Title>
        <Link href={`/admin/terms/service`}>
          <h1>약관별 관리</h1>
        </Link>
      </Title>
      <Inner>
        <Nav>
          {list.map((item) => (
            <Link
              href={`${item.id}`}
              className={termsId === item.id ? "active" : null}
            >
              <li id={item.id}>{item.title}</li>
            </Link>
          ))}
        </Nav>
        <List></List>
        <button>수정하기</button>
        <button>삭제하기</button>
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

const Title = styled.section`
  width: 100%;
  padding: 0 50px 0 50px;
  box-sizing: border-box;
  h1 {
    color: var(--color-primary);
    font-size: 24px;
    font-weight: 700;
    padding: 50px 0px 20px 0px;
    margin-bottom: 30px;
    border-bottom: 2px solid var(--color-lightgray);
  }
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
    border-radius: 50px;
    padding: 20px 0;
    margin: 0 20px;
    background-color: var(--color-lightgray);
    color: var(--color-primary);
    :hover {
      background-color: var(--color-point);
      transition: 0.3s;
      font-weight: 700;
    }
    &.active {
      background-color: var(--color-point);
      transition: 0.3s;
      font-weight: 700;
    }
  }
`;

const List = styled.div``;
