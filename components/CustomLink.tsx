import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

type Props = {};

export default function CustomLink({ href, children }) {
  const router = useRouter();
  const isActive = router.isReady && router.asPath === href;
  return (
    <StyledLink onClick={() => router.push(href)} isActive={isActive}>
      {children}
    </StyledLink>
  );
}
const StyledLink = styled.span<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
  color: ${({ isActive }) => (isActive ? 'var(--color-gray600)' : 'var(--color-gray300)')};
  cursor: pointer;
  border-radius: 10px;
  margin: 0 auto;
  padding: 0 10px;
  font-weight: 700;
  transition: all 0.2s;
  background-color: ${({ isActive }) => (isActive ? 'var(--color-point)' : 'transparent')};
  &:hover {
    filter: brightness(1.05);
    color: ${({ isActive }) => (isActive ? 'var(--color-gray600)' : 'var(--color-gray400)')};
  }
`;
