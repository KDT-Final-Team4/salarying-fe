import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export default function DevLinks() {
  return (
    <Wrapper>
      <div>
        <Link href="/login">/login</Link>
        <Link href="/signup">/signup</Link>
      </div>

      {/* <div>
          <Link href="/admin">/admin</Link>
          <Link href="/admin/terms">/admin/terms</Link>
          <Link href="/admin/terms/1">/admin/terms/1</Link>
          <Link href="/admin/company-membership">/admin/company-membership</Link>
          <Link href="/admin/mypage">/admin/mypage</Link>
        </div> */}

      {/* <div>
          <Link href="/company">/company</Link>
          <Link href="/company/job-posting">/company/job-posting</Link>
          <Link href="/company/job-posting/2">/company/job-posting/2</Link>
          <Link href="/company/job-posting/new">/company/job-posting/new</Link>
          <Link href="/company/applicant-management">/company/applicant-management</Link>
          <Link href="/company/applicant-management/category/1">/company/applicant-management/category/1</Link>
          <Link href="/company/notification">/company/notification</Link>
        </div> */}
      {/* <div>
          <Link href="/community/faq">/community/faq</Link>
          <Link href="/community/notice">/community/notice</Link>
          <Link href="/community/notice/1">/community/notice/1</Link>
          <Link href="/community/notice/new">/community/notice/new</Link>
          <Link href="/community/notice/edit/1">/community/notice/edit/1</Link>
        </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    &:hover {
      background-color: var(--color-orange50);
    }
    a {
      color: var(--color-gray600);
      &:hover {
        background-color: var(--color-orange200);
      }
    }
  }
`;
