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

// admin-controller

/\*_ 비밀번호 변경 (admin) _/
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

/\*_ 비밀번호 확인 (admin) ok _/
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

/\*_ 관리자 별 담당 기업 리스트 출력 (admin) ok _/
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

// login-controller
/** 회원가입 (user) ok \*/
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
/** 로그인 (user) ok \*/
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

/\*_ Admin로그인 (admin) ok _/
async postAdminLogin({ email, password }: { [key: string]: string }): Promise<IPostLogin> {
try {
const res = await this.axiosClient.post('/admin/login', { email, password });
console.log('postAdminLogin', res.data);
return res.data;
} catch (err) {
console.error(err?.response?.data?.errorMessage);
}
}

// applicant-controller
/\*_ 지원자 리스트 출력 (user) ok _/
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

/\*_ 지원자 progress,status수정 (user) ok _/
async putApplicants(accessToken, { recruitingId, progress, status, email }) {
try {
const res = await this.axiosClient.post(
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

}

const api = new Axios();
/\*_ const ax = new Axios(); _/

export default api;
