import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import Button_Send from '@/components/ui/Button_send';
import Button_Send from '@/components/ui/Button_Send';
import styled from 'styled-components';
import Button_2 from '@/components/ui/Button_2';
import Button_1 from '@/components/ui/Button_1';
import Pagination from '@/components/ui/Pagination';
import { useQuery } from '@tanstack/react-query';
import api from '@/libs/client/axiosClient';
import useCookies from '@/libs/hooks/useCookies';
import MailModal from '@/components/company/job-posting/MailModal';
import Button_3 from '@/components/ui/Button_3';

type Props = {};
// GET /getApplicants by recruiting_id=2
// const applicants = [
//   {
//     applicantNm: '박혁거세',
//     applicantTel: '01012341234',
//     applicantEmail: 'test@email.com',
//     progress: '서류전형',
//     status: '불합격',
//   },
//   {
//     applicantNm: '우지수',
//     applicantTel: '01012345678',
//     applicantEmail: 'yaa3323@naver.com',
//     progress: '서류전형',
//     status: '합격',
//   },
//   {
//     applicantNm: '이삭',
//     applicantTel: '010-1234-1234',
//     applicantEmail: 'hwisaac0@gmail.com',
//     progress: '서류전형',
//     status: '불합격',
//   },
// ];
export default function RecruitingId({ params }) {
  console.log('params', params);
  const { accessToken } = useCookies();
  const router = useRouter();
  const { recruiting_id }: any = router.query;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['recruit', recruiting_id],
    queryFn: () => api.getApplicants(accessToken, { recruiting_id }),
  });

  const [activePage, setActivePage] = useState(1);
  const [openMail, setOpenMail] = useState(false); //모달

  const [applicantEmail, setApplicantEmail] = useState('');
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState('');

  const setPayload = (event, { recruitingId, applicantEmail, status, progress }) => {
    setOpenMail(true); // 모달열기
    setApplicantEmail(applicantEmail);
    setStatus(status);
    setProgress(progress);
  };
  return (
    <Wrapper>
      {openMail && (
        <MailModal
          onCancel={() => setOpenMail(false)}
          recruitingId={recruiting_id}
          applicantEmail={applicantEmail}
          status={status}
          progress={progress}
          refetch={refetch}
        />
      )}
      <h1>
        지원자 리스트
        <Button_1 name={recruiting_id as string} />
      </h1>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>이름</Th>
            <Th>이메일</Th>
            <Th>전화번호</Th>
            <Th>진행 상황</Th>
            <Th>상태</Th>
            <Th>이메일</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.map((applicant, index) => (
            <Tr key={index}>
              <Td>{index}</Td>
              <Td>{applicant.applicantNm}</Td>
              <Td>{applicant.applicantEmail}</Td>
              <Td>{applicant.applicantTel}</Td>
              <Td>{applicant.progress}</Td>
              <Td>
                <Button_2 name={applicant.status} color={applicant.status === '합격' ? 'indigo' : 'pink'} />
              </Td>
              <Td>
                <ClickableBtn
                  onClick={(event) =>
                    setPayload(event, {
                      recruitingId: recruiting_id,
                      applicantEmail: applicant.applicantEmail,
                      status: applicant.status,
                      progress: applicant.progress,
                    })
                  }
                  name={'Send'}
                >
                  Send
                </ClickableBtn>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Pages>
        <Pagination activePage={activePage} setActivePage={setActivePage} pages={1} />
      </Pages>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin: 0 auto;
  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
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

const ClickableBtn = styled(Button_3)`
  cursor: pointer;
`;