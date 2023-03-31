import React from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

interface IProps {
  name: string
  Icon?: IconType
  color?: string
}
export default function Button_Point({ name, Icon, color }: IProps) {
  const iconColor = color && color[0] === '#' ? color : `var(${color})`

  return (
    <Btn>
      {Icon && <Icon color={iconColor} />}
      <button>{name}</button>
    </Btn>
  )
}

const Btn = styled.div`
  button {
    background-color: transparent;
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
    :hover {
      color: #fff;
    }
  }
  width: 180px;
  height: 50px;
  padding: 3px 10px;
  background-color: var(--color-point);
  border: 1px solid var(--color-point);
  color: var(--color-gray700);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 1px 1px var(--color-primary), 0 4px 4px var(--color-primary);
  :hover {
    color: #fff;
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
  }
`
