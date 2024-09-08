import React, { useState } from "react";
import styles from '../styles/ParentsGrandparents.module.css';

const ParentsGrandparents = () => {
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
                <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
      <h1 className={styles.heading} id="about-program">Parents and Grandparents Program (PGP)</h1>
      <p className={styles.description}>
        Parents and grandparents are incredibly important in one’s life. They're like the foundation of our lives, helping us become who we are today. Many dream of bringing their parents and grandparents from their native countries to be together in Canada. The Family Reunification and Sponsorship program makes this possible.
      </p>
      <p className={styles.description}>
        The Parents and Grandparents Program (PGP) allows Canadian citizens and permanent residents to sponsor their parents and grandparents to immigrate to Canada.
      </p>
      
      <section className={styles.section}>
        <h2 className={styles.subheading} id="eligibility">Eligibility criteria for Sponsor of Parents and Grandparents Program (PGP):</h2>
        <ul className={styles.list}>
          <li>You can sponsor your parents and grandparents, related by blood or adoption. This includes your mother, father, step-parents, and grandparents. However, you cannot sponsor your parents' or grandparents' siblings, unless they are dependent children.</li>
        </ul>
        <h2 className={styles.subheading}>Eligibility criteria for Parents and Grandparents Program (PGP) PR Sponsorship:</h2>
        <ul className={styles.list}>
          <li>You should be a Canadian citizen or permanent resident.</li>
          <li>You must be at least 18 years old.</li>
          <li>You should be living in Canada.</li>
          <li>You are able to financially support your parents or grandparents.</li>
          <li>You do not have any criminal record.</li>
          <li>Meet income requirement for the past 3 years.</li>
        </ul>
        <p className={styles.tableTitle}>Make following table in format approved:</p>
        <a href="https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1445&top=14" className={styles.link} target="_blank" rel="noopener noreferrer">View Approved Format</a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading} id="how-to-apply">How to apply for the Parents and Grandparents Program (PGP)?</h2>
        <ul className={styles.list}>
          <li>The first step is to submit an Interest to Sponsor form on the IRCC website. This form allows you to express your interest in sponsoring your parents or grandparents and will help IRCC determine if you are eligible for the program.</li>
          <li>If your Interest to Sponsor form is approved, you will be invited to apply for the program.</li>
          <li>Once you get the ITA, complete the pending form that asks about you, your parents or grandparents, and your financial situation. Show proof of your income, like tax papers, etc.</li>
          <li>If your application is approved, your parents or grandparents need to apply for permanent residence.</li>
          <li>Wait for the revert. It takes 12 to 24 months, depending on how many applications they receive, for your application to process.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading} id="refusal-reasons">Common reasons for refusal of Parents and Grandparents Program (PGP)</h2>
        <ul className={styles.list}>
          <li>If you can't show you have enough money to support your parents or grandparents without help, your application will be refused. The minimum income needed is CAD 43,082 for a single sponsor and CAD 52,965 for a married or common-law couple. This income is for the year 2022 if you are applying for 2023/2024.</li>
          <li>Not meeting the income requirement for the previous 3 years.</li>
          <li>The parent or grandparent you're sponsoring failed to pass a medical check. They need to be healthy without serious conditions that could cost a lot for Canadian health care.</li>
          <li>The sponsored person couldn’t show they can fit into Canadian life. This means being willing to learn English or French and respecting Canadian rules.</li>
          <li>Giving incorrect information in your application could also lead to rejection.</li>
        </ul>
        <button className={styles.button}>Book Appointment</button>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading} id="why-choose-us">Still not Sure?</h2>
        <p className={styles.paragraph}>
          If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have achieved approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.
        </p>
        <p className={styles.paragraph}>
          At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.
        </p>
        <button className={styles.button}>Start Your Process</button>
      </section>

    </div>
    </>
  );
};

export default ParentsGrandparents;
