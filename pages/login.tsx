import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { useRouter } from 'next/router';
import ax from '@/libs/client/axiosClient';
import useAccessToken from '@/libs/hooks/useAccessToken';
import { toast } from 'react-toastify';
export default function Login() {
  const {
    register,
    formState: { isSubmitting, isValid, errors },
    watch,
    handleSubmit,
    reset,
    getValues,
    setError,
    setValue,
    clearErrors,
    getFieldState,
  } = useForm();
  const [showPW, setShowPW] = useState(false);
  const router = useRouter();
  const { accessToken, saveAccessToken, saveIsAdmin } = useAccessToken();
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const onValid = async () => {};
  const handleTest = async () => {
    const res = await ax.postLogin({
      email: 'test@email.com',
      password: 'test@1234',
    });

    console.log(res);
  };
  return (
    <Wrapper>
      <LoginSection>
        <Inner>
          <Title>
            <img src="/logo.png" />
          </Title>
          <TitleDescription>Welcome back! Please enter your details</TitleDescription>

          <LoginForm onSubmit={handleSubmit(onValid)}>
            <InputDiv>
              <SubTitle>Email</SubTitle>
              <TextInput type="text" {...register('email')} placeholder="Enter your email" />
            </InputDiv>
            <InputDiv>
              <SubTitle>Password</SubTitle>
              <TextInput type={showPW ? 'text' : 'password'} {...register('password')} placeholder="Enter your password" />
              {showPW ? <AiOutlineEyeInvisible onClick={() => setShowPW(false)} /> : <AiOutlineEye onClick={() => setShowPW(true)} />}
            </InputDiv>
            <SubmitPanel>
              <div>
                <RememberId>
                  <input type="checkbox" id="adminLogin" checked={isAdminLogin} onChange={(event) => setIsAdminLogin(event.target.checked)} />
                  <FakeCheckbox htmlFor="adminLogin">
                    <BsCheckLg />
                  </FakeCheckbox>
                  <label htmlFor="adminLogin">관리자 로그인</label>
                </RememberId>
                <span>패스워드 찾기</span>
              </div>
              <LoginButton>Login</LoginButton>
              <SignupButton onClick={() => router.push('/signup')}>Sign up</SignupButton>
            </SubmitPanel>
            <span onClick={handleTest}>TEst</span>
          </LoginForm>
        </Inner>
      </LoginSection>
      <KVSection></KVSection>
    </Wrapper>
  );
}

Login.layout = (page) => page;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  color: var(--color-gray600);
  padding: 0 10px;
`;

const LoginSection = styled.section`
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
  font-weight: 400;
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
`;
const LoginForm = styled.form`
  /* width: 422px; */

  max-width: 422px;
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
  font-size: 14px;
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
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
`;
const LoginButton = styled(Button)`
  background-color: var(--color-point);

  color: var(--color-gray700);
  &:hover {
    filter: brightness(1.05);
  }
`;
const SignupButton = styled(Button)`
  background-color: #fff;
  border: 1px solid var(--color-gray300);
  font-weight: 400;
  color: var(--color-gray500);

  &:hover {
    filter: brightness(0.95);
  }
`;
const RememberId = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  label {
    padding-top: 1px;
  }
  input[type='checkbox'] {
    display: none;

    & + label {
      width: 15px;
      height: 15px;
      border-radius: 3px;
      border: 1.5px solid var(--color-green600);
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        display: none;
      }
    }
    &:checked + label {
      background-color: var(--color-green600);
      position: relative;
      svg {
        color: white;
        display: flex;
      }
    }
  }
`;

const FakeCheckbox = styled.label``;

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
