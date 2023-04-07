// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import withHandler from '@/libs/server/withHandler';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  stateCode: number;
  success: boolean;
  data: unknown;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password, companyNm, companyTel } = req.body;
  const { recruiting_id } = req.query;
  switch (req.method) {
    case httpMethod.GET:
      return res.status(200).json({
        stateCode: 0,
        success: true,
        data: {},
        message: `성공입니다! ${recruiting_id}`,
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
