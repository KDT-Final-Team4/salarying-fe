import React, { Children, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Content from '@/components/ui/Content';
import { useMutation, useQuery } from '@tanstack/react-query';
import useCookies from '@/libs/hooks/useCookies';
import api from '@/libs/client/axiosClient';
import Button_2 from '@/components/ui/Button_2';
import { useForm } from 'react-hook-form';

interface IValue {
  id: string | string[];
  version: string;
  title: string;
  content: string;
}

interface List {
  category: string;
  categoryId: string;
  href?: string;
  status?: string;
  content?: string;
  writer?: string;
  date?: number;
}

const list: List[] = [
  {
    category: '서비스 이용 약관',
    categoryId: 'service',
    href: 'service',
    status: '공개',
    content:
      '모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.국회는 의장 1인과 부의장 2인을 선출한다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.',
    writer: '우지수',
    date: 221010,
  },
  {
    category: '개인 정보 처리 방침',
    categoryId: 'privacy',
    href: 'privacy',
    status: '공개',
    content: 'dd',
    writer: '황이삭',
    date: 221010,
  },
  {
    category: '제3자 정보 제공',
    categoryId: 'information',
    href: 'information',
    status: '비공개',
    content: 'dd',
    writer: '우지수',
    date: 221010,
  },
  {
    category: '개인정보 마케팅 이용',
    categoryId: 'marketing',
    href: 'marketing',
    status: '비공개',
    content: 'dd',
    writer: '우지수',
    date: 221010,
  },
];

const typeName = [
  ['서비스 이용약관', 'service'],
  ['개인 정보 처리 방침', 'privacy'],
  ['제3자 정보 제공', 'information'],
  ['개인정보 마케팅 이용', 'marketing'],
];

export default function TermsIdEdit() {
  const router = useRouter();
  const { termsId } = router.query;
  const { accessToken } = useCookies();
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ITermsWithType>();

  const { data, isLoading } = useQuery(['term', termsId], () => api.getTermsDetail(accessToken, termsId), {
    enabled: !!termsId,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setValue('title', data.data.title), setValue('version', data.data.version), setValue('content', data.data.content);
    },
  });

  const getTypeName = (type) => {
    const res = typeName.find((item) => item[0] === type);
    return res[1];
  };

  const onValid = async () => {
    console.log('onValid');
    try {
      const value: IPutTerms = { ...getValues(), id: Number(termsId) };
      console.log('value : ', value);
      const res = await api.putTerms(accessToken, value);
      if (res.stateCode === 200) {
        router.push(`/admin/terms/${getTypeName(data?.data?.type)}`);
        console.log(res);
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const inValid = async (a) => {
    console.log(a);
    console.log('inValid');
  };
  return (
    <Container>
      <Content title="약관 수정">
        <div></div>
      </Content>
      <Inner onSubmit={handleSubmit(onValid, inValid)}>
        <Info>
          <Category>
            <p>약관 종류</p>
            <div className="wrap">
              <div>{data?.data?.type}</div>
            </div>
          </Category>
          <Title>
            <p>약관 제목</p>
            <input
              type="text"
              {...register('title', {
                required: true,
              })}
              // value={title} onChange={handleTitleChange}
            />
          </Title>
          <Version>
            <p>약관 버전</p>
            <input
              type="text"
              {...register('version', {
                required: true,
                pattern: /^(?:(?:[0-9]?[0-9][0-9]?)\.){2}(?:[0-9]?[0-9][0-9]?)$/,
              })}
              // value={version} onChange={handleVersionChange}
            />
            <Error className={errors.version ? 'show' : 'hide'}>숫자와 .을 사용하여 버전을 입력해 주세요.</Error>
          </Version>
        </Info>
        <Write>
          <p>약관 내용</p>
          <div>
            <textarea
              name="textCount"
              id="textCount"
              {...register('content', {
                required: true,
              })}
              // value={content} onChange={handleContentChange}
            ></textarea>
          </div>
        </Write>
        <BtnWrapper>
          <Button_2 name={'수정 완료'} color={'point'} onClick={() => router.push(`/admin/terms/service`)} />
          <div onClick={() => router.back()}>
            <Button_2
              name={'취소'}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </BtnWrapper>
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

const Inner = styled.form`
  width: 100%;
  margin: 0 50px 0 50px;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Info = styled.div`
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

const BtnWrapper = styled.div`
  width: inherit;
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-end;
  button {
    width: 170px;
    height: 50px;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Error = styled.span`
  position: absolute;
  top: 30px;
  right: 100px;
  &.show {
    opacity: 1;
    font-size: 14px;
    color: var(--color-rose500);
  }
  &.hide {
    opacity: 0;
  }
`;
