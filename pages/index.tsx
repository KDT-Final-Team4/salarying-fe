import axios from 'axios';
import styled from 'styled-components';
import Avatar, { genConfig } from 'react-nice-avatar';
import SNBLayout from '@/components/layout/SNBLayout';
import { getSNBLayout } from '@/libs/client/getLayout';

export default function Home() {
  const handleClick = async () => {
    const res = await axios.request({
      method: 'post',
      url: '/api/users/login',
      data: {
        email: 'test@test.com',
        password: 'test@test.com',
        companyNm: 'fast campus',
        companyTel: '010-1234-4231',
      },
    });
    console.log(res.data);
  };

  return (
    <Wrapper>
      <span onClick={handleClick}>Home</span>
    </Wrapper>
  );
}
Home.getLayout = getSNBLayout;

// Home.getLayout = function getLayout(page) {
//   return <SNBLayout>{page}</SNBLayout>;
// };

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: var(--color-sky200);
`;
