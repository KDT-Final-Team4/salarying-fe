import React from 'react';
import styled from 'styled-components';

export default function Button_3({ children, ...props }) {
  return <SendBtn {...props}>{children}</SendBtn>;
}

const SendBtn = styled.button`
  background-color: var(--color-point);
  color: var(--color-gray700);
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  width: fit-content;
  &:hover {
    filter: brightness(1.05);
  }
`;
