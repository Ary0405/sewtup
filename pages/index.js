import '@/styles/routes/main.scss';
import MainHero from "@/components/MainHero/MainHero";
import MainFoot from "@/components/MainFoot/MainFoot";
import MainCust from "@/components/MainCust/MainCust";
import MainMeet from "@/components/MainMeet/MainMeet";
import Hero from "@/components/Hero/Hero";
import Waste from "@/components/Waste/Waste";
import Navbar from "@/components/Navbar/Navbar";

export async function getServerSideProps(context) {

  const user = context.req.session.user;

  if (user === undefined) {
    return {
      props: { user: null }
    }
  }

  return {
    props: { user: user }
  }

}

export default function Home({ user }) {

  return (
    <>
      <div className="Main">
        <div className="Main__content">
          <div className="section">
            <Navbar user={user} />
          </div>
          <div id="home" className="section">
            <Hero />
          </div>
          <div id="about" className="section">
            <MainHero />
          </div>
          <div className="section">
            <img src="/Images/main_model.png" alt="main_model" className="Main__content--img" />
          </div>
          <div className="section">
            <MainCust />
          </div>
          {/* <div className="section">
            <Waste />
          </div> */}
          <div id="team" className="section">
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
