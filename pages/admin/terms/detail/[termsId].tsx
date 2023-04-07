import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Content from '@/components/ui/Content';
import useCookies from '@/libs/hooks/useCookies';
import { useQuery } from '@tanstack/react-query';
import api from '@/libs/client/axiosClient';

type Props = {};

const typeName = [
  ['서비스 이용약관', 'service'],
  ['개인 정보 처리 방침', 'privacy'],
  ['제3자 정보 제공', 'information'],
  ['개인정보 마케팅 이용', 'marketing'],
];

export default function TermsIdDetail({}: Props) {
  const router = useRouter();
  const { accessToken } = useCookies();
  const { termsId } = router.query as { termsId: TermsId };
  const { data: termDetail, isLoading } = useQuery({
    queryKey: ['termDetail', termsId],
    queryFn: () => api.getTermsDetail(accessToken, termsId),
  });

  const getTypeName = (type) => {
    const res = typeName.find((item) => item[0] === type);
    return res[1];
  };

  console.log(termDetail?.data);
  return (
    <Content title={'약관 조회'}>
      <div>약관별 관리 &gt; 서비스 이용약관 &gt; 약관 상세보기</div>
      <div>작성자 : {termDetail?.data?.name}</div>
      <Inner>
        <Info>
          <Category>
            <p>약관 종류</p>
            <div className="wrap">
              <div>{termDetail?.data?.type}</div>
            </div>
          </Category>
          <Title>
            <p>약관 제목</p>
            <input type="text" placeholder={termDetail?.data?.title} readOnly />
          </Title>
          <Version>
            <p>약관 버전</p>
            <input type="text" placeholder={termDetail?.data?.version} readOnly />
          </Version>
        </Info>
        <Write>
          <p>약관 내용</p>
          <div>
            <textarea readOnly>{termDetail?.data?.content}</textarea>
          </div>
        </Write>
        <div>
          <button className="submit">수정</button>
          <button className="cancel" onClick={() => router.push(`/admin/terms/${getTypeName(termDetail?.data?.type)}`)}>
            목록으로
          </button>
        </div>
      </Inner>
    </Content>
  );
}

const Inner = styled.div`
  width: inherit;
  margin: 0;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  button {
    width: 170px;
    height: 50px;
    background-color: transparent;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
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

const Info = styled.form`
  width: 100%;
  border-radius: 10px;
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
    padding: 5px 40px;
    div {
      width: 200px;
      user-select: none;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-primary);
      font-weight: 700;
      background-color: var(--color-point);
      padding: 15px 20px;
      margin: 5px 20px;
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
    width: 100%;
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
    width: 100%;
  }
`;

const Write = styled.div`
  width: 100%;
  border-radius: 10px;
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
    border-radius: 10px;
    resize: none;
  }
`;
