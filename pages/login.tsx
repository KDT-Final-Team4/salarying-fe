import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onValid = () => {};
  return (
    <Wrapper>
      <Title>HiredPro</Title>
      <LoginForm onSubmit={handleSubmit(onValid)}>
        <InputDiv>
          <SubTitle>ID</SubTitle>
          <TextInput type='text' {...register('id')} />
        </InputDiv>
        <InputDiv>
          <SubTitle>Password</SubTitle>
          <TextInput type='text' {...register('password')} />
          <AiOutlineEyeInvisible />
        </InputDiv>
        <SubmitPanel>
          <div>
            <RememberId>
              <input type='checkbox' id='rememberId' />
              <label htmlFor='rememberId'>아이디 기억하기</label>
            </RememberId>
            <span>패스워드 찾기</span>
          </div>
          <button>Login</button>
        </SubmitPanel>
      </LoginForm>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 64px;
  color: var(--color-blue600);
  margin: 100px 0;
`;
const LoginForm = styled.form`
  width: 422px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  & > svg {
    position: absolute;
    right: 15px;
    cursor: pointer;
    bottom: 15px;
    font-size: 20px;
  }
`;
const SubTitle = styled.h3`
  font-weight: 600;
  line-height: 100%;
  color: #2f3d4c;
`;
const SubmitPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 14px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #1f2832;

      text-decoration: underline;
    }
  }
  button {
    border: 1px solid var(--color-gray300);
    background-color: var(--color-blue600);
    color: white;
    width: 100%;
    height: 43px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
`;
const RememberId = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
const TextInput = styled.input`
  border: 1px solid var(--color-gray300);
  width: 100%;
  height: 46px;
  border-radius: 8px;
  padding: 16px;
`;
