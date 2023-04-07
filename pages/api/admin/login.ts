// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  stateCode: number;
  success: boolean;
  data: unknown;
  message: string;
};

enum httpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;

  switch (req.method) {
    case httpMethod.POST:
      return res.status(200).json({
        stateCode: 200,
        success: true,
        data: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcInRlc3RAdGVzdC5jb21cIixcInJvbGxcIjpcIlVTRVJcIixcImp3dFR5cGVcIjpcIkFDQ0VTU1wiLFwiZW5hYmxlZFwiOmZhbHNlLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpbe1wiYXV0aG9yaXR5XCI6XCJVU0VSXCJ9XSxcImNyZWRlbnRpYWxzTm9uRXhwaXJlZFwiOmZhbHNlLFwidXNlcm5hbWVcIjpcInRlc3RAdGVzdC5jb21cIixcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2V9IiwiaXNzIjoiNCB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2Nzk0NTg5NzQsImV4cCI6MTY3OTU0NTM3NH0.CZ5ruRNMfhHWqXlzf9bFRV-jXg8fxzJp1kWVW3ykTRQ',
        message: `로그인 성공 email: ${email}, password: ${password}`,
      });
    default:
      return res.status(200).json({
        stateCode: 200,
        success: false,
        data: null,
        message: '잘못된 http 요청입니다.',
      });
  }
}
