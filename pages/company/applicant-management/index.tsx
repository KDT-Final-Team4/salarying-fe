import PostCard from '@/components/company/job-posting/PostCard'
import ApplicantCard from '@/components/company/notice/ApplicantCard'
import React from 'react'
import styled from 'styled-components'
import Button_2 from '@/components/ui/Button_2';

interface IApplicant {
  applicantNm: string;
  applicantTel: string;
  applicantEmail: string;
  progress: string;
  status: '합격' | '불합격';
}


const applicantsData: IApplicant[] = [
  {
    applicantNm: '박혁거세',
    applicantTel: '01012341234',
    applicantEmail: 'test@email.com',
    progress: '서류 심사',
    status: '합격',
  },
  {
    applicantNm: '황이삭',
    applicantTel: '01022222222',
    applicantEmail: 'hwisaac0@gmail.com',
    progress: '서류 심사',
    status: '합격',
  },
];

const Applicants: React.FC = () => {
  return (
    <Wrapper>
      <h1>지원자 관리 페이지</h1>
      <Table>
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>전화번호</Th>
            <Th>이메일</Th>
            <Th>진행 상황</Th>
            <Th>상태</Th>
            <Th>메일 보내기</Th>
          </Tr>
        </Thead>
        <Tbody>
          {applicantsData.map((applicant, index) => (
            <Tr key={index}>
              <Td>{applicant.applicantNm}</Td>
              <Td>{applicant.applicantTel}</Td>
              <Td>{applicant.applicantEmail}</Td>
              <Td>{applicant.progress}</Td>
              <Td>{applicant.status}</Td>
              <Td>
                <SendBtn>Send</SendBtn>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Wrapper>
  );
};

export default Applicants;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin: 0 auto;
  h1 {
    color: var(--color-gray700);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 60px;
  }
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
  /* 버튼 칸에 약간 패딩주기 */
  &:last-child {
    padding: 0px 40px;
  }
`;

const Tr = styled.tr`
  &:last-child {
    border-bottom: 1px solid var(--color-gray100);
  }
`;

const SendBtn = styled.button`
  background-color: var(--color-point);
  color: var(--color-gray700);
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    filter: brightness(1.05);
  }
`;