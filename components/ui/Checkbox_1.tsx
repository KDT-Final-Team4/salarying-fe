import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';

type Props = {
  id: string;
};

export default function Checkbox_1({ id, ...others }: Props) {
  return (
    <>
      <Checkbox type="checkbox" id={id} {...others} />
      <FakeCheckbox htmlFor={id}>
        <BsCheckLg />
      </FakeCheckbox>
    </>
  );
}

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    border: 1.5px solid var(--color-green700);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
    }
  }
  &:checked + label {
    background-color: var(--color-point);
    position: relative;
    border: 1.5px solid var(--color-green700);
    svg {
      color: var(--color-green700);
      display: flex;
    }
  }
  &:hover + label {
    filter: brightness(0.95);
  }
`;
const FakeCheckbox = styled.label``;
