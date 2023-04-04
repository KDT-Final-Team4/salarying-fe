import React from 'react';

export default function useCookies() {
  const accessToken = getCookie('accessToken');
  return accessToken;
}

// Document.cookie에서 key에 해당하는 값을 반환하는 함수
function getCookie(key: string): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const cookie = window.document.cookie.split(';');
  const cookiePair = cookie.find((cookie) => cookie.trim().startsWith(`${key}=`));

  if (!cookiePair) {
    return null;
  }

  return decodeURIComponent(cookiePair.split('=')[1]);
}

// Document.cookie에 key-value 값을 저장하는 함수
function setCookie(key: string, value: string, days: number) {
  if (typeof window === 'undefined') {
    return;
  }

  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  window.document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Document.cookie에서 key에 해당하는 값을 삭제하는 함수
function deleteCookie(key: string) {
  if (typeof window === 'undefined') {
    return;
  }

  window.document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
}

function getToken() {
  return getCookie('accessToken');
}
function getIsAdmin() {
  return getCookie('isAdmin');
}
