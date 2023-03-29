import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

interface IProps {
  name: string;
  Icon?: IconType;
  color?: string;
}
export default function Button_Point({ name, Icon, color }: IProps) {
  const iconColor = color && color[0] === '#' ? color : `var(${color})`;

  return (
    <Btn>
      {Icon && <Icon color={iconColor} />}
      <button>{name}</button>
    </Btn>
  );
}

const Btn = styled.div`
  button {
    background-color: transparent;
    border: 1px solid transparent;
    width: 100px;
    height: 100px;
  }
  width: 180px;
  height: 50px;
  padding: 3px 10px;
  background-color: var(--color-gray);
  border: 1px solid var(--color-primary);
  color: var(--color-gray700);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 500;
  :hover {
    border: 1px solid var(--color-point);
    background-color: var(--color-point);
  }
`;
