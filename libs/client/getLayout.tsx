import { ReactElement } from 'react';
import SNBLayout from '@/components/layout/SNBLayout';

export const getSNBLayout = (page: ReactElement) => {
  return <SNBLayout>{page}</SNBLayout>;
};
