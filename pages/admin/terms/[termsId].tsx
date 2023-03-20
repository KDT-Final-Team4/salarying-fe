import React from 'react';
import { useRouter } from 'next/router';

export default function TermsId() {
  const router = useRouter();
  const { termsId } = router.query;
  return <div>termsId: {termsId}</div>;
}
