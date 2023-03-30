import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://www.salarying-recruiting.shop';

const headers = {
  'Content-Type': 'application/json',
};

class Axios {
  private static instance: Axios | null;
  axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL,
      headers,
    });
  }
  // 싱글톤 패턴 적용
  public static getInstance() {
    if (!Axios.instance) {
      Axios.instance = new Axios();
    }
    return Axios.instance;
  }

  // 회원가입
  async postSignup(payload) {
    try {
      const res = await this.axiosClient.post('/signup', payload);
      console.log('signup', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  // 로그인
  async postLogin(payload) {
    console.log(payload);
    try {
      const res = await this.axiosClient.post('/users/login', payload);
      console.log('login', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

const api = Axios.getInstance();

export default api;
