import api from '@/libs/client/axiosClient';
import useAccessToken from '@/libs/hooks/useAccessToken';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function MyPage() {
  const { accessToken, saveAccessToken, removeAccessToken } = useAccessToken();

  const handleClick = async () => {
    const res = await api.postLogin({
      email: 'test@email.com',
      password: 'test@1234',
    });
    saveAccessToken(res.data.token);
    console.log(res.data.token);
  };
  return (
    <>
      <div onClick={handleClick}>mypage</div>
    </>
  );
}
