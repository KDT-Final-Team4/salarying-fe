import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

interface IProps {
  name: string;
  color?: string;
}
export default function Button_2({ name, color }: IProps) {
  let colors = {
    bgColor: 'a',
    spanColor: 'a',
    hoverColor: 'a',
  };
  switch (color) {
    case 'orange':
      colors.bgColor = 'var(--color-orange100)';
      colors.spanColor = 'var(--color-orange300)';
      colors.hoverColor = 'var(--color-orange400)';
      break;
    default:
      colors.bgColor = 'var(--color-orange100)';
      colors.spanColor = 'var(--color-orange300)';
      colors.hoverColor = 'var(--color-orange400)';
      break;
  }
  return (
    <Btn bgColor={colors.bgColor} spanColor={colors.spanColor} hoverColor={colors.hoverColor}>
      <span>{name}</span>
    </Btn>
  );
}
interface btnProps {
  bgColor: string;
  spanColor: string;
  hoverColor: string;
}
const Btn = styled.button<btnProps>`
  padding: 5px 13px;
  background-color: ${(props) => props.bgColor};
  border: none;
  /* border: 1px solid var(--color-gray300); */
  color: ${(props) => props.spanColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    font-weight: 700;
    color: ${(props) => props.hoverColor};
  }
  &:hover {
    span {
      color: var(--color-orange400);
    }
  }
`;
