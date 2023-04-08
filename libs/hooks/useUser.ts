import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useCookies from './useCookies';
import api from '../client/axiosClient';
import { toast } from 'react-toastify';

export default function useUser() {
  const { accessToken, isAdmin } = useCookies();

  return useQuery({
    queryKey: ['user'],
    queryFn: () => api.getUserMe(accessToken),
    onSuccess: (data) => {},
    onError: (err) => toast.error('유저 데이터 받아오기 실패'),
    refetchOnWindowFocus: false,
  });
}
