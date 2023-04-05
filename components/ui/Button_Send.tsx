import React from 'react';
import styled from 'styled-components';

interface Props extends StyledProps {
  text: string;
}

interface StyledProps {
  width: number;
  height: number;
}

const Button_Send = ({ text, height, width }: Props) => {
  return (
    <SendBtn height={height} width={width}>
      {text}
    </SendBtn>
  );
};

const SendBtn = styled.button<StyledProps>`
  background-color: var(--color-point);
  color: var(--color-gray600);
  padding: 12px 20px;
  border-radius: 5px;
  height: ${({ height }) => (height ? `${height}px` : 'max-content')};
  width: ${({ width }) => (width ? `${width}px` : 'max-content')};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    filter: brightness(1.05);
  }
`;

export default Button_Send;
