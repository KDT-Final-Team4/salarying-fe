// __tests__/axios.test.ts
import api from '@/libs/client/axiosClient';

describe('Axios API tests', () => {
  let accessToken: string;

  beforeAll(async () => {
    // 로그인 테스트 전에 회원가입을 진행합니다.
    const signupData = {
      email: 'test@email.com',
      password: 'test@1234',
      companyName: 'Test Company',
      companyPhoneNumber: '010-1234-5678',
      name: 'Test Name',
      position: 'Test Position',
    };

    await api.postSignup(signupData);
  });

  test('User login', async () => {
    const payload = {
      email: 'test@email.com',
      password: 'password',
    };

    const response = await api.postLogin(payload);
    expect(response).toHaveProperty('accessToken');
    accessToken = response.data.token;
  });

  test('Get recruiting', async () => {
    const response = await api.getRecruiting(accessToken);
    expect(response).toBeDefined();
  });
});
