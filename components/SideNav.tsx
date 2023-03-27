import Link from "next/link";
import React from "react";
import styled from "styled-components";
import CompanyMembership from "../pages/admin/company-membership";
import Notification from "../pages/company/notification";
import { CgProfile } from "react-icons/cg";
import Avatar, { genConfig } from "react-nice-avatar";

export default function SideNav() {
  const config = genConfig("admin@email.com");
  return (
    <Wrapper>
      <Logo>
        <img src="/logo.png" alt="" />
      </Logo>

      <ul>
        <Link href="/admin/terms">
          <li>약관 관리</li>
        </Link>

        <Link href="/admin/company-membership">
          <li>기업 회원관리</li>
        </Link>

        <Link href="/community/notice">
          <li>공지사항</li>
        </Link>

        <Link href="/community/faq">
          <li>FAQ</li>
        </Link>

        <Link href="/community/cs">
          <li>1:1 문의</li>
        </Link>
      </ul>
      <DevLinks>
        <div>
          <Link href="/login">/login</Link>
          <Link href="/signup">/signup</Link>
        </div>

        <div>
          <Link href="/admin">/admin</Link>
          <Link href="/admin/terms">/admin/terms</Link>
          <Link href="/admin/terms/1">/admin/terms/1</Link>
          <Link href="/admin/company-membership">
            /admin/company-membership
          </Link>
          <Link href="/admin/mypage">/admin/mypage</Link>
        </div>

        <div>
          <Link href="/company">/company</Link>
          <Link href="/company/mypage">/company/mypage</Link>
          <Link href="/company/job-posting">/company/job-posting</Link>
          <Link href="/company/job-posting/1">/company/job-posting/1</Link>
          <Link href="/company/job-posting/new">/company/job-posting/new</Link>
          <Link href="/company/applicant-management">
            /company/applicant-management
          </Link>
          <Link href="/company/notification">/company/notification</Link>
          <Link href="/company/notice">/company/notice</Link>
          <Link href="/company/notice/1">/company/notice/1</Link>
          <Link href="/company/notice/new">/company/notice/new</Link>
        </div>
        <div>
          <Link href="/community/faq">/community/faq</Link>
          <Link href="/community/cs">/community/cs</Link>
          <Link href="/community/cs/1">/community/cs/1</Link>
          <Link href="/community/cs/new">/community/cs/new</Link>
          <Link href="/community/notice">/community/notice</Link>
          <Link href="/community/notice/1">/community/notice/1</Link>
          <Link href="/community/notice/new">/community/notice/new</Link>
        </div>
      </DevLinks>
      {/* <Profile>
        <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />
        <Mypage href="/admin/mypage">
          <CgProfile />
          마이페이지
        </Mypage>
      </Profile> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  width: 270px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-primary);
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    a {
      color: var(--color-point);
      font-weight: 500;
      font-weight: 400;
      width: 100%;

      li {
        padding: 15px 40px;
        :hover {
          font-weight: 700;
        }
      }
    }
  }
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 180px;
    height: 115px;
    padding: 40px 0;
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 200px;
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
  position: absolute;
  bottom: 0;
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
