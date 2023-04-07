// __tests__/axios.test.ts
import '@types/jest';

import api from '../libs/client/axiosClient';

const userAccount = {
  email: 'test@email.com',
  password: 'test@1234',
};
const adminAccount = {
  email: 'admin@email.com',
  password: 'admin@1234',
};

describe('Axios API tests', () => {
  let accessToken: string;

  test('기업회원 로그인 기능', async () => {
    const res = await api.postLogin(userAccount);
    accessToken = res.data.token;

    expect(typeof accessToken).toBe('string');
    expect(res.stateCode).toBe(200);
  });

  test('관리자계정 로그인 기능', async () => {
    const res = await api.postAdminLogin(adminAccount);
    accessToken = res.data.token;

    expect(typeof accessToken).toBe('string');
    expect(typeof accessToken).toBeDefined();
    expect(res.stateCode).toBe(200);
  });
});
