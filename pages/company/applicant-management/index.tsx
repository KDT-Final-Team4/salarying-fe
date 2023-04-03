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
  status: string;
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  border: 1px solid #e0e0e0;
  text-align: left;
  padding: 12px;
  background-color: #f5f5f5;
  color: #333;
`;

const Td = styled.td`
  border: 1px solid #e0e0e0;
  text-align: left;
  padding: 12px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

const Applicants: React.FC = () => {
  return (
    <Wrapper>
      <h1>지원자 관리 페이지</h1>
      <Table>
        <thead>
          <Tr>
            <Th>이름</Th>
            <Th>전화번호</Th>
            <Th>이메일</Th>
            <Th>진행 상황</Th>
            <Th>상태</Th>
            <Th>메일 보내기</Th>
          </Tr>
        </thead>
        <tbody>
          {applicantsData.map((applicant, index) => (
            <Tr key={index}>
              <Td>{applicant.applicantNm}</Td>
              <Td>{applicant.applicantTel}</Td>
              <Td>{applicant.applicantEmail}</Td>
              <Td>{applicant.progress}</Td>
              <Td>{applicant.status}</Td>
              <Td>
                <Button_2 name="Send" color="sky" />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Applicants;
