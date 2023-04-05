import type { NextApiRequest, NextApiResponse } from 'next';

enum httpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case httpMethod.GET:
      return res.status(200).json({
        stateCode: 200,
        success: true,
        message: 'ok',
        data: [
          {
            id: 1,
            title: '공지사항 제목 1',
            adminName: 'aaa@aaa.com',
            state: true,
          },
          {
            id: 2,
            title: '공지사항 제목 2',
            adminName: 'aaa@aaa.com',
            state: false,
          },
        ],
      });
  }
}
