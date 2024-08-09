import React from "react";
import styles from "../styles/About.module.css";
import AboutLogo from "../assets/brightlight-main-logo.webp";
import AboutDesign from "../assets/aboutDesign.png";
import VisionImg from "../assets/vision.png";
import PillarSectionLogo from "../assets/pillars.png";
// import { ReactComponent as Responsibility } from "../assets/responsibility.svg";
import { ReactComponent as Responsibility } from "../assets/handsShake.svg";
import WeAreImg from "../assets/we-are.png";
import VisaImg from "../assets/visa.png";
import BlueMap from "../assets/blue-map.png";
import BestChoice from "../assets/best-choice.png";
import InstaBlue from "../assets/insta.png";

let About = () => {
  return (
    <>
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
              <div>
                <img />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                nihil.
              </p>
            </div>
            <div className={styles.aboutUsFeature}>
              <div>
                <img />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                nihil.
              </p>
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
          <div className={styles.foundationInside}>
            <img src={AboutDesign} alt="err" />
            <div className={styles.designContent}>
              <h1>OUR FOUNDATION</h1>
              <h3>
                Creating continuous possibilities for your immigration goals.
              </h3>
              <hr />
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
              <Responsibility width={100} height={100} />
              <h4>INTEGRITY</h4>
              <p>We stand behind our word</p>
            </div>

            <div className={styles.pillarFeatureSvg}>
              <Responsibility width={100} height={100} />
              <h4>INTEGRITY</h4>
              <p>We take behind our commitment</p>
              <p>seriously</p>
            </div>

            <div className={styles.pillarFeatureSvg}>
              <Responsibility width={100} height={100} />
              <h4>INTEGRITY</h4>
              <p>You can count us, always</p>
            </div>
          </div>

          {/* / */}
        </div>
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
              <img src={VisaImg} alt="err" />
              <h2>15,745+</h2>
              <p>VISA PROCESSED</p>
            </div>

            <div className={styles.ourAchivementCard}>
              <img src={VisaImg} alt="err" />
              <h2>15,745+</h2>
              <p>VISA PROCESSED</p>
            </div>
            {/* / */}
          </div>
        </div>
      </div>

      <div className={styles.bestChoiceParent}>
        <div className={styles.bestChoice}>
          <div className={styles.bestChoiceHeading}>
            <h2>What makes us the best choice for you?</h2>
          </div>
          <img src={BestChoice} alt="err" />
        </div>
      </div>

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

          <div className={styles.socialPresenceIconsParent}>
            <p>Find Us On</p>
            <div className={styles.socialPresenceIcons}>
              <a href="#">
                <img src={InstaBlue} alt="err" />
              </a>
              <a href="#">
                <img src={InstaBlue} alt="err" />
              </a>
              <a href="#">
                <img src={InstaBlue} alt="err" />
              </a>
              <a href="#">
                <img src={InstaBlue} alt="err" />
              </a>
              <a href="#">
                <img src={InstaBlue} alt="err" />
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

      <div className={styles.mapParent}>
        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27462.752602531727!2d76.74414563737653!3d30.63835165105361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febb05ee7e45b%3A0xa17a586890ee2175!2sGmada%20Aerocity%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1723022976691!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className={styles.theButton} role="button">
            Find Us On Maps
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
