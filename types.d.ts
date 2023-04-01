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
    status: string;
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
    status: string;
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
    status: string;
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
  data: {
    adminEmail: string;
    adminName: string;
    content: string;
    id: number;
    postDate: string;
    status: boolean;
    title: string;
  };
}
