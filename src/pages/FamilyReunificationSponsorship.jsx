import React, { useState } from "react";
import styles from "../styles/FamilyReunificationSponsorship.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const FamilyReunificationSponsorship = () => {
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
        <title>Family Sponsorship - Brightlight Immigration</title>
        <meta
          name="description"
          content="Explore how Brightlight Immigration can assist you with Family Sponsorship. Learn about the application process, eligibility requirements, and how our expert team provides support to help you reunite with your loved ones in Canada."
        />
        <meta
          name="title"
          property="og:title"
          content="Family Sponsorship - Brightlight Immigration"
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="Find out how Brightlight Immigration can help with Family Sponsorship. Our dedicated team offers expert guidance and comprehensive support to help you navigate the process and bring your family together in Canada."
        />
        <meta
          name="Keywords"
          content="Family Sponsorship, Immigration Services, Brightlight Immigration, Sponsorship Application, Family Reunification, Immigration Support"
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
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>

              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
        <header className={styles.header} id="about-program">
          <h1>Family Reunification and Sponsorship</h1>
          <p>
            Canada is renowned for its welcoming spirit and commitment to
            diversity, making it a haven for immigrants looking for a better
            life. When it comes to family reunification, Canada has established
            a comprehensive program that allows Canadian citizens and permanent
            residents to bring their loved ones to the country.
          </p>
          <p>
            Canada's Family Reunification Program is one of the three main
            pathways to permanent residency in Canada, alongside economic
            immigration and refugee protection. It allows Canadian citizens and
            permanent residents to sponsor certain relatives to immigrate to
            Canada as permanent residents.
          </p>
        </header>

        <section className={styles.categories} id="categories">
          <h2>Categories Who Can Be Sponsored</h2>
          <ul>
            <li>
              <a href="/common-law-partner-permanent" className={styles.button}>
                Spouses and Common-Law Partners
              </a>
            </li>
            <li>
              <a href="/dependent-children" className={styles.button}>
                Dependent Children
              </a>
            </li>
            <li>
              <a href="/humanitarian-compassionate" className={styles.button}>
                Humanitarian and Compassionate
              </a>
            </li>
            <li>
              <a href="/orphan" className={styles.button}>
                Orphan
              </a>
            </li>
            <li>
              <a href="/adoption" className={styles.button}>
                Adoption
              </a>
            </li>
            <li>
              <a href="/ParentsGrandparents" className={styles.button}>
                Parents and Grandparents
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2>
            Eligibility Criteria for Family Reunification and Sponsorship
            Program
          </h2>
          <ul>
            <li>
              <strong>Age:</strong> Should be at least 18 years old.
            </li>
            <li>
              <strong>Residency:</strong> Should be a Canadian citizen or
              permanent resident.
            </li>
            <li>
              <strong>Support:</strong> Should be physically and financially
              able to support the person being sponsored.
            </li>
            <li>
              <strong>Criminal Record:</strong> Have a clean criminal record.
            </li>
            <li>
              <strong>Housing:</strong> Should be able to provide adequate
              housing for the person being sponsored.
            </li>
          </ul>
        </section>

        <section className={styles.applicationProcess} id="application-process">
          <h2>
            How to Apply for the Family Reunification and Sponsorship Program
          </h2>
          <ol>
            <li>
              Complete a comprehensive application form, providing detailed
              information about yourself, your relationship to the person being
              sponsored, and your financial and housing arrangements.
            </li>
            <li>
              Pay the application fee for sponsorship, which is currently
              CAD$1,080 for spousal sponsorship and CAD$1,080 for parent and
              grandparent sponsorship.
            </li>
            <li>
              If the sponsorship application is approved, the person you are
              sponsoring will receive an invitation to apply for permanent
              residence.
            </li>
            <li>
              Ensure the person you are sponsoring completes a separate
              permanent residence application, providing details about their
              education, work experience, and language skills.
            </li>
          </ol>
        </section>

        <section className={styles.refusalReasons} id="refusal-reasons">
          <h2>Reasons for Refusals of Family Reunification and Sponsorship</h2>
          <ul>
            <li>Incomplete or inaccurate information in the application.</li>
            <li>
              Failure to demonstrate the financial capability to support the
              family members.
            </li>
            <li>
              Inadequate proof of the genuineness of the relationship between
              the sponsor and the person being sponsored.
            </li>
          </ul>
        </section>

        <section className={styles.consultation} id="why-choose-us">
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have successfully obtained approvals
            for clients with multiple previous refusals by using a tailored
            approach, addressing each concern listed in previous refusals, and
            applying case law precedents. Our high success rate is a testament
            to our expertise.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa.{" "}
            <a href="#book-appointment" className={styles.button}>
              Start your process now
            </a>
          </p>
        </section>

        <section className={styles.process}>
          <h2>Here’s How We Can Help You</h2>
          <p>[Insert the process section content from the homepage here]</p>
        </section>
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <FAQ />
      </div>
      <div id="blogs">
        <RecentBlogs />
      </div>
      <Footer1 />
    </>
  );
};

export default FamilyReunificationSponsorship;
