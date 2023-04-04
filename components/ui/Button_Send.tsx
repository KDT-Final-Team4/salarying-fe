import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

const Button_Send = ({ text }: Props) => {
  return <SendBtn>{text}</SendBtn>;
};

const SendBtn = styled.button`
  background-color: var(--color-point);
  color: var(--color-gray600);
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    filter: brightness(1.05);
  }
`;

export default Button_Send;
