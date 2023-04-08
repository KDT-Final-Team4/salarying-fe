import React, { Children, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Content from '@/components/ui/Content';
import { useMutation, useQuery } from '@tanstack/react-query';
import useCookies from '@/libs/hooks/useCookies';
import api from '@/libs/client/axiosClient';
import Button_2 from '@/components/ui/Button_2';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface IValue {
  id: string | string[];
  version: string;
  title: string;
  content: string;
}

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

  const onValid = async () => {
    console.log('onValid');
    try {
      const value: IPutTerms = { ...getValues(), id: Number(termsId) };
      console.log('value : ', value);
      const res = await api.putTerms(accessToken, value);
      if (res.stateCode === 200) {
        router.push(`/admin/terms/detail/${termsId}`);
        toast.success('약관 수정이 완료되었습니다.');
        return res;
      }
    } catch (err) {
      console.log(err);
      toast.error('약관 수정 실패');
    }
  };
  const inValid = async (e) => {
    console.log(e);
    errors.version ? toast.error('버전 입력이 올바르지 않습니다.') : console.log(e);
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
            />
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
            ></textarea>
          </div>
        </Write>
        <BtnWrapper>
          <Button_2 name={'수정 완료'} color={'point'} />
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
