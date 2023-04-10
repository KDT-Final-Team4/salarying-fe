import React from 'react';
import styled from 'styled-components';
import { NumberLiteralType } from 'typescript';

type ICategoryStyle = {
  width?: string;
  height?: string;
};

type ICategory = {
  category: string | number;
  categoryId: string | number;
};

type ICategoryComponent = {
  categories: Array<ICategory>;
  currentValue: string | number | string[];
  setCurrentValue?: (newValue: any) => void;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

type ICombined = ICategoryStyle & ICategoryComponent;

export default function SelectCategory({ width, height, categories, currentValue, setCurrentValue, onClick }: ICombined) {
  const handleSelect = (value) => {
    setCurrentValue(value);
    console.log(value);
  };
  return (
    <WrapStyle width={width} height={height}>
      {categories.map((item) => (
        <div key={item.categoryId} className={currentValue === item.categoryId ? 'select' : null} onClick={() => handleSelect(item.categoryId)}>
          {item.category}
        </div>
      ))}
    </WrapStyle>
  );
}

const WrapStyle = styled.div<ICategoryStyle>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 5px 10px;
  width: ${(props) => (props.width ? `${props.width}` : 'inherit')};
  padding: 5px 40px;
  div {
    width: 200px;
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    color: var(--color-gray500);
    border-radius: 10px;
    padding: 15px 20px;
    margin: 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-gray200);
    :hover {
      color: var(--color-primary);
      font-weight: 700;
      background-color: var(--color-point);
      transition: 0.2s;
    }
    &.select {
      color: var(--color-primary);
      font-weight: 700;
      background-color: var(--color-point);
      transition: 0.2s;
    }
  }
`;
