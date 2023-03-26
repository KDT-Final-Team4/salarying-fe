import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseSquare } from 'react-icons/ai';
import styled from 'styled-components';

function ApplicantGrid_data({ name }) {
  return (
    <>
      <Name>{name}</Name>
      <Btns>
        <button>
          <AiOutlineCloseSquare color='#c25a5b' />
          Reject
        </button>
        <button>
          <AiOutlineCheckCircle color='#47a89f' />
          Next stage
        </button>
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

  button {
    background-color: transparent;
    border: 1px solid var(--color-gray300);
    color: var(--color-gray600);
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
