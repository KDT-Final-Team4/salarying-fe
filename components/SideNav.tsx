import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import CompanyMembership from '../pages/admin/company-membership';
import Notification from '../pages/company/notification';

export default function SideNav() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href='/admin/terms'>약관 관리</Link>
        </li>

        <li>
          <Link href='/company/applicant-management'>기업 회원관리</Link>
        </li>

        <li>
          <Link href='/community/notice'>공지사항</Link>
        </li>

        <li>
          <Link href='/community/faq'>FAQ</Link>
        </li>

        <li>
          <Link href='/community/cs'>1:1 문의</Link>
        </li>
      </ul>
      <DevLinks>
        <div>
          <Link href='/login'>/login</Link>
          <Link href='/signup'>/signup</Link>
        </div>

        <div>
          <Link href='/admin'>/admin</Link>
          <Link href='/admin/terms'>/admin/terms</Link>
          <Link href='/admin/terms/1'>/admin/terms/1</Link>
          <Link href='/admin/company-membership'>
            /admin/company-membership
          </Link>
          <Link href='/admin/mypage'>/admin/mypage</Link>
        </div>

        <div>
          <Link href='/company'>/company</Link>
          <Link href='/company/mypage'>/company/mypage</Link>
          <Link href='/company/job-posting'>/company/job-posting</Link>
          <Link href='/company/job-posting/1'>/company/job-posting/1</Link>
          <Link href='/company/job-posting/new'>/company/job-posting/new</Link>
          <Link href='/company/applicant-management'>
            /company/applicant-management
          </Link>
          <Link href='/company/notification'>/company/notification</Link>
          <Link href='/company/notice'>/company/notice</Link>
          <Link href='/company/notice/1'>/company/notice/1</Link>
          <Link href='/company/notice/new'>/company/notice/new</Link>
        </div>
        <div>
          <Link href='/community/faq'>/community/faq</Link>
          <Link href='/community/cs'>/community/cs</Link>
          <Link href='/community/cs/1'>/community/cs/1</Link>
          <Link href='/community/cs/new'>/community/cs/new</Link>
          <Link href='/community/notice'>/community/notice</Link>
          <Link href='/community/notice/1'>/community/notice/1</Link>
          <Link href='/community/notice/new'>/community/notice/new</Link>
        </div>
      </DevLinks>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 150vh;
  width: 200px;
  background-color: aliceblue;
  border: 3px solid red;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 50px;
    li {
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;
      border-bottom: 1px solid var(--color-gray300);
      a {
        display: flex;
        width: 100%;
      }
    }
  }
`;

const DevLinks = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    &:hover {
      background-color: var(--color-gray100);
    }
    a {
      &:hover {
        background-color: var(--color-orange300);
      }
    }
  }
`;
