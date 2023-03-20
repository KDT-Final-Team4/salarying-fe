import { useRouter } from 'next/router';
import React from 'react';

export default function JobPostingId() {
  const router = useRouter();
  const { jobPostingId } = router.query;
  return <div>jobPostingId: {jobPostingId}</div>;
}
