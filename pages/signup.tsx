import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import HeadLayout from '@/components/layout/HeadLayout';
import Link from 'next/link';

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {};
  return (
    <Wrapper>
      <LoginSection>
        <Inner>
          <Title>Create new account</Title>
          <TitleDescription>Welcome back! Please enter your details</TitleDescription>

          <LoginForm onSubmit={handleSubmit(onValid)}>
            <InputDiv>
              <SubTitle>Email</SubTitle>
              <TextInput type="text" {...register('email')} placeholder="Enter your email" />
            </InputDiv>
            <InputDiv>
              <SubTitle>Password</SubTitle>
              <TextInput type="text" {...register('password')} placeholder="Enter your password" />
            </InputDiv>
            <InputDiv>
              <SubTitle>Password2</SubTitle>
              <TextInput type="text" {...register('password2')} placeholder="Enter your password" />
            </InputDiv>
            <InputDiv>
              <SubTitle>Name</SubTitle>
              <TextInput type="text" {...register('name')} placeholder="Enter your name" />
            </InputDiv>
            <InputDiv>
              <SubTitle>Company Name</SubTitle>
              <TextInput type="text" {...register('companyName')} placeholder="Enter your company name" />
            </InputDiv>

            <InputDiv>
              <SubTitle>Company phone number</SubTitle>
              <TextInput type="text" {...register('companyPhoneNumber')} placeholder="Enter your company phone number" />
            </InputDiv>
            <InputDiv>
              <SubTitle>Position</SubTitle>
              <TextInput type="text" {...register('position')} placeholder="Enter your position" />
            </InputDiv>
            <SubmitPanel>
              <LoginButton>Create Account</LoginButton>
            </SubmitPanel>
            <AccountExists>
              Already have an account? <Link href="/login"> Sign in</Link>
            </AccountExists>
          </LoginForm>
        </Inner>
      </LoginSection>
      <KVSection></KVSection>
    </Wrapper>
  );
}

SignUp.layout = (page) => page;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  color: var(--color-gray600);
`;

const LoginSection = styled.section`
  border: 1px solid red;
  /* overflow: scroll; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Inner = styled.div``;

const KVSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-indigo100);
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: var(--color-gray800);
  margin-bottom: 10px;
  img {
    width: 50%;
  }
`;
const TitleDescription = styled.span`
  color: var(--color-gray400);
  display: flex-inline;
  font-size: 14px;
`;
const LoginForm = styled.form`
  width: 422px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
const InputDiv = styled.div`
  width: 100%;
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
  font-size: 12px;
  color: var(--color-gray700);
`;
const SubmitPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    span {
      color: #1f2832;
      text-decoration: underline;
    }
  }
`;
const Button = styled.button`
  border: none;
  color: var(--color-primary);
  width: 100%;
  height: 43px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
`;
const LoginButton = styled(Button)`
  background-color: var(--color-point);
  font-weight: 700;
  color: var(--color-gray700);
  &:hover {
    filter: brightness(1.05);
  }
`;

const TextInput = styled.input`
  border: 1px solid var(--color-gray300);
  width: 100%;
  height: 46px;
  border-radius: 8px;
  padding: 10px;
  padding-right: 35px;
  color: var(--color-gray600);
  &:focus {
    outline: 1px solid var(--color-point);
  }
`;

const AccountExists = styled.span`
  display: flex;
  justify-content: center;
  color: var(--color-gray400);
  font-weight: 300;
  a {
    margin-left: 10px;
    color: var(--color-gray500);
    font-weight: 500;
    &:hover {
      color: var(--color-gray700);
    }
  }
`;
