import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import CompanyMembership from '../pages/admin/company-membership';
import Notification from '../pages/company/notification';
import { CgProfile } from 'react-icons/cg';
import Avatar, { genConfig } from 'react-nice-avatar';

export default function SideNav() {
  const config = genConfig('admin@email.com');
  return (
    <Wrapper>
      <Profile>
        <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
      </Profile>
      <Mypage href='/admin/mypage'>
        <CgProfile />
        마이페이지
      </Mypage>
      <ul>
        <Link href='/admin/terms'>
          <li>약관 관리</li>
        </Link>

        <Link href='/admin/company-membership'>
          <li>기업 회원관리</li>
        </Link>

        <Link href='/community/notice'>
          <li>공지사항</li>
        </Link>

        <Link href='/community/faq'>
          <li>FAQ</li>
        </Link>

        <Link href='/community/cs'>
          <li>1:1 문의</li>
        </Link>
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
          <Link href='/company/applicant-management/category/1'>
            /company/applicant-management/category/1
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
          <Link href='/community/notice/edit/1'>/community/notice/edit/1</Link>
        </div>
      </DevLinks>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2a36b8;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    a {
      color: #fff;
      font-weight: 400;
      text-align: center;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 10px 0;
        :hover {
          background-color: #000c8e;
        }
      }
    }
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 250px;
  background-color: #000c8e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DevLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: auto;

  div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    &:hover {
      background-color: #000c8e;
    }
    a {
      color: #fff;
      &:hover {
        color: #000c8e;
        background-color: var(--color-gray100);
      }
    }
  }
`;

const Mypage = styled(Link)`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  color: #fff;
  svg {
    box-sizing: content-box;
    padding-right: 5px;
    color: #fff;
  }
`;
