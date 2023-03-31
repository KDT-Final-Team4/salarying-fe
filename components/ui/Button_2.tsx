import React from 'react';
import styled from 'styled-components';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  color?:
    | 'gray'
    | 'zinc'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | 'point';
}
export default function Button_2({ name, color, ...buttonProps }: IProps) {
  let colors = {
    bgColor: 'var(--color-gray100)',
    bgHoverColor: 'var(--color-gray200)',
    spanColor: 'var(--color-gray600)',
    hoverColor: 'var(--color-gray700)',
  };

  if (color === 'point') {
    colors.bgColor = `var(--color-point)`;
    colors.bgHoverColor = `var(--color-point)`;
    colors.spanColor = `var(--color-sub)`;
    colors.hoverColor = `var(--color-primary)`;
  } else if (color) {
    colors.bgColor = `var(--color-${color}100)`;
    colors.bgHoverColor = `var(--color-${color}200)`;
    colors.spanColor = `var(--color-${color}500)`;
    colors.hoverColor = `var(--color-${color}600)`;
  }

  return (
    <Btn bgColor={colors.bgColor} spanColor={colors.spanColor} bgHoverColor={colors.bgHoverColor} hoverColor={colors.hoverColor} {...buttonProps}>
      <span>{name}</span>
    </Btn>
  );
}
interface btnProps {
  bgColor: string;
  bgHoverColor: string;
  spanColor: string;
  hoverColor: string;
}
const Btn = styled.button<btnProps>`
  padding: 5px 13px;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  span {
    font-weight: 700;
    color: ${(props) => props.spanColor};
  }
  &:hover {
    background-color: ${(props) => props.bgHoverColor};
    span {
      color: ${(props) => props.hoverColor};
    }
  }
`;
