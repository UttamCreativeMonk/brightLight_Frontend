import React, { useState } from "react";
import styles from "../styles/WorkPermit.module.css";

const ReplyToPflPage = () => {
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
        <h1>Work Permit</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Are you considering a rewarding career and professional growth in Canada?</h2>
          <p>The Canadian Work Permit is your key to accessing these exciting professional opportunities.</p>
          <p>Canada is a top choice for people worldwide looking to advance their careers. To work in Canada, international workers need a temporary document called a work permit. This permit allows them to legally take on employment in the country, and it's available for a broad range of occupations, skill levels, and immigration statuses.</p>
        </section>

        <section className={styles.section}>
          <h2>Pathways to Get a Work Permit</h2>
          <div className={styles.pathways}>
            <div className={styles.pathway}>
              <img src="/images/open-work-permit.png" alt="Open Work Permit" className={styles.icon} />
              <h3><Link to="/open-work-permit">Open Work Permit</Link></h3>
              <p>An open work permit allows you to work for any employer in Canada. Learn more about the eligibility criteria and application process.</p>
            </div>
            <div className={styles.pathway}>
              <img src="/images/lmia-work-permit.png" alt="LMIA-Based Work Permit" className={styles.icon} />
              <h3><Link to="/lmia-work-permit">Labour Market Impact Assessment (LMIA)-Based Work Permit</Link></h3>
              <p>This permit is employer-specific and requires a positive LMIA. Discover the steps involved in obtaining this permit.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Here’s How We Can Help You</h2>
          {/* Embed the process section from the homepage here */}
          <p>Our experienced team can assist you throughout the work permit application process, ensuring that all requirements are met and your application stands the best chance of approval.</p>
        </section>
      </main>
    </div>
    </>
  );
};

export default ReplyToPflPage;
