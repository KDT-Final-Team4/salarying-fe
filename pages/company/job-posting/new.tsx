import React from 'react';
import Toggle from 'react-toggle';
import styled from 'styled-components';

export default function New() {
  return (
    <Wrapper>
      <TextInput>
        <h3>공고명</h3>
        <input type="text" />
      </TextInput>
      <TextInput>
        <h3>지원자 이름</h3>
        <input type="text" />
      </TextInput>
      <TextInput>
        <h3>지원자 메일</h3>
        <input type="text" />
      </TextInput>

      <FailOrPass>
        <h3>합격/불합격</h3>
        <div>
          <div>
            <input name="pass-or-fail" id="pass" type="radio" />
            <label htmlFor="pass">합격</label>
          </div>
          <div>
            {/* <Toggle id="cheese-status" defaultChecked={this.state.cheeseIsReady} onChange={this.handleCheeseChange} />
            <label htmlFor="cheese-status">Adjacent label tag</label> */}
          </div>
          <div>
            <Announce>통보</Announce>
            <UnAnnounce>미통보</UnAnnounce>
          </div>
        </div>
      </FailOrPass>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 5px solid blue;
  width: 100%;
  padding: 20px;
  background-color: var(--color-gray200);
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    h3 {
      width: 100px;
      flex-shrink: 0;
    }
  }
`;

const TextInput = styled.div`
  input {
    width: 100%;
  }
`;

const ProcedureInput = styled.div``;

const Procedure = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--color-lime600);
  border-radius: 10px;
  position: relative;
  div {
    border: 3px solid white;
    position: absolute;
    font-size: 12px;
    font-weight: 700;
    &:after {
      position: relative;
      white-space: nowrap;
      bottom: -16px;
      left: -5px;
    }
  }
  div:nth-child(1) {
    &:after {
      content: '채용전';
    }
  }
  div:nth-child(2) {
    left: 30%;
    &:after {
      content: '채용중';
    }
  }
  div:nth-child(3) {
    right: 0;
    &:after {
      content: '채용완료';
      left: -13px;
    }
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 100%;
`;
const FailOrPass = styled.div`
  & > div {
    display: flex;
    gap: 10px;
  }
`;

const Announce = styled.div`
  color: white;
  background-color: var(--color-gray700);
  padding: 5px;
`;

const UnAnnounce = styled.div`
  color: var(--color-gray700);
  background-color: white;
  padding: 5px;
`;
