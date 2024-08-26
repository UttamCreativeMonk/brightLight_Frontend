import React from "react";
import styles from "../styles/About.module.css";
import AboutLogo from "../assets/brightlight-main-logo.webp";
import AboutDesign from "../assets/aboutDesign.png";
import VisionImg from "../assets/vision.png";
import PillarSectionLogo from "../assets/pillars.png";
import INTEGRITY from "../assets/integrity1.png";
import RESPONSIBILITY from "../assets/responsibility.png";
import Reliability from "../assets/reliability.png";
import WeAreImg from "../assets/we-are-1.png";
import SocialMoblile from "../assets/Layer 1.png";
import VisaImg from "../assets/visa.png";
import TickBlue from "../assets/tick-blue.png";
import SmileBlue from "../assets/smile-blue.png";
// import BlueMap from "../assets/blue-map.png";
// import BestChoice from "../assets/best-choice.png";

import TiktokBlue from "../assets/tiktok1Icon.png";
import LinkedinBlue from "../assets/linkedin1Icon.png";
import InstaBlue from "../assets/insta.png";
import FacebookBlue from "../assets/facebook1Icon.png";
import YoutubeBlue from "../assets/youtube1Icon.png";
import Director1 from "../assets/loveneeth-founder.webp";
import Director2 from "../assets/sumir.webp";
import Twelve from "../assets/12-years22.png";
import Comprehensive from "../assets/comprehensive11.png";

import BestChoice from "../sections/BestChoice.jsx";

import Map from "../sections/Map.jsx";
import Navbar1 from "../components/Navbar1.jsx";
import Footer from "../components/Footer.jsx";

