import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <p onClick={() => {router.push('/customer/customerDashboard')}}>Customer</p>
      <p onClick={() => {router.push('/browse')}}>Designer</p>
    </>
  );
}
