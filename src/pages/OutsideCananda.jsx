import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OutsideCananda.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const OutsideCananda = () => {
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("programs")}>Programs</p>
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
          Student Visa: Outside Canada
        </h1>
        <p className={styles.intro}>Your Study Permit from Outside Canada</p>
        <p className={styles.intro}>
          So, you've set your sights on pursuing higher education in the vibrant
          and diverse world of Canada, where you'll be surrounded by fellow
          students from all corners of the globe, your mind buzzing with
          intellectual discussions and creative endeavors. Read on then.
        </p>
        <p className={styles.intro}>
          Studying in Canada is an excellent option for international students
          seeking quality education and a vibrant cultural experience. To pursue
          studies in Canada, you will require a valid study permit. This permit
          will allow you to legally live and study in the country while
          attending a designated learning institution (DLI).
        </p>

        <section
          className={`${styles.programs} ${styles.section}`}
          id="programs"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>Two Main Programs to Consider</h2>
          <div className={styles.buttonContainer}>
            <Link to="/sds" className={styles.button}>
              Student Direct Stream (SDS) Study Visa
            </Link>
            <Link to="/non-sds" className={styles.button}>
              Non-Student Direct Stream (Non-SDS) Study Visa
            </Link>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling BCPNP applications with a high success rate.
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

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p className={styles.callToActionText}>
            At Brightlight Immigration, we have a dedicated team of experts
            ready to assist you through every step of your study permit
            application process. Our extensive experience and success rate
            ensure that your application is handled with the utmost care and
            professionalism. Whether you are applying under the Student Direct
            Stream or the Non-Student Direct Stream, we provide personalized
            services to meet your unique needs.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj"
            className={styles.buttonBook}
          >
            Book Appointment
          </a>
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

export default OutsideCananda;
