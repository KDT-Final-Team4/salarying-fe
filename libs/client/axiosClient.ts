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

  /** 회원가입 (user) ok */
  async postSignup({
    email,
    password = 'test@email.com',
    companyName = '익명회사',
    companyPhoneNumber = '010-1234-5678',
    name = '익명',
    position = '대표',
  }: {
    [key: string]: string;
  }) {
    try {
      const res = await this.axiosClient.post('/signup', {
        email,
        password,
        companyName,
        companyPhoneNumber,
        name,
        position,
      });
      console.log('postSignup', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
  /** 로그인 (user) ok */
  async postLogin(payload): Promise<IPostLogin> {
    try {
      console.log(payload);
      const res = await this.axiosClient.post('/users/login', payload);
      console.log('postLogin', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }

  /** Admin로그인 (admin) ok */
  async postAdminLogin({ email, password }: { [key: string]: string }): Promise<IPostLogin> {
    try {
      const res = await this.axiosClient.post('/admin/login', { email, password });
      console.log('postAdminLogin', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 비밀번호 확인 (admin) ok */
  async postAdminPassword(accessToken: string, { password }: { password: string }): Promise<Data> {
    try {
      const res = await this.axiosClient.post(
        '/admin/password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postAdminPassword>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 비밀번호 변경 (admin) */
  async putAdminPassword(accessToken: string, { password }: { password: string }) {
    return console.log('사용안하는게?');
    try {
      const res = await this.axiosClient.put(
        '/admin/password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putAdminPassword>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 지원자 리스트 출력 (user) ok */
  async getApplicants(accessToken, { recruiting_id = 2 }) {
    try {
      const res = await this.axiosClient.get(`/applicants?recruiting_id=${recruiting_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getApplicants>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 채용공고에 지원자 등록 (user) ok */
  async postApplicants(accessToken, { recruitingId = 2, email = 'test@email.com', name = '익명', number = '010-8989-0000' }) {
    try {
      const res = await this.axiosClient.post(
        '/applicants',
        { recruitingId, email, name, number },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postApplicants>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 채용전형과 합격여부와 일치하는 지원자 리스트 출력 -> 버림 */
  async getApplicantsSelection(accessToken, { id, progress, status }) {
    try {
      const res = await this.axiosClient.post(
        '/applicants',
        { id, progress, status },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postApplicants>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** email 목록 가져오기 (user) */
  async getApplicantsMessage(accessToken): Promise<IGetApplicantsMessage> {
    try {
      const res = await this.axiosClient.get('/applicants/message', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getApplicantsMessage>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  /** email 보내기 (user) */
  async postApplicantsMessage(accessToken, payload) {
    try {
      const res = await this.axiosClient.post('/applicants/message', payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('postApplicantsMessage>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 기업 비밀번호 확인 ok */
  async postUsersPassword(accessToken, { password }) {
    try {
      const res = await this.axiosClient.post(
        '/users/password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postUsersPassword>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  /** 기업 비밀번호 변경 */
  async putUsersPassword(accessToken, { password }) {
    try {
      const res = await this.axiosClient.put(
        '/users/password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putUsersPassword>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 채용공고별 전형단계 출력 */
  async postRecruitingProgress(accessToken, id) {
    try {
      const res = await this.axiosClient.post(`/recruiting/progress/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('postRecruitingProgress>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 채용공고 리스트 출력 */
  async getRecruiting(accessToken) {
    try {
      const res = await this.axiosClient.get(`/recruiting`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getRecruiting>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 기업별 채용공고 등록 (user) ok */
  async postRecruiting(accessToken, payload: IPostRecruit): Promise<IPostRecruiting> {
    try {
      const res = await this.axiosClient.post(`/recruiting`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('postRecruiting>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 약관 리스트 출력 (admin) ok */
  async getTerms(accessToken, type: 'service' | 'privacy' | 'information' | 'marketing'): Promise<IGetTerms> {
    try {
      const res = await this.axiosClient.get(`/terms?type=${type}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  /** 약관 수정 (admin) ok */
  async putTerms(accessToken, payload: IPutTerms) {
    try {
      const res = await this.axiosClient.put(
        `/terms`,
        {},
        {
          params: payload,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  /** 약관 등록 (admin) ok */
  async postTerms(accessToken, payload: ITermsWithType): Promise<Data> {
    try {
      const res = await this.axiosClient.post(`/terms`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('postTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  /** 약관 삭제 (admin) ok */
  async deleteTerms(accessToken, id) {
    try {
      const res = await this.axiosClient.delete(`/terms/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('deleteTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  /** 약관 상세보기 (admin) ok*/
  async getTermsDetail(accessToken, id): Promise<ItermsDetail> {
    try {
      const res = await this.axiosClient.get(`/terms/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  /** 약관 status 변경: 최소 1개 공개해야함, (admin) ok*/
  async postTermsStatus(accessToken, { status, id }) {
    try {
      const res = await this.axiosClient.post(
        `/terms/status`,
        { status, id, force: true },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postTermsStatus>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err?.response?.data?.errorMessage);
    }
  }
}

const api = new Axios();
/** const ax = new Axios(); */

export default api;
