import React, { useState } from "react";
import styles from "../styles/FederalSkilledTradesProgram.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";




const FederalSkilledTradesProgram = () => {
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("express-entry")}>Express Entry</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}> Refusal Reasons </p>
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
      <h1 className={styles.heading} id="about-program">Federal Skilled Trades Program (FSTP)</h1>

      <section className={styles.introduction}>
        <p>
          If you're a skilled tradesperson with a passion for building, fixing, or creating, Canada's Federal Skilled Trades Program (FSTP) can open doors to a rewarding career and a fulfilling new life in Canada.
        </p>
        <p>
          The Federal Skilled Trades Program (FSTP) is an immigration pathway for skilled tradespeople who want to become permanent residents of Canada. It is one of several streams under the Express Entry immigration system, designed to address labor shortages in Canada's skilled trades sector. Skilled tradespeople are in high demand across Canada in various industries, including construction, manufacturing, and healthcare.
        </p>
      </section>

      <section className={styles.eligibility} id="eligibility">
        <h2 className={styles.subheading}>Eligibility Criteria for Federal Skilled Trades Program (FSTP)</h2>
        <ul>
          <li>Two years of paid full-time work experience (or an equal amount of part-time work experience) in a skilled trade within the last five years.</li>
          <li>Your work experience must be in one of the following categories:
            <ul>
              <li>Major Group 72: Technical Trades and Transportation Officers and Controllers</li>
              <li>Major Group 73: General Trades</li>
              <li>Major Group 82: Supervisors in Natural Resources, Agriculture, and Related Production</li>
              <li>Major Group 83: Occupations in Natural Resources and Related Production</li>
              <li>Major Group 92: Processing, Manufacturing, and Utilities Supervisors, and Utilities Operators and Controllers</li>
              <li>Major Group 93: Central Control and Process Operators and Aircraft Assembly Assemblers and Inspectors</li>
              <li>Minor Group 6320: Cooks, Butchers, and Bakers</li>
              <li>Unit Group 62200: Chefs</li>
            </ul>
          </li>
          <li>Have a valid job offer from a Canadian employer or be certified in your trade by a recognized Canadian body.</li>
          <li>Meet the language requirements for English or French, as set out by IRCC.</li>
          <li>Have the ability to financially support yourself or your dependents in Canada.</li>
          <li>Be admissible to Canada, meaning you do not have any criminal convictions or health issues that would prevent you from living in Canada.</li>
          <li>Plan to reside outside the province of Quebec because Quebec selects its skilled workers independently.</li>
        </ul>
      </section>

      <section className={styles.expressEntry} id="express-entry">
        <h2 className={styles.subheading}>Express Entry FSTP Draws History</h2>
        <p>
          For the latest updates on Express Entry draws, <Link to="/express-entry-draws-history" className={styles.link}>click here</Link>.
        </p>
      </section>

      <section className={styles.applicationProcess} id="how-to-apply">
        <h2 className={styles.subheading}>How to Apply for the Federal Skilled Trades Program (FSTP)</h2>
        <ol>
          <li>Create an Express Entry profile and submit it to Immigration, Refugees and Citizenship Canada (IRCC). For a stress-free solution, let us handle your case for you. <Link to="https://book.brightlightimmigration.ca/calendar-page" className={styles.link}>Click here</Link>.</li>
          <li>Receive an invitation to apply (ITA) from IRCC. ITAs are issued to candidates who score high enough on the Comprehensive Ranking System (CRS). For a CRS Calculator, <Link to="/crs-calculator" className={styles.link}>click here</Link>.</li>
          <li>Submit a complete application, including supporting documents such as work experience certificates, language test results, and credentials.</li>
          <li>Provide biometrics, which includes fingerprints and a photo.</li>
          <li>Obtain a medical exam and undergo security screening.</li>
        </ol>
      </section>

      <section className={styles.refusalReasons} id="refusal-reasons">
        <h2 className={styles.subheading}>Common Reasons for Refusals of the Federal Skilled Trades Program (FSTP)</h2>
        <ul>
          <li>Inadequate qualifications: You do not have the necessary skills, education, or experience to perform the job duties.</li>
          <li>Insufficient language proficiency: Your language skills do not meet the demands of the position.</li>
          <li>Inadequate finances: You cannot show sufficient funds to support yourself or your family during their stay in the country.</li>
          <li>Incomplete or inaccurate application: Your application is missing essential documents or contains errors.</li>
          <li>Weak ties to your home country: You did not prove to have a strong connection to your home country, such as property or family obligations.</li>
        </ul>
      </section>

      <section className={styles.support}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>
          If you have received a refusal for any of the reasons mentioned above or have doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%, achieved through a tailored approach to your specific case and using similar successful cases as precedents.
        </p>
        <p>
          At Brightlight Immigration, our dedicated team of visa application specialists will assist you from the start of the application process all the way to obtaining your PR. Start your process now.
        </p>
        <Link id="book-appointment" to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</Link>
      </section>

      <section className={styles.whyChooseUs} id="why-choose-us">
        <h2 className={styles.subheading}>Why Choose Us?</h2>
        <p>
          At Brightlight Immigration, we offer expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.
        </p>
      </section>
    </div>
    <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="faqs">
        <FAQ/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
    <Footer1/>
    </>
  );
};

export default FederalSkilledTradesProgram;
