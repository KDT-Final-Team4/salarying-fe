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
    try {
      const res = await this.axiosClient.post('/signup', payload);
      console.log('postSignup', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
  // 로그인 ok
  async postLogin(payload): Promise<IPostLogin> {
    try {
      const res = await this.axiosClient.post('/users/login', payload);
      console.log('postLogin', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }

  // Admin로그인 ok
  async postAdminLogin(payload): Promise<IPostLogin> {
    try {
      const res = await this.axiosClient.post('/admin/login', payload);
      console.log('postAdminLogin', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  // 비밀번호 확인 payload = {password :string}
  async postAdminPassword(accessToken, { password }): Promise<IPostAdminPassword> {
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

  // 비밀번호 변경 payload = {password :string}
  async putAdminPassword(accessToken, { password }) {
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

  // 지원자 리스트 출력 (관)
  async getApplicants(accessToken) {
    try {
      const res = await this.axiosClient.get('/applicants', {
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

  // 채용공고에 지원자 등록
  async postApplicants(accessToken, { recruitingId, email, name, number }) {
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

  // 채용전형과 합격여부와 일치하는 지원자 리스트 출력 -> 버림
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

  // email 목록 가져오기 (기업회원이어야 함)
  async getApplicantsMessage(accessToken) {
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
  // email 보내기 (기업회원이어야 함)
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

  // 기업 비밀번호 확인
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
  // 기업 비밀번호 변경
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

  // 채용공고별 전형단계 출력
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

  // 채용공고 리스트 출력
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

  // 기업별 채용공고 등록
  async postRecruiting(accessToken, payload: IPostRecruit) {
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

  // 약관 리스트 출력
  async getTerms(accessToken) {
    try {
      const res = await this.axiosClient.get(`/terms`, {
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
  // 약관 수정
  async putTerms(accessToken, payload: ITerms) {
    try {
      const res = await this.axiosClient.put(`/terms`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('putTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  // 약관 등록
  async postTerms(accessToken, payload: ITermsWithType) {
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

  // 약관 삭제
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
  // 약관 상세보기
  async getTermsDetail(accessToken, id) {
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
  // 약관 상태 변경
  async postTermsStatus(accessToken, { status, id }: { status: string; id: number }) {
    try {
      const res = await this.axiosClient.post(
        `/terms/status`,
        { status, id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postTermsStatus>>', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

const ax = new Axios();
// const ax = new Axios();

export default ax;
interface IPostRecruit {
  title: string;
  task: string;
  document: boolean;
  firstRound: boolean;
  secondRound: boolean;
  finalRound: boolean;
}
