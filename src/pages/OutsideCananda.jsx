import React, { useState } from "react";
import styles from '../styles/OutsideCananda.module.css';
import { Link } from 'react-router-dom';

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
  
    return (
      <>
        {/* <Navbar1 /> */}
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
      <h1 className={styles.heading} id="about-program">Student Visa: Outside Canada</h1>
      <p className={styles.intro}>
        So, you've set your sights on pursuing higher education in the vibrant and diverse world of Canada, where you'll be surrounded by fellow students from all corners of the globe, your mind buzzing with intellectual discussions and creative endeavors. Studying in Canada is an excellent option for international students seeking quality education and a vibrant cultural experience. To pursue studies in Canada, you will require a valid study permit. This permit will allow you to legally live and study in the country while attending a designated learning institution (DLI).
      </p>

      <section className={styles.programs} id="programs">
        <h2 className={styles.subheading}>Two Main Programs to Consider</h2>
        <div className={styles.buttonContainer}>
          <Link to="/sds" className={styles.button}>Student Direct Stream (SDS) Study Visa</Link>
          <Link to="/non-sds" className={styles.button}>Non-Student Direct Stream (Non-SDS) Study Visa</Link>
        </div>
      </section>

      <section className={styles.callToAction} id="why-choose-us">
        <h2 className={styles.subheading}>Why Choose Us</h2>
        <p className={styles.callToActionText}>
          At Brightlight Immigration, we have a dedicated team of experts ready to assist you through every step of your study permit application process. Our extensive experience and success rate ensure that your application is handled with the utmost care and professionalism. Whether you are applying under the Student Direct Stream or the Non-Student Direct Stream, we provide personalized services to meet your unique needs.
        </p>
        <a href="/book-appointment" className={styles.button}>Book Appointment</a>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.subheading}>Clients Testimonials</h2>
        <div className={styles.testimonialsContainer}>
          {/* Implement your video and written testimonials here */}
          {/* Option to hide/display testimonials in backend */}
        </div>
      </section>
    </div>

    </>
  );
};

export default OutsideCananda;
