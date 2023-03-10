import Main from '@/components/Main';

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log(apiKey);
  return <Main>내용</Main>;
}
