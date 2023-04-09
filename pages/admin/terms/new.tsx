import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Content from '@/components/ui/Content';
import SelectCategory from '@/components/ui/SelectCategory';
import { useForm } from 'react-hook-form';
import Button_2 from '@/components/ui/Button_2';
import Link from 'next/link';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { toast } from 'react-toastify';

interface IList {
  category: string;
  categoryId: string;
}

const list: IList[] = [
  {
    category: '서비스 이용약관',
    categoryId: 'service',
  },
  {
    category: '개인정보 처리방침',
    categoryId: 'privacy',
  },
  {
    category: '제3자 정보제공',
    categoryId: 'information',
  },
  {
    category: '개인정보 마케팅 이용',
    categoryId: 'marketing',
  },
];

export default function New() {
  const router = useRouter();
  const [select, setSelect] = useState();
  const { accessToken } = useCookies();

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ITermsWithType>();

  useEffect(() => {
    setValue('type', select);
  }, [select, setValue]);

  const onValid = async () => {
    console.log('onValid');
    try {
      const res = await api.postTerms(accessToken, getValues());
      if (res.stateCode === 200) {
        router.push(`/admin/terms/${getValues().type}`);
        toast.success('약관 등록이 완료되었습니다. 등록한 약관을 사용하시려면 공개 상태를 변경해 주세요.');
      }
      return res;
    } catch (err) {
      toast.error(err?.errorMessage);
    }
  };

  const inValid = async (a) => {
    console.log(a);
    console.log('inValid');
    errors.version ? toast.error('숫자와 .을 사용하여 버전을 입력해 주세요.') : null;
  };

  return (
    <Content title="약관 등록">
      <Inner onSubmit={handleSubmit(onValid, inValid)}>
        <Info>
          <Category>
            <p>약관 종류</p>
            <SelectCategory
              width={'100%'}
              categories={list}
              currentValue={select}
              setCurrentValue={setSelect}
              {...register('type', {
                required: true,
              })}
            />
          </Category>
          <Title>
            <p>약관 제목</p>
            <input
              type="text"
              placeholder="제목을 입력하세요."
              {...register('title', {
                required: true,
              })}
            />
          </Title>
          <Version>
            <p>약관 버전</p>
            <input
              type="text"
              placeholder="버전을 입력하세요. 숫자와 .으로만 표기 가능합니다."
              {...register('version', {
                required: true,
                pattern: /^(?:(?:[0-9]?[0-9][0-9]?)\.){1,2}(?:[0-9]?[0-9][0-9]?)$/,
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
        <ButtonArea>
          <div onClick={() => router.back()}>
            <Button_2
              name={'취소'}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
          <div>
            <Button_2 name={'등록'} color={'point'} />
          </div>
        </ButtonArea>
      </Inner>
    </Content>
  );
}

const Inner = styled.form`
  width: inherit;
  margin: 0;
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
  position: relative;
  p {
    min-width: 100px;
    padding-right: 10px;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-primary);
    border-right: 2px solid var(--color-gray400);
  }
  input {
    display: block;
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

const ButtonArea = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  button {
    width: 170px;
    height: 50px;
    margin: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  div {
    display: flex;
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
