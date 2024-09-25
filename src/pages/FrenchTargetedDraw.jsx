import React, { useState } from "react";
import styles from "../styles/FrenchTargetedDraw.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const FrenchTargetedDraw = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
        <h1 className={styles.heading} id="about-program">
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

        <section className={styles.benefits} id="benefits">
          <h2 className={styles.subheading}>
            Benefits of French Language Proficiency
          </h2>
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

        <section className={styles.expressEntryEligibility} id="eligibility">
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
              <ul>
                <li>
                  <Link
                    to="/federal-skilled-worker-program"
                    className={styles.link}
                  >
                    Federal Skilled Worker Program (FSW)
                  </Link>
                  : This program is ideal for tech workers who have the
                  necessary work experience, education, and language ability.
                </li>
                <li>
                  <Link to="/canadian-experience-class" className={styles.link}>
                    Canadian Experience Class (CEC)
                  </Link>
                  : Similar to the FSW program, the CEC is also suitable for
                  tech workers who have gained Canadian work experience.
                </li>
                <li>
                  <Link
                    to="/federal-skilled-trades-program"
                    className={styles.link}
                  >
                    Federal Skilled Trades Program (FSTP)
                  </Link>
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

        <section className={styles.frenchLanguageEligibility}>
          <h2 className={styles.subheading}>
            Eligibility Criteria for French Language Proficiency Category
          </h2>
          <ul>
            <li>
              You have CLB level 7 or higher in French.{" "}
              <Link to="/clb-ilets-calculator" className={styles.button}>
                CLB Calculator
              </Link>
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
        </section>

        <section className={styles.drawsHistory}>
          <h2 className={styles.subheading}>
            Express Entry French-Language Proficiency Draws History
          </h2>
          <p>
            The first-ever Express Entry draw targeted for the French language
            was held in February 2024. Express Entry draw 282 saw a CRS score of
            365 and invited 7000 candidates eligible for French language.
          </p>
          <Link to="/previous-draw-history" className={styles.button}>
            Previous Draw History
          </Link>
        </section>

        <section className={styles.support}>
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
          <Link
            id="book-appointment"
            to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj"
            className={styles.button}
          >
            Book Appointment
          </Link>
        </section>

        <section className={styles.whyChooseUs} id="why-choose-us">
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we offer expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
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
