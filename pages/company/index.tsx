import React from 'react';
import styled from 'styled-components';

const Company = () => {
  return (
    <Wrapper>
      <Grid_1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eos?
        </h1>
        <div>
          <div></div>
          <div>
            <Title>H2 Title</Title>
            <Description>Lorem ipsum dolor sit</Description>
          </div>
        </div>
      </Grid_1>
      <Grid_2>
        <Title>H2 Title</Title>
        <Description>Lorem ipsum dolor sit</Description>
        <Button>Button</Button>
      </Grid_2>
      <Grid_3>
        <Title>H2 Title</Title>
        <Description>Lorem ipsum dolor sit</Description>
        <Button>Button</Button>
      </Grid_3>
      <Grid_4>
        <Title>H2 Title</Title>
        <Description>Lorem ipsum dolor sit</Description>
        <Button>Button</Button>
      </Grid_4>
    </Wrapper>
  );
};

export default Company;

const Wrapper = styled.main`
  width: 100%;
  display: grid;
  border: 1px solid red;
  height: auto;
  padding: 50px 100px;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 200px 250px 400px 400px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const Grid_1 = styled(Grid)`
  grid-column: 1 / span 2;
  background-color: var(--color-blue300);
  h1 {
    font-weight: 700;
    font-size: 30px;
    color: var(--color-gray900);
  }
  & > div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
    div {
      background-color: var(--color-red300);
      height: 100%;
      width: 100%;
    }
  }
`;

const Grid_2 = styled(Grid)`
  grid-column: 1 / span 2;
  background-color: var(--color-orange300);
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
  color: var(--color-stone700);
`;
const Description = styled.p`
  font-weight: 700;
  color: var(--color-stone400);
`;
const Button = styled.button`
  border: 2px solid var(--color-gray900);
  border-radius: 1px;
  background-color: transparent;
  width: 150px;
  height: 35px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: white;
    background-color: var(--color-gray900);
  }
`;
const Grid_3 = styled(Grid)`
  background-color: var(--color-yellow300);
`;
const Grid_4 = styled(Grid)`
  background-color: var(--color-purple300);
`;
