import React, { useState } from "react";
import styles from "../styles/Pgwp.module.css";
import { Link } from "react-router-dom";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const Pgwp = () => {
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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
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
      <header className={styles.header}>
        <h1>Canada’s Post-Graduate Work Permit (PGWP)</h1>
        <p>If you are an international student who has graduated from a designated learning institution (DLI) in Canada, you may be eligible for a Post-Graduation Work Permit (PGWP).</p>
      </header>

      <section className={styles.benefits}>
        <h2>Benefits of a Post-Graduate Work Permit (PGWP)</h2>
        <ul>
          <li><strong>Valuable Canadian Work Experience:</strong> Enhance your career prospects and increase your chances of obtaining permanent residency in Canada.</li>
          <li><strong>Professional Networking:</strong> Build your network and explore new career opportunities that can help you establish yourself in the Canadian job market.</li>
          <li><strong>Career Exploration:</strong> Explore different career options and find a job that aligns with your skills and interests.</li>
        </ul>
      </section>

      <section className={styles.eligibility}>
        <h2>Eligibility Criteria for Post-Graduate Work Permit (PGWP)</h2>
        <p>Are you eligible for a PGWP? Let's find out.</p>
        <ul>
          <li><strong>Graduation from a Qualifying DLI:</strong> Be a foreign national who has graduated from a qualifying DLI and qualifying program.</li>
          <li><strong>No Previous PGWP:</strong> Must never have held a PGWP before.</li>
          <li><strong>Study Authorization:</strong> Had authorization to study in Canada that expired in the 180 days immediately preceding the PGWP application.</li>
          <li><strong>Program Duration:</strong> Must have completed a full-time program of at least eight months, leading to a diploma, certificate, or degree.</li>
          <li><strong>Full-Time Status:</strong> Maintained full-time student status throughout the program of study.</li>
          <li><strong>Passing Grades:</strong> Achieved a minimum passing grade in courses.</li>
          <li><strong>Clean Record:</strong> No criminal convictions.</li>
        </ul>
      </section>

      <section className={styles.applicationProcess}>
        <h2>How to Apply for Post-Graduate Work Permit (PGWP)</h2>
        <p>Meet the eligibility criteria? Here’s how you can apply for PGWP:</p>
        <ul>
          <li><strong>Application Location:</strong> You can apply for a PGWP from inside or outside Canada.</li>
          <li><strong>Required Documents:</strong>
            <ul>
              <li>A copy of your study permit.</li>
              <li>A copy of your final academic transcripts OR a letter from your school confirming your graduation.</li>
              <li>A copy of your passport.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.refusalReasons}>
        <h2>Common Reasons for Refusal of Post-Graduate Work Permit (PGWP)</h2>
        <ul>
          <li>Failure to meet the eligibility criteria set by IRCC.</li>
          <li>Not completing a full-time program of at least eight months at a qualifying DLI.</li>
          <li>Studying part-time during any period other than the final semester.</li>
          <li>Study permit expired before graduation without applying for an extension or restoration of status.</li>
        </ul>
      </section>

      <section className={styles.consultation}>
        <h2>Still Not Sure?</h2>
        <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have successfully obtained approvals for clients with multiple previous refusals through a tailored approach, addressing each concern listed in previous refusals and using case law as precedents. This high success rate is why our clients trust us.</p>
        <p>At Brightlight Immigration, our dedicated team of visa application specialists can assist you from start to finish. Start your process now!</p>
      </section>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us</h2>
        <p>[Content for why choose us]</p>
      </section>

      <section className={styles.testimonials}>
        <h2>Clients Testimonials</h2>
        <div>
          <h3>Video Testimonials</h3>
          <p>[Video testimonials content with option to hide]</p>
        </div>
        <div>
          <h3>Written Testimonials</h3>
          <p>[Written testimonials content with option to hide]</p>
        </div>
      </section>

      <section className={styles.faq}>
        <h2>FAQs Made Simple</h2>
        <dl>
          <dt>What is a PGWP?</dt>
          <dd>The PGWP is a temporary work permit that allows international students who have graduated from a Canadian Designated Learning Institution (DLI) to work in Canada after they graduate.</dd>
          
          <dt>How long is a PGWP valid for?</dt>
          <dd>The length of your PGWP depends on the length of your study program:
            <ul>
              <li>If your program was less than eight months, you are not eligible for a PGWP.</li>
              <li>If your program was at least eight months but less than two years, your PGWP will be valid for up to the same length as your study program.</li>
              <li>If your program was two years or more, your PGWP will be valid for up to three years.</li>
            </ul>
          </dd>
          
          <dt>Can I travel outside Canada while I have a PGWP?</dt>
          <dd>Yes, you can travel outside Canada while you have a PGWP. However, ensure that your PGWP and TRV are still valid when you return to Canada.</dd>
          
          <dt>Can I work while I am waiting for my PGWP application to be processed?</dt>
          <dd>Yes, you can work while waiting for your PGWP application to be processed if you have a valid study permit.</dd>
          
          <dt>What is the processing time for a PGWP application?</dt>
          <dd>The processing time for a PGWP application varies, but it typically takes about 45 days. You can also obtain a PGWP at one of the ports of entry through a process called flagpoling.</dd>
        </dl>
      </section>

      <section className={styles.blogs}>
        <h2>Blogs</h2>
        <p>[Content for related blogs]</p>
      </section>
    </div>
    </>
  );
};

export default Pgwp;