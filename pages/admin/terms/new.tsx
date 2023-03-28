import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {};
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

const New = (props: Props) => {
  const router = useRouter();
  const [select, setSelect] = useState(0);
  const handleSelect = (idx: number) => {
    setSelect(idx);
    console.log(idx);
  };
  return (
    <Container>
      <Content>
        <h1>약관 등록</h1>
      </Content>
      <Inner>
        <Info>
          <Category>
            <p>약관 종류</p>
            <div className="wrap">
              {list.map((item, idx) => (
                <div
                  key={idx}
                  className={idx === select ? "select" : null}
                  onClick={() => handleSelect(idx)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </Category>
          <Title>
            <p>약관 제목</p>
            <input type="text" placeholder="제목을 입력하세요." />
          </Title>
          <Version>
            <p>약관 버전</p>
            <input
              type="text"
              placeholder="버전을 입력하세요. 숫자와 '.'으로만 표기 가능합니다."
            />
          </Version>
        </Info>
        <Write>
          <p>약관 내용</p>
          <div>
            <textarea name="textCount" id="textCount"></textarea>
          </div>
        </Write>
        <div>
          <button className="submit">등록</button>
          <button className="cancel" onClick={() => router.push("-1")}>
            취소
          </button>
        </div>
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: flex-start;
`;

const Content = styled.section`
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
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  button {
    width: 170px;
    height: 50px;
    background-color: transparent;
    margin: 20px 10px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    &.cancel {
      :hover {
        font-weight: 700;
        box-shadow: 3px 5px 3px var(--color-lightgray);
      }
    }
    &.submit {
      background-color: var(--color-point);
      :hover {
        box-shadow: 10px 10px 10px var(--color-lightgray);
        font-weight: 700;
      }
    }
  }
`;

const Info = styled.div`
  width: 100%;
  border: 1px solid var(--color-gray400);
  border-radius: 30px;
  background-color: var(--color-lightgray);
  padding: 30px;
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px 30px;
  align-items: center;
  p {
    min-width: 100px;
    padding-right: 10px;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-primary);
    border-right: 2px solid var(--color-gray400);
  }
  .wrap {
    display: flex;
    width: 100%;
    padding: 5px 40px;
    div {
      min-width: 180px;
      user-select: none;
      cursor: pointer;
      color: var(--color-gray500);
      border: 1px solid var(--color-gray300);
      border-radius: 40px;
      padding: 15px 20px;
      margin: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-gray200);
      :hover {
        color: var(--color-primary);
        font-weight: 700;
        border: 1px solid transparent;
        background-color: var(--color-point);
        transition: 0.2s;
        border: 1px solid var(--color-primary);
      }
      &.select {
        color: var(--color-primary);
        font-weight: 700;
        border: 1px solid transparent;
        background-color: var(--color-point);
        transition: 0.2s;
        border: 1px solid var(--color-primary);
      }
    }
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px 30px;
  align-items: center;
  p {
    min-width: 100px;
    padding-right: 10px;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-primary);
    border-right: 2px solid var(--color-gray400);
  }
  input {
    padding: 20px 10px;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--color-gray400);
    box-sizing: border-box;
    font-size: 16px;
    width: 70%;
    margin: 0 60px;
    background-color: transparent;
  }
`;

const Version = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px 30px;
  align-items: center;
  p {
    min-width: 100px;
    padding-right: 10px;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-primary);
    border-right: 2px solid var(--color-gray400);
  }
  input {
    padding: 20px 10px;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--color-gray400);
    box-sizing: border-box;
    font-size: 16px;
    width: 70%;
    margin: 0 60px;
    background-color: transparent;
  }
`;

const Write = styled.div`
  width: 100%;
  border: 1px solid var(--color-gray400);
  border-radius: 30px;
  background-color: var(--color-lightgray);
  padding: 30px;
  margin-top: 20px;
  p {
    min-width: 100px;
    padding: 10px 0 20px 10px;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-primary);
  }
  textarea {
    font-size: 16px;
    width: 100%;
    height: 500px;
    padding: 30px;
    border: none;
    outline: none;
    border-radius: 20px;
    resize: none;
  }
`;
export default New;
