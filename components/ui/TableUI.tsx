import { btnColorFromSeed, formatIsoTime, isIsoDate, sortByProperty } from '@/libs/utils';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button_2 from './Button_2';
import { property } from 'cypress/types/lodash';

type Props = {
  dataList: any[];
  titles?: string[];
};
// const dataList = [
//   {
//     id: 1,
//     name: '황이삭',
//     email: 'abcd@naver.com',
//     progress: '서류 심사',
//     status: '불합격',
//   },
//   {
//     id: 2,
//     name: '황이삭3',
//     email: 'abcd@naver.com',
//     progress: '서류 합격',
//     status: '합격',
//   },
//   {
//     id: 3,
//     name: '황이삭4',
//     email: 'abcd@naver.com',
//     progress: '서류 심사',
//     status: '불합격',
//   },
//   {
//     id: 4,
//     name: '황이삭5',
//     email: 'abcd@naver.com',
//     progress: '서류 심사',
//     status: '합격',
//   },
// ];
// const titles = ['id', '이름', '메일', '과정', '상태'];

const SecondRow = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-gray400);
`;

function FormatDate(date: string) {
  const [first, second] = date.split('T');
  return (
    <>
      {first}
      <br />
      <SecondRow>{formatIsoTime(date)}</SecondRow>
    </>
  );
}
type TProperty = 'id' | 'title' | 'postDate' | 'task' | 'status';
export default function TableUI({ dataList, titles }: Props) {
  const arrLength = dataList?.length;
  // dataList.map( data => isIsoDate(data) ? )
  const [property, setProperty] = useState<TProperty>('postDate');
  const [ascending, setAscending] = useState(true);

  return (
    <Wrapper>
      <Table>
        {titles?.length && (
          <Thead>
            <Tr>
              {titles?.map((title, index) => (
                <Th key={title + index}>{title}</Th>
              ))}
            </Tr>
          </Thead>
        )}
        <Tbody>
          {sortByProperty(dataList, property, ascending)?.map((data, index) => (
            <Tr key={index}>
              {Object.keys(data).map((key, index) => (
                <Td key={key + index}>{isIsoDate(data[key]) ? FormatDate(data[key]) : data[key]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* <Pages>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
      </Pages> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 3rem; */
  margin: 0 auto;
  flex-shrink: 0;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const Thead = styled.thead`
  tr {
    th {
      border-top: 1px solid var(--color-gray100);
      text-align: left;
      padding: 22px 12px;
      font-weight: 500;
      font-size: 14px;
      color: var(--color-gray400);
    }
  }
`;
const Tbody = styled.tbody`
  tr:hover {
    background-color: var(--color-gray50);
  }
`;

const Th = styled.th`
  border-top: 1px solid var(--color-gray100);
  text-align: left;
  padding: 22px 12px;
  font-weight: 500;
  color: var(--color-gray400);
`;

const Td = styled.td`
  border-top: 1px solid var(--color-gray100);
  text-align: left;
  padding: 20px 12px;
  padding-right: 40px;
  color: var(--color-gray600);
  p {
    font-size: 12px;
    margin-top: 10px;
    color: var(--color-gray400);
  }
`;

const Tr = styled.tr`
  &:last-child {
    border-bottom: 1px solid var(--color-gray100);
  }
`;

const Pages = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;

  margin: 50px 0;
  color: var(--color-gray400);
  li {
    cursor: pointer;
    padding: 5px;
    &.active {
      color: var(--color-gray800);
      background-color: var(--color-point);
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
