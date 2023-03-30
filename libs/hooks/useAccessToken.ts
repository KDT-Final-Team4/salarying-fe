import { useState, useEffect } from 'react';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = getCookie('accessToken');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const saveAccessToken = (token: string) => {
    setAccessToken(token);
    setCookie('accessToken', token, 1);
  };

  const removeAccessToken = () => {
    setAccessToken(null);
    deleteCookie('accessToken');
  };

  return {
    accessToken,
    saveAccessToken,
    removeAccessToken,
  };
};

// Document.cookie에서 key에 해당하는 값을 반환하는 함수
function getCookie(key: string): string | null {
  const cookie = document.cookie.split(';');
  const cookiePair = cookie.find((cookie) => cookie.trim().startsWith(`${key}=`));
  if (!cookiePair) {
    return null;
  }
  return decodeURIComponent(cookiePair.split('=')[1]);
}

// Document.cookie에 key-value 값을 저장하는 함수
function setCookie(key: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Document.cookie에서 key에 해당하는 값을 삭제하는 함수
function deleteCookie(key: string) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
}

export default useAccessToken;
