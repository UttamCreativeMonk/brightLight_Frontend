import React, { useState } from "react";
import styles from "../styles/PilotPrograms.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";



const PilotPrograms = () => {
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
              <p onClick={() => scrollToSection("pilot-program")}>Pilot Program</p>

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
      <h1 className={styles.heading} id="about-program">Canada’s Pilot Programs</h1>

      <div className={styles.introduction}>
        <p>
          The diverse economy of Canada offers various opportunities to advance your career in fields such as agriculture and more.
        </p>
        <p>
          Canada's Pilot Programs are temporary immigration programs designed to address the specific needs of certain Canadian regions or communities. These programs aim to attract skilled, semi-skilled, and unskilled workers to fill labor shortages in various sectors and contribute to the economic growth and development of those areas. Many times, these programs become permanent, providing more PR opportunities.
        </p>
      </div>

      <div className={styles.pilotPrograms} id="pilot-program">
        <h2 className={styles.subheading}>Here is one of the Pilot Programs</h2>
        <ul>
          <li>
            <a href="/agri-food-pilot-program" className={styles.button}>
              Agri-Food Pilot
            </a>
          </li>
          {/* You can add more pilot programs here in a similar format */}
        </ul>
      </div>

      <div className={styles.whyChooseUs}>
        <h2 className={styles.subheading} id="why-choose-us">Why Choose Us</h2>
        <p>
          At Brightlight Immigration, we provide expert guidance through Canada’s various immigration programs, including Pilot Programs. Our team of experienced consultants is dedicated to helping you navigate the complexities of immigration, ensuring that you have the best chance of success. We tailor our services to meet your unique needs and provide a high level of personalized support throughout the application process.
        </p>
        <p>
          Our success rate speaks for itself, with a near-perfect approval rate for our clients. By choosing us, you benefit from our extensive knowledge, commitment to your case, and proven track record. Let us help you make your Canadian immigration journey a smooth and successful one.
        </p>
        <a href="/contact-us" className={styles.button}>Contact Us</a>
      </div>
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

export default PilotPrograms;
