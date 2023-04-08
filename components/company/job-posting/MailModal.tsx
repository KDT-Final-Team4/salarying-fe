import Button_1 from '@/components/ui/Button_1';
import Button_2 from '@/components/ui/Button_2';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import { access } from 'fs';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styled from 'styled-components';

type Props = {};
type TEmailInput = {
  recruitingId: number; // given
  applicantEmail: string; // given
  title: string;
  content: string;
  progress: '1차전형' | '2차전형' | '최종전형'; // given
  status: '합격' | '불합격'; //given
};
export default function MailModal({ onCancel, recruitingId, applicantEmail, status, progress, refetch }: any) {
  // const recruitingId = 6;
  const { accessToken, isAdmin } = useCookies();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [newStatus, setNewStatus] = useState(status);

  const toggleStatus = (event) => {
    event.preventDefault();
    if (newStatus === '합격') {
      setNewStatus('불합격');
    } else {
      setNewStatus('합격');
    }
  };

  const onValid = async () => {
    if (!getValues().title) {
      toast.error('메일 제목을 넣어주세요');
      return;
    }
    if (!getValues().content) {
      toast.error('메일 내용을 넣어주세요');
      return;
    }
    const payload: any = Object.assign(getValues(), {
      recruitingId,
      applicantEmail,
      progress,
      status,
    });

    // 메일 보내기

    // 합격여부 수정
    api
      .putApplicants(accessToken, {
        recruitingId,
        email: applicantEmail,
        progress,
        status: newStatus,
      })
      .then(() => refetch());

    onCancel();
    toast.promise(
      api.postApplicantsMessage(accessToken, [payload]).catch((e) => toast.error(e.message)),
      {
        pending: '메일을 보내는 중입니다.',
        success: '메일보내기 성공',
        error: '메일 보내는데 실패하였습니다.',
      },
    );
  };

  return (
    <Wrapper>
      <Modal>
        <H1>이메일 보내기({applicantEmail}) </H1>
        <Form onSubmit={handleSubmit(onValid)}>
          <InputDiv>
            <SubTitle>메일 제목</SubTitle>
            <TextInput type="text" {...register('title')} placeholder="메일 제목" />
          </InputDiv>
          <InputDiv>
            <SubTitle>메일 내용</SubTitle>
            <TextareaInput type="textarea" {...register('content')} placeholder="메일 내용" />
          </InputDiv>
          <InputDiv_Status>
            <SubTitle>Status</SubTitle>
            <StatusBtn name={newStatus} color={newStatus === '합격' ? 'indigo' : 'rose'} onClick={(event) => toggleStatus(event)} />
          </InputDiv_Status>
          <Btns>
            <SubmitBtn>Send</SubmitBtn>
            <CancelBtn onClick={onCancel}>Cancel</CancelBtn>
          </Btns>
        </Form>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  display: flex;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: auto;
  /* height: fit-content; */
  /* height: 100px; */
  padding: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid var(--color-gray200);

  div {
    display: flex;
    /* align-items: center; */
    h3 {
      width: 100px;
      flex-shrink: 0;
    }
  }
`;
const H1 = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: var(--color-gray700);
`;
const H2 = styled.h2``;

const Form = styled.form`
  width: 422px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  position: relative;
`;
const ToggleDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  position: relative;
`;
const SubTitle = styled.h3`
  font-weight: 600;
  line-height: 100%;
  font-size: 16px;
  color: var(--color-gray600);
  align-self: flex-start;
  /* border: 1px solid red; */
`;
const TextInput = styled.input`
  border: 1px solid var(--color-gray200);
  width: 100%;
  height: 46px;
  border-radius: 8px;
  padding: 10px;
  padding-right: 35px;
  font-size: 16px;
  color: var(--color-gray600);
  &:focus {
    outline: 1px solid var(--color-point);
  }
`;
const TextareaInput = styled.input`
  border: 1px solid var(--color-gray200);
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  padding-right: 35px;
  font-size: 16px;
  color: var(--color-gray600);
  &:focus {
    outline: 1px solid var(--color-point);
  }
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
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
const SubmitBtn = styled(Button)`
  background-color: var(--color-point);
  font-weight: 700;
  color: var(--color-gray700);
  &:hover {
    filter: brightness(1.05);
  }
`;

const CancelBtn = styled(Button)`
  background-color: var(--color-gray50);

  font-weight: 700;
  color: var(--color-gray700);
  border: 1px solid var(--color-gray200);
  &:hover {
    filter: brightness(0.95);
  }
`;

const InputDiv_Status = styled(InputDiv)`
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */

  align-items: center;
`;

const StatusBtn = styled(Button_2)`
  width: 100px;
  height: 30px;
  cursor: pointer;
`;
