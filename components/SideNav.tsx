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
import useCookies from '@/libs/hooks/useCookies';
import Button_2 from './ui/Button_2';
import { BiLogOut } from 'react-icons/bi';
import useUser from '@/libs/hooks/useUser';

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
  const router = useRouter();
  const [pathname, setPathname] = useState('');
  const { removeAccessToken, removeIsAdmin } = useAccessToken();
  const { isAdmin, accessToken } = useCookies();
  const textRef = useRef(null);
  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);

  const { data } = useUser();

  const config = genConfig(isAdmin ? 'admin@email.com' : data?.data?.email);

  return (
    <Wrapper>
      {/* <HiddenToken onChange={() => {}} type="text" value={accessToken} ref={textRef} />
      <CopyToken onClick={() => {
    textRef.current.select();
    document.execCommand('copy', false, accessToken);
  }}>{!accessToken ? '로그인필요' : isAdmin ? 'Copy관리자토큰' : 'Copy기업회원토큰'}</CopyToken> */}
      <Logo>{<Image src={logoDarkPic} alt="logo-dark" />}</Logo>
      <ProfileCard>
        <span>{!accessToken ? '로그인 필요' : isAdmin ? '관리자 계정' : data?.data?.email}</span>
        <Logout
          onClick={() => {
            console.log('로그아웃 버튼 클릭');
            removeAccessToken();
            removeIsAdmin();
            router.replace('/login');
          }}
        >
          <BiLogOut />
          <div>로그아웃</div>
        </Logout>
      </ProfileCard>
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-content: flex-start;
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

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 70px;

  padding: 0 15px;
  padding-bottom: 20px;
  transition: all 0.2s;
  /* border: 1px solid red; */
  gap: 10px;
  span {
    color: var(--color-gray400);
  }

  & > div:last-child {
  }
`;

const Logout = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  cursor: pointer;
  color: var(--color-emerald500);
  transition: color 0.1s;
  & > svg {
    position: relative;
    top: 1px;
  }
  &:hover {
    color: var(--color-emerald400);
  }
`;