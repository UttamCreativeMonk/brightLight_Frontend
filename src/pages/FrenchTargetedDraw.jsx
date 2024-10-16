import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FrenchTargetedDraw.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const FrenchTargetedDraw = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/frenchTargetedDrawMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sectionsRef = useRef([]);

  const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add(styles.visible);
      } else {
        section.classList.remove(styles.visible);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>

      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Category-Based Express Entry Selection Draws: French Language
          Proficiency
        </h1>

        <section className={styles.introduction}>
          <p>
            If you are interested in applying under the French-language
            proficiency category in the Express Entry program, there are
            specific eligibility criteria that you need to fulfill. These
            criteria have been put in place to ensure that candidates possess
            the necessary language skills to contribute effectively to the
            Canadian workforce and society.
          </p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
            Benefits of French Language Proficiency
          </h2>
          <p>
            Discover the significance of strong French language skills in
            Canadian permanent residency (PR) applications:
          </p>
          <ul>
            <li>
              <strong>Leverage Targeted Draws by IRCC:</strong> The Immigration,
              Refugees, and Citizenship Canada (IRCC) has been conducting
              specialized draws for French language proficiency. These draws
              typically feature significantly lower competition compared to
              general draw categories. For instance, the latest draw, held on
              February 29, 2024 (Draw #287), saw the lowest score at only 336,
              inviting 2500 eligible candidates.
            </li>
            <li>
              <strong>Increase Your CRS Score:</strong> A robust command of
              French can substantially enhance your Comprehensive Ranking System
              (CRS) score, boosting your chances of obtaining permanent
              residency. A higher CRS score improves your likelihood of
              receiving invitations from Express Entry draws.
            </li>
            <li>
              <strong>Accelerate PR with Advanced French Proficiency:</strong>{" "}
              Scoring well on a French language test can elevate your CRS score,
              expediting your path to PR. A strong CRS score increases your
              chances of receiving invitations from Express Entry draws, thereby
              facilitating permanent residency.
            </li>
            <li>
              <strong>Access Diverse Job Opportunities:</strong> In Canada,
              proficiency in both English and French is often a prerequisite for
              numerous job positions. As the demand for French-speaking
              professionals rises, so do the prospects for skilled workers
              fluent in French. Strengthening your French language abilities
              expands your job market opportunities.
            </li>
            <li>
              <strong>Pursue Federal Government Roles:</strong> Proficiency in
              both French and English can make you an appealing candidate for
              various federal government positions. Many government jobs in
              Canada require bilingual proficiency, making French language
              proficiency a valuable asset for securing employment
              opportunities.
            </li>
            <li>
              <strong>Seamlessly Integrate into Canadian Society:</strong> With
              a significant segment of the Canadian population being French
              speakers, mastering French facilitates your integration into
              Canadian society. Fluency in French enhances communication and
              cultural assimilation, easing your settlement and adaptation
              within the community.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.expressEntryEligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            First You Must Be Eligible with Express Entry
          </h2>
          <p>
            Before you can participate in a French-language-specific draw
            through Canada's Express Entry system, you need to be eligible.
            Here's how you can get started:
          </p>
          <ol>
            <li>
              Join the Express Entry Pool: The first step towards becoming a
              candidate for a French-language-specific draw is to get into the
              Express Entry pool.
            </li>
            <li>
              Choose Your Program: There are three programs you can be eligible
              for to join the Express Entry pool:
              <ul >
                <li>
                <button
                className={styles.button02}
                onClick={() =>
                  (window.location.href = "/federal-skilled-worker-program")
                }>
                Federal Skilled Worker Program (FSW)
              </button>

                  : This program is ideal for tech workers who have the
                  necessary work experience, education, and language ability.
                </li>
                <li>
                <button
                className={styles.button02}
                onClick={() =>
                  (window.location.href = "/canadian-experience-class")
                }
              >
               Canadian Experience Class (CEC)
              </button>

                  : Similar to the FSW program, the CEC is also suitable for
                  tech workers who have gained Canadian work experience.
                </li>
                <li>
                <button
                className={styles.button02}
                onClick={() =>
                  (window.location.href = "/federal-skilled-trades-program")
                }
              >
                 Federal Skilled Trades Program (FSTP)
              </button>
                  : If you're a trades worker, this program is designed for you.
                  It requires proof of relevant work experience, education, and
                  language proficiency.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Remember, each program has its own set of eligibility requirements.
            So, make sure to review these carefully and ensure you meet all the
            necessary criteria before applying.
          </p>
        </section>

        <section
          className={`${styles.frenchLanguageEligibility} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for French Language Proficiency Category
          </h2>
          <p>
            Once you have met eligibility for one of the programs of Express
            Entry now you need to be eligible for the French-language
            proficiency category:
          </p>
          <ul>
            <li>
              You have CLB level 7 or higher in French.{" "}
              <button
                className={styles.button}
                onClick={() =>
                  (window.location.href = "/clb-ilets-calculators")
                }
              >
                CLB Calculators
              </button>
            </li>
            <li>A valid Express Entry profile.</li>
          </ul>
          <p>
            In addition to meeting the language requirements, it is crucial to
            fulfill all the requirements outlined in the instructions for the
            specific round you are applying for. These instructions provide
            detailed information about the eligibility criteria, documentation,
            and any additional requirements that must be met in order to be
            considered for the French-language proficiency category. We will be
            providing information for each round as soon as IRCC provides any
            update.
          </p>
          <p>
            To obtain complete eligibility details for the French-language
            proficiency category, it is essential to review the instructions for
            each round. These instructions provide comprehensive information
            about the specific requirements that must be met in order to be
            eligible for this category.
          </p>
        </section>

        <section
          className={`${styles.drawsHistory} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry French-Language Proficiency Draws History
          </h2>
          <p>
            The first-ever Express Entry draw targeted for the French language
            was held in February 2024. Express Entry draw 282 saw a CRS score of
            365 and invited 7000 candidates eligible for French language.
          </p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            Previous Draw History
          </button>
        </section>


        
        <section
          className={`${styles.support} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            Contact Brightlight Immigration today to assess your profile and
            embark on a transformative journey towards achieving your Canadian
            dream. With over a decade of experience, we specialize in handling
            Express Entry Programs. Our approval rate for these programs is
            nearly 100%. We achieve this with a tailored approach to your
            specific case, using similar successful cases as precedents.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your PR. Start your
            process now.
          </p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>
{/* 
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we offer expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
        </section> */}
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}>
          <h2>Why Choose Us?</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling Immigration applications with a high success rate.
            </li>
            <li>
              <strong>Tailored Approach:</strong> Personalized services and
              strategies based on your specific case.
            </li>
            <li>
              <strong>High Success Rate:</strong> Proven track record using case
              law and precedents for positive results.
            </li>
            <li>
              <strong>Comprehensive Support:</strong> Assistance from the start
              of the application process to obtaining your PR.
            </li>
          </ul>
        </section>
      </div>

      <div id="faqs">
        <FAQ />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blogs">
        <RecentBlogs />
      </div>

      <Footer1 />
    </>
  );
};

export default FrenchTargetedDraw;
