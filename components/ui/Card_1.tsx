import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';
import { AiFillNotification } from 'react-icons/ai';

type Props = {
  Icon?: IconType;
  title?: string;
  content?: string;
  dark?: boolean;
};

export default function Card_1({ Icon, title, content, dark, ...others }: Props) {
  return (
    <Card {...others} dark={dark}>
      <Circle dark={dark}>{Icon ? <Icon size="24" /> : <AiFillNotification size="24" />}</Circle>
      <Content dark={dark}>
        <h3>{title}</h3>
        <span>{content}</span>
      </Content>
    </Card>
  );
}

const Card = styled.div<{ dark }>`
  display: flex;
  width: 250px;
  height: 110px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  gap: 20px;
  border-radius: 10px;
  flex-shrink: 0;
  background-color: ${(props) => (props.dark ? 'var(--color-zinc900)' : 'var(--color-zinc100)')};
`;

const Circle = styled.div<{ dark }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.dark ? 'var(--color-zinc700)' : 'var(--color-zinc200)')};
  border-radius: 100%;
  flex-shrink: 0;
  svg {
    color: ${(props) => (props.dark ? 'var(--color-point)' : 'var(--color-zinc900)')};
  }
`;
const Content = styled.div<{ dark }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-weight: 500;
    color: ${(props) => (props.dark ? 'var(--color-zinc400)' : 'var(--color-zinc400)')};
  }
  span {
    color: ${(props) => (props.dark ? 'var(--color-zinc300)' : 'var(--color-zinc900)')};
    font-weight: 800;
    font-size: 25px;
  }
`;
