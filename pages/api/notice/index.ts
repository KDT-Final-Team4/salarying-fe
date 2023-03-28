import type { NextApiRequest, NextApiResponse } from "next";

enum httpMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case httpMethod.GET:
      return res.status(200).json({
        stateCode: 200,
        success: true,
        data: [
          {
            id: 1,
            title: "공지사항 제목 1",
            edit_id: "aaa@aaa.com",
            date: "YYYY-MM-DD HH-MM-SS",
            state: true,
          },
          {
            id: 2,
            title: "공지사항 제목 2",
            edit_id: "aaa@aaa.com",
            date: "YYYY-MM-DD HH-MM-SS",
            state: false,
          },
        ],
      });
  }
}
