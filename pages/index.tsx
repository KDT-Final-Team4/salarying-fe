import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import firebase from '@/firebase';
import { v4 } from 'uuid';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  return <Main>내용</Main>;
}
