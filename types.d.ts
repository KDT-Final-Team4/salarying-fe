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
};

interface IPostLogin {
  stateCode: number;
  success: boolean;
  data: {
    token: string;
    role: 'USER' | 'ADMIN';
  };
  message: string;
}

interface IPostAdminPassword extends Data {
  message: string;
}

interface ITerms {
  version: string;
  title: string;
  content: string;
}
interface ITermsWithId extends ITerms {
  id: string;
}
interface ITermsWithType extends ITerms {
  type: string;
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
