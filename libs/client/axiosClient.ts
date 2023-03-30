import axios, { AxiosInstance } from 'axios';

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
}

const ax = new Axios();
// const ax = new Axios();

export default ax;
