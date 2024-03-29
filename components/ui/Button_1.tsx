import React from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

interface IProps {
  name: string
  Icon?: IconType
  color?: string
}
export default function Button_1({ name, Icon, color, ...props }: IProps) {
  const iconColor = color && color[0] === '#' ? color : `var(${color})`

  return (
    <Btn {...props}>
      {Icon && <Icon color={iconColor} />}
      <span>{name}</span>
    </Btn>
  )
}

const Btn = styled.button`
  padding: 3px 10px;
  background-color: transparent;
  border: 1px solid var(--color-gray300);
  color: var(--color-gray600);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
