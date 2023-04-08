import React from 'react';
import styled from 'styled-components';

type Props = {
  activePage: number;
  pages: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ activePage, pages, setActivePage }: Props) => {
  const getPages = () => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <div className={`${activePage === i ? 'active' : ''}`} onClick={() => setActivePage(i)} key={i}>
          {i < 10 ? `0${i}` : i}
        </div>,
      );
    }
    return elements;
  };

  return <PaginationStyle>{getPages()}</PaginationStyle>;
};

const PaginationStyle = styled.div`
  display: flex;
  margin: 40px auto;
  padding-bottom: 50px;
  > div {
    width: 33px;
    height: 33px;
    background: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-gray600);
    margin-right: 20px;
    cursor: pointer;
    &.active {
      background-color: var(--color-point);
      color: var(--color-gray600);
    }
  }
`;

export default Pagination;
