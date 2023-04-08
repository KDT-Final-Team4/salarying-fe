interface IPerson {
  name: string;
  age: number;
}

enum httpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Data = {
  stateCode: number;
  success: boolean;
  data: any;
  message: string;
};
interface IGetUserMe extends Data {
  data: {
    companyName: string;
    companyPhoneNumber: string;
    email: string;
    name: string;
    position: string;
    lastSignIn: string;
    lastModified: string;
    status: string;
  };
}
interface IPostLogin extends Data {
  data: {
    token: string;
    role: 'USER' | 'ADMIN';
  };
}

type TTermsType = 'service' | 'privacy' | 'information' | 'marketing';
interface ITerms {
  type: TTermsType;
  version: string;
  title: string;
  content: string;
}
interface ItermsDetail extends Data {
  data: {
    content: string;
    name: string;
    status: '공개' | '비공개';
    title: string;
    type: string;
    version: string;
  };
}
interface IPutTerms {
  version: string;
  title: string;
  content: string;
  id: number;
}
interface ITermsWithId extends ITerms {
  id: string;
}
interface ITermsWithType {
  type: TTermsType;
  version: string;
  title: string;
  content: string;
}

interface IPostApplicantsPayload {
  recruitingId: number;
  email: string;
  name: string;
  number: string;
}
type TPostApplicantsMessagePayload = {
  recruitingId: number;
  applicantEmail: string;
  title: string;
  content: string;
  progress: string;
  status: string;
}[];

interface IGetApplicantsMessage extends Data {
  data: {
    applicantEmail: string;
    progress: string;
    recruitingName: string;
    sendDate: string;
    status: string;
  }[];
  message: string;
}

interface IPostRecruit {
  title: string;
  task: string;
  document: boolean;
  firstRound: boolean;
  secondRound: boolean;
  finalRound: boolean;
}

interface IPostRecruiting extends Data {
  message: string;
  data: {
    id: number;
    postDate: string;
    status: string;
    task: string;
    title: string;
  };
}

interface IGetTerms extends Data {
  message: string;
  data: {
    status: '공개' | '비공개';
    title: string;
    version: string;
    name: string;
    id: number;
  }[];
}

interface IGetCorporations extends Data {
  data: {
    company_name: string;
    name: string;
    position: string;
  }[];
}

interface IGetApplicants extends Data {
  data: {
    applicantNm: string;
    applicantTel: string;
    applicantEmail: string;
    progress: string;
    status: '합격' | '불합격';
  }[];
}

interface IPostApplicantsMessage {
  recruitingId: unknown;
  applicantEmail: string;
  title: string;
  content: string;
  progress: string;
  status: string;
}

interface INoticeDetail extends Data {
  adminEmail: string;
  adminName: string;
  content: string;
  id: number;
  postDate: string;
  status: boolean;
  title: string;
}

interface IFAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  status: boolean;
}

interface IGetFAQ extends Data {
  data: IFAQ[];
}

interface IRecruiting {
  id: number;
  title: string;
  postDate: string;
  task: '전산';
  status: '서류심사' | '서류전형' | '1차전형' | '2차전형' | '최종전형';
}
interface IGetRecruiting extends Data {
  data: IRecruiting[];
}
interface ITermsId {
  type: 'service' | 'privacy' | 'information' | 'marketing';
}
interface IStatus {
  status: '공개' | '비공개';
}
interface IStatusData {
  force: boolean;
  status: '공개' | '비공개';
  id: number;
}
