import axios, { AxiosInstance } from 'axios';
import { runInThisContext } from 'vm';

const baseURL = 'https://www.salarying-recruiting.shop';

const headers = {
  'Content-Type': 'application/json',
};

class Axios {
  private static instance: Axios;
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL,
      headers,
    });
  }
  ////// singleton 패턴
  public static getInstance(): Axios {
    if (!Axios.instance) {
      Axios.instance = new Axios();
    }
    return Axios.instance;
  }

  ////// admin-controller

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
      console.error(err?.response?.data?.errorMessage);
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
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 관리자 별 담당 기업 리스트 출력 (admin) ok */
  async getCorporations(accessToken: string): Promise<IGetCorporations> {
    try {
      const res = await this.axiosClient.get('/corporations', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getCorporations>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  ////// login-controller
  /** 회원가입 (user) ok */
  async postSignup({
    email,
    password = 'test@1234',
    companyName = '익명회사',
    companyPhoneNumber = '010-1234-5678',
    name = '익명',
    position = '대표',
  }: {
    [key: string]: string;
  }): Promise<Data> {
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
      return e;
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
      console.error(err?.response?.data?.errorMessage);
    }
  }

  ////// applicant-controller
  /** 지원자 리스트 출력 (user) ok */
  async getApplicants(accessToken, { recruiting_id = 2 }): Promise<IGetApplicants> {
    try {
      const res = await this.axiosClient.get(`/applicants?recruiting_id=${recruiting_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getApplicants>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 지원자 progress,status수정 (user) ok */
  async putApplicants(accessToken, { recruitingId, progress, status, email }) {
    try {
      const res = await this.axiosClient.put(
        '/applicants',
        {},
        {
          params: { recruitingId, progress, status, email },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putApplicants>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
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
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 채용전형과 합격여부와 일치하는 지원자 리스트 출력 -> ??? */
  async getApplicantsSelection(accessToken, { id, progress, status }): Promise<Data> {
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
      console.log('getApplicantsSelection>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** email 목록 가져오기 (user) ok */
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
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** email 보내기 (user) ok  */
  async postApplicantsMessage(accessToken: string, payload: IPostApplicantsMessage[]): Promise<Data> {
    try {
      const res = await this.axiosClient.post('/applicants/message', payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('postApplicantsMessage>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  ////// faq-controller
  /** FAQ 리스트 출력 (user,admin) ok */
  async getFAQ(accessToken: string): Promise<IGetFAQ> {
    try {
      const res = await this.axiosClient.get('/faq', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getFAQ>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** FAQ 정보 수정 (admin) ok */
  async putFAQ(accessToken: string, { id, question, answer }): Promise<Data> {
    try {
      const res = await this.axiosClient.put(
        '/faq',
        { id, question, answer },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putFAQ>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** FAQ 등록 (admin) ok */
  async postFAQ(accessToken: string, { question, answer, category }): Promise<Data> {
    try {
      const res = await this.axiosClient.post(
        '/faq',
        { question, answer, category },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postFAQ>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** FAQ 상세정보 출력 (admin, user) ok */
  async getFAQDetail(accessToken: string, id): Promise<Data> {
    try {
      const res = await this.axiosClient.get(`/faq/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getFAQDetail>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** FAQ 삭제 (admin) ok */
  async deleteFAQ(accessToken: string, id): Promise<Data> {
    try {
      const res = await this.axiosClient.delete(`/faq`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          id,
        },
      });
      console.log('deleteFAQ>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** FAQ Status 수정 (admin) ok */
  async putFAQStatus(accessToken: string, { id, question, answer }): Promise<Data> {
    try {
      const res = await this.axiosClient.put(
        `/faq/status`,
        {
          id,
          question,
          answer,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putFAQStatus>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  ////// MEMBER-CONTROLLER
  /** 기업정보 출력 */
  async getUserMe(accessToken): Promise<IGetUserMe> {
    try {
      const res = await this.axiosClient.get('/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
      return err;
    }
  }
  /** 기업 비밀번호 확인 (user) ok */
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
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** 기업 비밀번호 변경 (user) */
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
      console.error(err?.response?.data?.errorMessage);
    }
  }

  ////// NOTICE-CONTROLLER
  /** 공지사항 리스트 조회 (admin,user) ok */
  async getNotice(accessToken): Promise<Data> {
    if (!accessToken) return;
    try {
      const res = await this.axiosClient.get('/notice', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getNotice>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 공지사항 공지사항 수정 (admin) ok */
  async putNotice(accessToken, { id, title, content }): Promise<Data> {
    try {
      const res = await this.axiosClient.put(
        '/notice',
        { id, title, content },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putNotice>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 공지사항 공지사항 등록 (admin) ok */
  async postNotice(accessToken, { title, content }): Promise<Data> {
    try {
      const res = await this.axiosClient.post(
        '/notice',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('postNotice>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** 공지사항 삭제 (admin) ok */
  async deleteNotice(accessToken, id): Promise<Data> {
    try {
      const res = await this.axiosClient.delete(`/notice`, {
        data: { id },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('deleteNotice>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 공지사항 상세정보 조회 (admin) ok */
  async getNoticeDetail(accessToken, id): Promise<INoticeDetail> {
    try {
      const res = await this.axiosClient.get(`/notice/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getNoticeDetail>>', res.data);
      return res.data.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** 공지사항 status 수정 (admin) ok */
  async putNoticeStatus(accessToken, { id, status }): Promise<Data> {
    try {
      const res = await this.axiosClient.put(
        `/notice/status`,
        { id, status },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putNoticeStatus>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  // progress-controller
  /** 채용공고별 전형단계 출력 (user) */
  async postRecruitingProgress(accessToken, id): Promise<Data> {
    try {
      const res = await this.axiosClient.post(`/recruiting/progress/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('postRecruitingProgress>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 채용공고 리스트 출력 */
  async getRecruiting(accessToken): Promise<IGetRecruiting> {
    try {
      const res = await this.axiosClient.get(`/recruiting`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getRecruiting>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** 기업별 채용공고 status 변경 (user) ok */
  async putRecruitingStatus(accessToken, { recruitingId, status }: { recruitingId: unknown; status: '서류전형' | '1차전형' | '2차전형' | '최종전형' }) {
    try {
      const res = await this.axiosClient.put(
        `/recruiting`,
        {},
        {
          params: { recruitingId, status },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('putRecruiting>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
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
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** 기업별 채용공고 상세 (user)  ok */
  async getRecruitingDetail(accessToken, id) {
    try {
      const res = await this.axiosClient.get(`/recruiting/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getRecruiting>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }

  /** 약관 리스트 출력 (admin) ok */
  async getTerms(accessToken, type: 'service' | 'privacy' | 'information' | 'marketing'): Promise<IGetTerms> {
    if (!accessToken) return;
    try {
      const res = await this.axiosClient.get(`/terms?type=${type}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
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
      console.error(err?.response?.data?.errorMessage);
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
      console.error(err?.response?.data?.errorMessage);
      throw err;
      // throw new Error('에러가 왔어요');
    }
  }

  /** 약관 삭제 (admin) ok */
  async deleteTerms(accessToken, id): Promise<Data> {
    try {
      const res = await this.axiosClient.delete(`/terms/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('deleteTerms>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** 약관 상세보기 (admin) ok*/
  async getTermsDetail(accessToken, id): Promise<ItermsDetail> {
    if (!accessToken) return;
    try {
      const res = await this.axiosClient.get(`/terms/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('getTermsDetail>>', res.data);
      return res.data;
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
    }
  }
  /** 약관 status 변경: 최소 1개 공개해야함, (admin) ok*/
  async postTermsStatus(accessToken, { status, id }: { status: '공개' | '비공개'; id: unknown }) {
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
      console.error(err?.response?.data?.errorMessage);
    }
  }
}

const api = Axios.getInstance();
/** const ax = new Axios(); */

export default api;
