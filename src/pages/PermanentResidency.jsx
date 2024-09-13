import React, { useState } from "react";
import styles from "../styles/PermanentResidency.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import studyVisaImg from "../assets/graduatedStudent.png";
import OurProcess from "../sections/OurProcess";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import RecentBlogs from "../sections/RecentBlogs";
import Testimonials from "../sections/Testimonials";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
const PermanentResidency = () => {
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
    <Helmet>
  <title>Permanent Residency in Canada - Brightlight Immigration</title>
  <meta
    name="description"
    content="Explore how Brightlight Immigration can help you achieve permanent residency in Canada. Learn about the process, requirements, and how our expert team provides guidance and support throughout your immigration journey."
  />
  <meta
    name="title"
    property="og:title"
    content="Permanent Residency in Canada - Brightlight Immigration"
  />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:type" content="image/png" />
  <meta
    property="og:description"
    content="Discover the steps to obtaining permanent residency in Canada with Brightlight Immigration. Our dedicated team offers expert advice and support to help you navigate the immigration process successfully."
  />
  <meta
    name="Keywords"
    content="Permanent Residency, Canada, Immigration Services, Brightlight Immigration, Immigration Process"
  />
</Helmet>

      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div className={styles.bannerHeading}>
            <h1>Permanent Residency</h1>
            <p>
              Canada welcomes thousands of skilled individuals from around the
              world every year. With a thriving economy, high living standards,
              and better opportunities, it's no wonder so many aspire to call it
              home.
            </p>
          </div>

          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the program
              </p>
              <p onClick={() => scrollToSection("Pathways-becoming-PR")}>
                Pathways to PR
              </p>
              <p onClick={() => scrollToSection("Our-process")}>Our process</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div id="about-program" className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <p>
            The Canadian Permanent Residency (PR) Program, managed by
            Immigration, Refugees and Citizenship Canada (IRCC), allows foreign
            nationals to obtain permanent resident status in Canada. This status
            gives you the right to live, work, and study in Canada indefinitely,
            with the same rights and freedoms as Canadian citizens (except
            voting and running for office).
          </p>

          <p>
            There are different PR programs available, each with its own
            eligibility requirements and application process. For over a decade,
            we have successfully processed thousands of PR applications
            successfully. We will provide you all the information you need to
            explore your options and help you select the best one for you.
          </p>
        </div>

        <div className={styles.canadianImg}>
          <img src={ServiceImg} alt="Permanent Residency" />
        </div>
      </div>

      <div id="Pathways-becoming-PR" className={styles.pathwayParent}>
        <div className={styles.pathway}>
          <div className={styles.pathwayHeading}>
            <h1>Pathways to Becoming a PR</h1>
          </div>

          <div className={styles.pathwayCardsParent}>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="Express Entry" />
              <h2>Express Entry</h2>
            </div>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="Pilot Program" />
              <h2>Pilot Program</h2>
            </div>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="PNP" />
              <h2>PNP</h2>
            </div>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="RNIP" />
              <h2>RNIP</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="Our-process">
        <OurProcess />
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

export default PermanentResidency;
