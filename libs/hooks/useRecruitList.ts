import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../client/axiosClient';
import useCookies from './useCookies';
import { toast } from 'react-toastify';

export default function useRecruitList() {
  const { accessToken, isAdmin } = useCookies();
  return useQuery({
    queryKey: ['recruitList'],
    queryFn: () => api.getRecruiting(accessToken),
    refetchOnWindowFocus: false,
    onSuccess: () => {},
    // onError: (err) => toast.error('recruitList 데이터 받아오기 실패'),
  });
}
