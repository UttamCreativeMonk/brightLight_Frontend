import React, { useState } from "react";
import styles from '../styles/Orphan.module.css';

const Orphan = () => {
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
      <h1 className={styles.heading}>Canada's Orphan Sponsorship Program</h1>
      <p className={styles.description}>
        The Canada Orphan Sponsorship Program gives orphaned kids a chance to be with their Canadian relatives or start a new life in Canada. This special program is all about care and kindness, helping these children overcome challenges and have a life full of possibilities.
      </p>
      <section className={styles.section}>
        <h2 className={styles.subheading}>Eligibility criteria for a Sponsor:</h2>
        <ul className={styles.list}>
          <li>You must be a Canadian citizen or permanent resident who has lived in Canada for at least one year.</li>
          <li>You must be at least 18 years old.</li>
          <li>Show you can financially support the orphan, covering basics like housing, food, clothes, and education.</li>
          <li>If you, as a sponsor, are not presently living in Canada, then you must relocate back into Canada by the time the adopted child attains permanent residency.</li>
          <li>Have a safe place for the orphan, with a separate bedroom.</li>
          <li>You should have a good character and a clean criminal record. You must not have been convicted of any serious crimes or have a record of child abuse or neglect.</li>
          <li>Have a close relationship like being a grandparent, aunt, uncle, sibling, or other relative to the orphan.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Who is eligible as an Orphan under Canada Orphan Sponsorship Program?</h2>
        <ul className={styles.list}>
          <li>You are under 18 years of age.</li>
          <li>You do not possess Canadian citizenship presently.</li>
          <li>You are unmarried and not in a common-law partnership.</li>
          <li>At the time of applying, 1 or more of your parents must be a Canadian citizen.</li>
          <li>You are ineligible if the sponsoring parent was born outside Canada to a Canadian citizen or if the sponsoring parent acquired Canadian citizenship through adoption-related provisions.</li>
        </ul>
        <p className={styles.paragraph}>In addition, the adoption must:</p>
        <ul className={styles.list}>
          <li>Have been in the best interests of the child;</li>
          <li>Have created a genuine relationship between parent and child;</li>
          <li>Have been in accordance with the laws of the place where the adoption took place and the laws of the country of residence of the adopting citizen;</li>
          <li>Not have occurred in a manner that circumvented the legal requirements for international adoptions;</li>
          <li>Not have been entered into primarily for the purpose of acquiring a status or privilege in relation to immigration or citizenship.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>How to apply for sponsoring an Orphan?</h2>
        <ul className={styles.list}>
          <li>Complete a series of forms, including the sponsorship application form, financial assessment form, and medical forms for the orphan.</li>
          <li>Gather all the required supporting documents, such as birth certificates, passports, financial statements, criminal records checks, and letters of reference.</li>
          <li>Submit the completed application forms and supporting documents to IRCC.</li>
          <li>You may be required to attend an interview with IRCC officials to discuss your application and provide further information.</li>
          <li>IRCC will review your application and make a decision. This process can take several months or even longer.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Common reasons for refusals of Orphan Sponsorship Program:</h2>
        <ul className={styles.list}>
          <li>You may not qualify due to several reasons such as not being a Canadian citizen or permanent resident, not having lived in Canada for at least one year, lacking the financial ability to support the orphan, not having suitable housing for the orphan, or having a questionable character.</li>
          <li>The relationship between you and the orphan might not be close enough. This could be because you are a distant relative or haven't had regular contact with the orphan.</li>
          <li>You could also be disqualified if you’ve provided false or misleading information on the application. This includes giving incorrect details about income, assets, or criminal record.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Still not sure?</h2>
        <p className={styles.paragraph}>
          If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.
        </p>
        <p className={styles.paragraph}>
          At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.
        </p>
        <button className={styles.button}>Book Appointment</button>
      </section>
    </div>
    </>
  );
};

export default Orphan;