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
  data: any[];
};
