import { useRouter } from "next/router";
import '@/styles/root/root.scss';
import MainHero from "@/components/MainHero/MainHero";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <MainHero />
    </>
  );
}
