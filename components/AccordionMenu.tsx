import React, { useState } from 'react';
import styled from 'styled-components';
import { BiChevronUp } from 'react-icons/bi';
import { useRouter } from 'next/router';
type Props = {};

export default function AccordionMenu({ title, subNavs, activeURL, ...others }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = (event) => {
    setIsOpen((prev) => !prev);
  };

  const isActive = (href) => {
    return router.isReady && router.asPath === href;
  };
  const isActiveWrapper = (activeURL) => {
    return router.isReady && router.asPath.startsWith(activeURL);
  };

  return (
    <AccordionWrapper isOpen={isOpen} {...others} isActiveWrapper={isActiveWrapper(activeURL)}>
      <div onClick={toggleAccordion}>
        <h3>{title}</h3>
        <BiChevronUp size="22" />
      </div>
      <div>
        {subNavs?.map((nav) => (
          <SubNav key={nav.title} isActive={isActive(nav.href)} onClick={() => router.push(nav.href)}>
            {nav.title}
          </SubNav>
        ))}
      </div>
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div<{ isOpen: boolean; isActiveWrapper: boolean }>`
  display: flex;
  /* align-items: center; */
  cursor: pointer;
  width: 100%;
  margin: 0 auto;

  background-color: var(--color-gray100);
  flex-direction: column;
  &:hover {
  }
  h3 {
  }
  div:nth-child(1) {
    transition: all 0.2s;
    font-weight: 700;
    color: ${({ isActiveWrapper }) => (isActiveWrapper ? 'var(--color-gray600)' : 'var(--color-gray300)')};
    background-color: ${({ isActiveWrapper }) => (isActiveWrapper ? 'var(--color-point)' : 'transparent')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;
    padding: 0 10px;
    svg {
      color: var(--color-gray600);
      transition: all 0.2s;
      transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
    &:hover {
      color: ${({ isActiveWrapper }) => (isActiveWrapper ? 'var(--color-gray600)' : 'var(--color-gray400)')};
    }
  }
  div:nth-child(2) {
    max-height: ${({ isOpen }) => (isOpen ? '100px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    list-style: none;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const SubNav = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  height: 40px;
  align-items: center;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? 'var(--color-gray600)' : 'var(--color-gray300)')};
  padding-left: 30px;
  &:hover {
    color: ${({ isActive }) => (isActive ? 'var(--color-gray600)' : 'var(--color-gray400)')};
  }
`;
