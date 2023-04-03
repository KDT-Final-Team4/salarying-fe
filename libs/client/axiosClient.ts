import axios, { AxiosInstance } from 'axios';
import { runInThisContext } from 'vm';

const baseURL = 'https://www.salarying-recruiting.shop';

const headers = {
  'Content-Type': 'application/json',
};

class Axios {
  axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL,
      headers,
    });
  }

  // 회원가입 ok
  async postSignup(payload) {
    console.log('signup');
    try {
      const res = await this.axiosClient.post('/signup', payload);
      console.log('signup', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
  // 로그인 ok
  async postLogin(payload) {
    console.log('postLogin');
    try {
      const res = await this.axiosClient.post('/users/login', payload);
      console.log('signup', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
  // 약관 리스트 출력
  async getTerms() {
    console.log('getTerms');
    try {
      const res = await this.axiosClient.get('/terms', {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcInRlc3RAZW1haWwuY29tXCIsXCJyb2xlXCI6XCJVU0VSXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJ0ZXN0QGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpbe1wiYXV0aG9yaXR5XCI6XCJVU0VSXCJ9XSxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZX0iLCJpc3MiOiI0IHRlYW0gYmFja2VuZCIsImlhdCI6MTY4MDI3NTE0MiwiZXhwIjoxNjgwMzYxNTQyfQ.k8rcOMP6imguK8Zud83q8JM6cfVD7CQDN-8kZkaZQX8',
          accept: 'application/json;charset=UTF-8',
        },
        params: { type: 'service' },
      });
      console.log('getTerms', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
}

const ax = new Axios();
// const ax = new Axios();

export default ax;
