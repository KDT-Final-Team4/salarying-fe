import ApplicantCard from '@/components/company/notice/ApplicantCard';
import React from 'react';
import styled from 'styled-components';

const applicantData = [
  {
    name: '지원자1',
    id: 1,
    pass: false,
  },
  {
    name: '지원자2',
    id: 2,
    pass: true,
  },
  {
    name: '지원자3',
    id: 3,
    pass: false,
  },
];

export default function ApplicantManagement() {
  return (
    <Wrapper>
      {applicantData.map((applicant) => (
        <ApplicantCard key={applicant.id} applicant={applicant} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
