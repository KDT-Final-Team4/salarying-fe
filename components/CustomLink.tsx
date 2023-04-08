import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';

type Props = {
  href: string;
  children: ReactNode;
  Icon?: IconType;
};

export default function CustomLink({ href, children, Icon }: Props) {
  const router = useRouter();
  const isActive = router.isReady && router.asPath.startsWith(href);
  return (
    <StyledLink onClick={() => router.push(href)} isActive={isActive}>
      {Icon && <Icon style={{ marginRight: '10px', position: 'relative', top: '2px' }} size="20" />}
      {children}
    </StyledLink>
  );
}

const StyledLink = styled.span<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  padding: 0 15px;
  transition: all 0.2s;
  color: ${({ isActive }) => (isActive ? 'var(--color-gray600)' : 'var(--color-gray300)')};
  cursor: pointer;
  margin: 0 auto;
  font-weight: 700;
  background-color: ${({ isActive }) => (isActive ? 'var(--color-point)' : 'transparent')};
  &:hover {
    filter: brightness(1.05);
    color: ${({ isActive }) => (isActive ? 'var(--color-gray600)' : 'var(--color-gray400)')};
  }
`;
