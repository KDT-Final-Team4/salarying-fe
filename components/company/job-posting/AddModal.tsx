import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Toggle from 'react-toggle';

export default function AddModal({ setOpenModal }: any) {
  const router = useRouter();
  const [document, setDocument] = useState(false);
  const [firstRound, setFirstRound] = useState(false);
  const [secondRound, setSecondRound] = useState(false);
  const [finalRound, setFinalRound] = useState(false);
  const { register, handleSubmit, getValues } = useForm();
  const onValid = () => {
    const payload = Object.assign(getValues(), { document, firstRound, secondRound, finalRound });
    console.log(payload);
  };

  const onCancel = (event) => {
    console.log('cancel 클릭');
    event.preventDefault();
    setOpenModal(false);
  };
  return (
    <Wrapper>
      <Modal>
        <H1>공고 추가하기 </H1>
        <Form onSubmit={handleSubmit(onValid)}>
          <InputDiv>
            <SubTitle>공고명</SubTitle>
            <TextInput type="text" {...register('title')} placeholder="공고명" />
          </InputDiv>
          <InputDiv>
            <SubTitle>Task</SubTitle>
            <TextInput type={'text'} {...register('task')} placeholder="Task" />
          </InputDiv>
          <ToggleDiv>
            <Toggle id="document" name="document" defaultChecked={document} onChange={() => setDocument((prev) => !prev)} />
            <label htmlFor="document">서류전형 토글</label>
          </ToggleDiv>
          <ToggleDiv>
            <Toggle id="firstRound" name="firstRound" defaultChecked={firstRound} onChange={() => setFirstRound((prev) => !prev)} />
            <label htmlFor="document">1차 전형</label>
          </ToggleDiv>
          <ToggleDiv>
            <Toggle id="secondRound" name="secondRound" defaultChecked={secondRound} onChange={() => setSecondRound((prev) => !prev)} />
            <label htmlFor="secondRound">2차 전형</label>
          </ToggleDiv>
          <ToggleDiv>
            <Toggle id="finalRound" name="finalRound" defaultChecked={finalRound} onChange={() => setFinalRound((prev) => !prev)} />
            <label htmlFor="finalRound">3차 전형</label>
          </ToggleDiv>
          <SubmitBtn>Submit</SubmitBtn>
          <CancelBtn onClick={onCancel}>Cancel</CancelBtn>
        </Form>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: auto;
  height: fit-content;
  padding: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid var(--color-gray200);
  gap: 20px;
  div {
    display: flex;
    align-items: center;
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

const Form = styled.form`
  width: 422px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
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
  margin-top: 50px;
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
