import React from 'react';
import styled from 'styled-components';

export default function TermModal({ type, show, onHide, width, height }: IModal) {
  return (
    <DimmedArea>
      <Container width={width} height={height}>
        <Title>{type}</Title>
      </Container>
    </DimmedArea>
  );
}

const Container = styled.div<IModalStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* background-color: aqua; */
`;

const Title = styled.div``;

const DimmedArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
