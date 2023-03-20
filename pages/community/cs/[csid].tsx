import React from 'react';
import { useRouter } from 'next/router';

export default function CsId() {
  const router = useRouter();
  const { csId } = router.query;
  return <div>csId : {csId}</div>;
}
