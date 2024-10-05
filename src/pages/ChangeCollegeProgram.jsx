import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/ChangeCollegeProgram.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const ChangeCollegeProgram = () => {
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={`${styles.heading} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el} >
          Change Your College or Program in Canada (DLI Change)
        </h1>
        <p className={styles.intro}>
          The decision to change colleges or programs is significant and often
          driven by a desire to explore new opportunities, enhance your skill
          set, or align with your evolving career goals. Whether you're seeking
          a more challenging curriculum, a more supportive learning environment,
          or a better fit with your personal values, understanding your
          motivations is crucial for making an informed choice.
        </p>
        <p className={styles.intro}>
          If you are an international student in Canada, you have the
          flexibility to change your college or program of study while
          maintaining your valid study permit. However, the process and
          requirements for changing schools vary depending on your eligibility
          and the new institution you intend to attend. For the most up-to-date
          information and handling your case, please contact our office at
          604-503-3734.
        </p>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[1] = el}>
          <h2 className={styles.subheading}>
            Eligibility Criteria for Changing Your College or Program in Canada
            (DLI Change)
          </h2>
          <ul className={styles.eligibilityList}>
            <li>
              Your original study permit must still be valid or have an
              extension application pending.
            </li>
            <li>The new institution and program must be acceptable to IRCC.</li>
          </ul>
        </section>

        <section className={`${styles.process} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>
            How to Change Your College or Program in Canada (DLI Change)
          </h2>
          <h4 className={styles.processDescription}>
            If your study permit has not yet been approved:
          </h4>
          <ul className={styles.processList}>
            <li>
              Obtain a letter of acceptance from the new Designated Learning
              Institution (DLI). This letter should confirm your admission to
              the new program and indicate the start date of your studies.
            </li>
            <li>Submit a new study permit application.</li>
          </ul>
          <h4 className={styles.processDescription}>
            If your study permit has already been approved:
          </h4>
          <ul className={styles.processList}>
            <li>
              Notify IRCC of your change of school or program by logging into
              your online account on the IRCC website and updating your personal
              information.
            </li>
            <li>
              Submit a new letter of acceptance from the new DLI. This letter
              should be sent directly to IRCC by the new school.
            </li>
            <li>
              Review your study permit. Your study permit will remain valid
              until the expiry date, but you may need to update it if your
              program is longer than the one you were originally accepted into.
            </li>
            <li>
              In some cases, you may also need to apply for a new work permit if
              you are eligible to work while studying.
            </li>
          </ul>
        </section>

        <section className={`${styles.refusals} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
            Reasons for Refusals for Changing Your College or Program in Canada
            (DLI Change)
          </h2>
          <ul className={styles.refusalList}>
            <li>
              If your academic background is not strong enough for the new
              program, IRCC will refuse your application.
            </li>
            <li>
              Failing to have enough funds to support yourself and pay for your
              tuition and living expenses while in Canada.
            </li>
            <li>Not having a valid reason for changing schools or programs.</li>
            <li>
              Not providing all required documentation such as a letter of
              acceptance from the new school, financial documentation, and other
              supporting documents.
            </li>
            <li>Having a criminal record.</li>
          </ul>
        </section>

        <section className={`${styles.callToAction} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[4] = el}>
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p className={styles.callToActionText}>
            If you have faced a refusal for any of the reasons mentioned above,
            don't worry. With over 10 years of experience, we specialize in
            handling previously refused cases. We have successfully secured
            approval for students who have had multiple refusals, long gaps in
            education, and are of mature age.
          </p>
          <p className={styles.callToActionText}>
            We achieve this by tailoring our approach to your specific case and
            addressing each concern raised by the officer in previous refusals.
            Using case law, we identify similar cases with positive outcomes and
            apply them as precedents. This is why we have a high success rate,
            with over 90% approval in such cases. At Brightlight Immigration, we
            have a dedicated team of visa application specialists ready to
            assist you from the start of the application process to obtaining
            your visa. Start your process now.
          </p>
          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Start your process now
            </button>
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

export default ChangeCollegeProgram;
