import { useRouter } from "next/router";
import '@/styles/root/root.scss';
import MainHero from "@/components/MainHero/MainHero";
import MainFoot from "@/components/MainFoot/MainFoot";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <div className="section">
        <MainHero />
      </div>
      <div className="section">
        <MainFoot />
      </div>
    </>
  );
}
