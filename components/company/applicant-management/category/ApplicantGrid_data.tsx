import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseSquare } from 'react-icons/ai';
import styled from 'styled-components';
import Button_1 from '../../../ui/Button_1';

const rejectBtnProps = {
  Icon: AiOutlineCloseSquare,
  name: 'Reject',
  color: '#47a89f',
};

const nextBtnProps = {
  Icon: AiOutlineCheckCircle,
  name: 'Next stage',
  color: '#c25a5b',
};

function ApplicantGrid_data({ name }) {
  return (
    <>
      <Name>{name}</Name>
      <Btns>
        <Button_1 {...rejectBtnProps} />
        <Button_1 {...nextBtnProps} />
      </Btns>
    </>
  );
}

export default ApplicantGrid_data;

const Cell = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;
const Name = styled(Cell)``;
const Btns = styled(Cell)`
  display: flex;
  gap: 5px;
`;
