import { useRouter } from "next/router";
import '@/styles/routes/main.scss';
import MainHero from "@/components/MainHero/MainHero";
import { useState } from "react";
import MainFoot from "@/components/MainFoot/MainFoot";
import MainCust from "@/components/MainCust/MainCust";
import MainMeet from "@/components/MainMeet/MainMeet";
import MainMission from "@/components/MainMission/MainMission";
import Image from 'next/image';
import Hero from "@/components/Hero/Hero";
import Waste from "@/components/Waste/Waste";

export default function Home() {

  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);

  const handleLoginClick = () => {
    router.push('/auth/login');
};

  return (
    <>
      <div className="Main">
        <div className="Main__sidebar">
          <div className="Main__sidebar--sub1">
            <i>
              S.
            </i>
          </div>
          <div className="Main__sidebar--sub2" onClick={() => setSidebar(!sidebar)} style={{
            cursor: 'pointer'
          }}>
            <img src="/dots.svg" alt="dots" />
          </div>
          <div className="Main__sidebar--sub3">
          </div>
        </div>
        {
          sidebar ? <div className="Main__collapse">
            <div className="Main__collapse--sub">
              <p className="Main__collapse--sub--title">
                ABOUT
              </p>
              <p className="Main__collapse--sub--text">
                Discover the story behind Sew't Up
              </p>
            </div>
            <hr />
            <div className="Main__collapse--sub">
              <p className="Main__collapse--sub--title">
                TEAM</p>
              <p className="Main__collapse--sub--text">
                Get to know the faces behind the stitches
              </p>
            </div>
            <hr />
            <div className="Main__collapse--sub">
              <p className="Main__collapse--sub--title">
                CONTACT
              </p>
              <p className="Main__collapse--sub--text">
                Let's chat! Connect with Sew't Up
              </p>
            </div>
            <hr />
            <div className="Main__collapse--sub" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
              <p className="Main__collapse--sub--title">
                LOGIN
              </p>
              <p className="Main__collapse--sub--text">
                Access your custom design portal
              </p>
            </div>
          </div> : null
        }

        <div className="Main__content" style={{
          zIndex: sidebar ? -1 : 1
        }}>
          <div className="section">
            <Hero />
          </div>
          <div className="section">
            <MainHero />
          </div>
          <div className="section">
            <img src="/Images/main_model.png" alt="main_model" className="Main__content--img" />
          </div>
          <div className="section">
            <MainMission />
          </div>
          <div className="section">
            <MainCust />
          </div>
          <div className="section">
            <Waste />
          </div>
          <div className="section">
            <MainMeet />
          </div>
          <div className="section">
            <img src="/Images/multiple_models.png" alt="main_model2" className="Main__content--img" />
          </div>
          <div className="section">
            <MainFoot />
          </div>
        </div>
      </div >

    </>
  );
}
