import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Notification from '../pages/company/notification';
import { CgProfile } from 'react-icons/cg';
import Avatar, { genConfig } from 'react-nice-avatar';
import { useRouter } from 'next/router';
import CustomLink from './CustomLink';
import AccordionMenu from './AccordionMenu';
import useAccessToken from '@/libs/hooks/useAccessToken';
import { MdOutlineQuestionAnswer, MdOutlineAnnouncement, MdManageAccounts, MdChromeReaderMode } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';
import { AiFillNotification } from 'react-icons/ai';
import Image from 'next/image';
import logoDarkPic from '../public/logo_dark.png';
import { toast } from 'react-toastify';
import Button_1 from './ui/Button_1';
import Button_2 from './ui/Button_2';

const termsNavs = [
  {
    title: '최종 약관',
    href: '/admin/terms',
  },
  { title: '약관별', href: '/admin/terms/service' },
];

const companyNav = [
  {
    title: '대쉬보드',
    href: '/company',
  },
  { title: '공고 리스트', href: '/company/job-posting' },
  { title: '(job-posting/2)', href: '/company/job-posting/2' },
  {
    title: '이메일 내역',
    href: '/company/notification',
  },
];
const communityNav = [
  {
    title: 'faq',
    href: '/community/faq',
  },
  {
    title: 'notice',
    href: '/community/notice',
  },
  {
    title: 'notice/1',
    href: '/community/notice/1',
  },
  {
    title: 'notice/new',
    href: '/community/notice/new',
  },
  {
    title: 'notice/edit/1',
    href: '/community/notice/edit/1',
  },
];
const adminNav = [
  { title: '/admin', href: '/admin' },
  { title: '/admin/terms', href: '/admin/terms' },
  { title: '/admin/terms/1', href: '/admin/terms/1' },
  { title: '/admin/company-membership', href: '/admin/company-membership' },
  { title: '/admin/mypage', href: '/admin/mypage' },
];
export default function SideNav() {
  const config = genConfig('admin@email.com');
  const router = useRouter();
  const [pathname, setPathname] = useState('');
  const { isAdmin, accessToken, removeAccessToken, removeIsAdmin } = useAccessToken();
  const textRef = useRef(null);
  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);

  const copyToken = () => {
    textRef.current.select();
    document.execCommand('copy', false, accessToken);
  };
  return (
    <Wrapper>
      <div>
        <HiddenToken onChange={() => {}} type="text" value={accessToken} ref={textRef} />
        <CopyToken onClick={copyToken}>{!accessToken ? '로그인필요' : isAdmin ? 'Copy관리자토큰' : 'Copy기업회원토큰'}</CopyToken>
        <Logo>{<Image src={logoDarkPic} alt="logo-dark" />}</Logo>

        <NavMenues>
          <AccordionMenu Icon={MdChromeReaderMode} title={'약관관리'} activeURL="/admin/terms" subNavs={termsNavs} />

          <CustomLink Icon={MdManageAccounts} href="/admin/company-membership">
            기업 회원관리
          </CustomLink>

          <CustomLink Icon={MdOutlineAnnouncement} href="/community/notice">
            공지사항
          </CustomLink>

          <CustomLink Icon={MdOutlineQuestionAnswer} href="/community/faq">
            FAQ
          </CustomLink>
          <AccordionMenu Icon={FaUserTie} title={'Company'} activeURL="/company" subNavs={companyNav} />
          <AccordionMenu Icon={AiFillNotification} title={'Community'} activeURL="/community" subNavs={communityNav} />
          <AccordionMenu Icon={AiFillNotification} title={'Admin'} activeURL="/admin" subNavs={adminNav} />
        </NavMenues>
        <DevLinks>
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
        </DevLinks>
      </div>

      {/* <Profile>
        <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />
        <Mypage href="/admin/mypage">
          <CgProfile />
          마이페이지
        </Mypage>
      </Profile> */}
      <Button_2
        style={{ width: '15rem', height: '3rem', margin: '1rem' }}
        name={'로그아웃'}
        color={'point'}
        type="button"
        onClick={() => {
          console.log('로그아웃 버튼 클릭');
          removeAccessToken();
          removeIsAdmin();
          router.replace('/login');
        }}
      ></Button_2>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-content: flex-start;
  justify-content: space-between;
  width: 270px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-lightgray);
  z-index: 99;
`;

const NavMenues = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)<any>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
  color: ${({ pathname, href }) => (href === pathname ? 'var(--color-gray600)' : 'var(--color-gray300)')};
  cursor: pointer;
  border: 1px solid red;
  border-radius: 10px;
  margin: 0 10px;
  padding: 0 10px;
  font-weight: 700;
  background-color: ${({ href, pathname }) => (href === pathname ? 'var(--color-point' : 'transparent')};
  &:hover {
    background-color: var(--color-orange400);
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

const CopyToken = styled.span`
  position: absolute;
  color: var(--color-green700);
  &:active {
    background-color: orange;
  }
`;
const HiddenToken = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;