let About = () => {
  return (
    <>
      <Navbar1 />
      <div className={styles.aboutBanner}>
        <div className={styles.aboutUsTopContentSection}>
          <div className={styles.aboutLogo}>
            <img src={AboutLogo} alt="err" />
          </div>
          <div className={styles.aboutHeading}>
            <h1>The Guiding Light for a Brighter Future!</h1>
          </div>
          <div className={styles.aboutUsFeaturesSection}>
            <div className={styles.aboutUsFeature}>
              <img src={Twelve} alt="err" />
              <p>
                Trusted Canadian Immigration expert with over 12 years of
                experience.
              </p>
            </div>
            <div className={styles.aboutUsFeature}>
              <img src={Comprehensive} alt="err" />

              <p>Providing comprehensive immigration services.</p>
            </div>
          </div>
        </div>
        <div className={styles.bannerParaParent}>
          <p className={styles.bannerPara}>
            Bright Light Immigration Inc. is a trusted immigration consulting
            firm based in Vancouver, serving Globally. We provide comprehensive
            services to individuals seeking to immigrate to Canada. We
            understand every twist and turn of the complex immigration process,
            whether its permanent residency, temporary residency, student visas,
            family reunification, work permits, LMIAs, caregiver services, PR
            renewal, or citizenship. We streamline and expedit the process to a
            level you never thought possible.
          </p>
        </div>
      </div>

      <div className={styles.foundationMainSection}>
        <div className={styles.foundation}>
          <div className={`${styles.foundationInside} ${styles.foundation1}`}>
            <img src={AboutDesign} alt="err" />
            <div className={`${styles.designContent} ${styles.designContent1}`}>
              <h1>OUR FOUNDATION</h1>
              <h3 className={styles.borderBottomFoundation}>
                Creating continuous possibilities for your immigration goals.
              </h3>
              {/* <hr /> */}
              <h3>Make lasting connections with you based on trust.</h3>
            </div>
          </div>
          <div className={styles.foundationContentSection}>
            <p>
              We're driven by a passion to create continuous possibilities for
              those who seek our guidance for Canadian immigration. We believe
              that immigration is not just about paperwork and procedures, it is
              about making the way for individuals to pursue their dreams,
              connect with loved ones or build a better future.
            </p>

            <p>
              Unlike some immigration agencies, we're dedicated to putting your
              interest first and providing personalized and tailored approach
              towards your query. We understand that each case is unique, and we
              take the time to understand your individual circumstances and
              goals. Our meticulous process ensures that your immigration
              journey is as smooth and successful as possible. Ultimately, our
              goal is to foster a lasting connection with our clients, built on
              trust and responsibility.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.visionMainSection}>
        {/* // */}

        <div className={styles.vision}>
          <div className={styles.visionContentSection}>
            <p>
              Our vision is pretty simple and straightforward, i.e., to help as
              many aspiring immigrants as possible achieve their dream of
              living, visiting or studying in Canada. We aspire to establish
              ourselves as the leading immigration service provider, leaving a
              legacy through remarkable client success stories.
            </p>
          </div>
          <div className={styles.visionInside}>
            <div className={styles.visionInsideImg}>
              <img src={VisionImg} alt="err" />
            </div>
            <div className={styles.designContent}>
              <h1>Our Vision</h1>
              <h3>Guiding aspiring clients for a brighter future in Canada.</h3>
              <hr />
              <h3>Leading the immigration industry with pioneering success.</h3>
            </div>
          </div>
        </div>

        {/* // */}
      </div>

      <div className={styles.pillarParent}>
        <div className={styles.pillarSection}>
          <div className={styles.pillarLogo}>
            <img src={PillarSectionLogo} alt="err" />
            <div className={styles.pillarLogoContent}>
              <h2>Our Pillars</h2>
              <p>
                We uphold the highest ethical standards, take responsibility for
                our actions and our clients needs, and fulfill our commitments
                to achieve successful outcomes. Integrity, responsibility and
                reliability are the pillars of our brand and the driving forces
                behind our success.
              </p>
            </div>
          </div>
          {/* / */}

          <div className={styles.pillarFeatureSection}>
            <div className={styles.pillarFeatureSvg}>
              <img src={INTEGRITY} alt="err" />
              <h4>INTEGRITY</h4>
              <p>We stand behind our word</p>
            </div>

            <div className={styles.pillarFeatureSvg}>
              <img src={RESPONSIBILITY} alt="err" />

              <h4>RESPONSIBILITY</h4>
              <p>We take our commitment</p>
              <p>seriously</p>
            </div>

            <div className={styles.pillarFeatureSvg}>
              <img src={Reliability} alt="err" />
              <h4>RELIABILITY</h4>
              <p>You can count us, always</p>
            </div>
          </div>

          {/* / */}
        </div>
      </div>

      <div className={styles.meetDirectorsParent}>
        <div className={styles.meetDirectorMain}>
          <h1>Meet the Directors</h1>
        </div>
        <div className={styles.thedirectors}>
          <div className={styles.meetDirectorimgContent}>
            <h1>Loveneet Paneswar</h1>
            <h3>Founder & RCIC Consultant</h3>
            <p>
              Loveneet Paneswar, the "guiding light" of Brightlight Immigration,
              is one of the firm's founders and a Regulated Canadian Immigration
              Consultant (RCIC) with over a decade of experience and an
              exceptional track record of success.
            </p>
          </div>
          <div className={styles.meetDirectorImg}>
            <img src={Director1} alt="err" />
          </div>
        </div>
        {/* // */}
        <div className={styles.thedirectors}>
          <div className={styles.meetDirectorImg}>
            <img src={Director2} alt="err" />
          </div>
          <div className={styles.meetDirectorimgContent}>
            <h1>Sumir Paneswar</h1>
            <h3>Co-Founder & Chief Client Manager</h3>
            <p>
              Sumir Paneswar is another founding member of Brightlight
              Immigration. Mr. Sumir is our Chief Client Manager & brand's
              Spokesperson, deeply committed to addressing all of our clients
              inquiries and concerns.
            </p>
          </div>
        </div>
        {/* // */}
      </div>

      <div className={styles.weAreParent}>
        <div className={styles.weAreParentImg}>
          <img src={WeAreImg} alt="err" />
        </div>
      </div>

      <div className={styles.ourAchivementParent}>
        <p className={styles.andSymbol}>&</p>
        <div className={styles.ourAchivementSection}>
          <div className={styles.ourAchivementHeading}>
            <h1>Our achievements are continually growing</h1>
          </div>

          <div className={styles.ourAchivementCardParent}>
            {/* / */}
            <div className={styles.ourAchivementCard}>
              <img src={VisaImg} alt="err" />
              <h2>15,745+</h2>
              <p>VISA PROCESSED</p>
            </div>

            <div className={styles.ourAchivementCard}>
              <img src={TickBlue} alt="err" />
              <h2>14688+</h2>
              <p>SUCCESS STORIES</p>
            </div>

            <div className={styles.ourAchivementCard}>
              <img src={SmileBlue} alt="err" />
              <h2>14934+</h2>
              <p>HAPPY CLIENTS</p>
            </div>
            {/* / */}
          </div>
        </div>
      </div>

      <BestChoice />

      <div className={styles.socialPresenceParent}>
        <div className={styles.socialPresence}>
          <h1>Our Social Presence</h1>
          <p>
            Looking for the latest Canadian immigration news and insights? Want
            to see how we've helped past clients achieve their goals? Or maybe
            you just want some reassurance that we'll handle your case with
            care? Well, you're in luck! Our social media platforms are buzzing
            with all that and more.
          </p>

          <p>
            So, what are you waiting for? Head over to our social media pages,
            give us a follow, and join the conversation! We promise it'll be
            worth your time.
          </p>

          <div className={styles.socialMoblileImgDiv}>
            <img src={SocialMoblile} alt="err" />
          </div>

          <div className={styles.socialPresenceIconsParent}>
            <p>Find Us On</p>
            <div className={styles.socialPresenceIcons}>
              <a href="#">
                <img src={TiktokBlue} alt="err" />
              </a>
              <a href="#">
                <img src={LinkedinBlue} alt="err" />
              </a>
              <a href="#">
                <img src={InstaBlue} alt="err" />
              </a>
              <a href="#">
                <img src={FacebookBlue} alt="err" />
              </a>
              <a href="#">
                <img src={YoutubeBlue} alt="err" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.vancouverParent}>
        <div className={styles.vancouver}>
          <h1>We are Vancouver based, serving Globally.</h1>
        </div>
      </div>

      <Map />

      <Footer />
    </>
  );
};
export default About;
