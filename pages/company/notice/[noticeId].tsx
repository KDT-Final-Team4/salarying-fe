import React from 'react';
import { useRouter } from 'next/router';

export default function NoticeId() {
  const router = useRouter();
  const { noticeId } = router.query;
  return <div>noticeId : {noticeId}</div>;
}
