import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PathwaysForCaregiver.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const PathwaysForCaregiver = () => {
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>

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
        <h1 className={styles.title}>Pathways for Caregivers</h1>
        <p className={styles.description}>
          The Canadian government is actively welcoming foreign residents with
          the right skills and experience to fill the country's critical need
          for caregivers. IRCC defines caregivers as the workers who provide
          care for children, seniors, or people with disabilities or illness.
        </p>
        <h2 className={styles.subtitle} id="benifits">
          Benefits of Pathways for Caregivers:
        </h2>
        <ul className={styles.list}>
          <li>
            Canadian families can hire a full-time dedicated caregiver for the
            person in need, thereby creating a less stressful environment when
            caring for individuals with high needs.
          </li>
          <li>
            Caregiver pathways provide you with an opportunity to apply for
            permanent residence, after gaining 12 months of experience in
            Canada.
          </li>
          <li>
            The permanent residence applications do not have any points system
            like Express Entry or provincial nomination programs. It is based on
            a first-come, first-served basis.
          </li>
          <li>
            The language requirements for both work permit and permanent
            residency application are very low.
          </li>
          <li>
            The spouse and dependent children can accompany you throughout the
            process.
          </li>
        </ul>
        <h2 className={styles.subtitle}>
          Here are the temporary residence pathways available for caregivers:
        </h2>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="/in-home-caregiver-program-lp">
              In Home Caregiver program
            </a>{" "}
            - Work permit applications received with Labour Market Impact
            Assessment (LMIA)
          </li>
        </ul>
        <h2 className={styles.subtitle}>
          Here are the permanent residence pathways available for caregivers:
        </h2>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="/permanent-residency">
              Category A – Gaining experience
            </a>{" "}
            - For Home Child-Care Provider and Home Support Worker without
            Canadian Experience
          </li>
          <li>
            <a className={styles.link} href="/permanent-residency">
              Category B – Direct to permanent residence
            </a>{" "}
            - For Home Child-Care Provider and Home Support Worker with Canadian
            Experience
          </li>
        </ul>
        <h2 className={styles.subtitle} id="how-to-apply">
          How to apply for Pathways for Caregivers?
        </h2>
        <ol className={styles.list}>
          <li>
            Select the right NOC occupation as per your qualifications - HCCP or
            HSWP
          </li>
          <li>
            Choose the right pathway for yourself – temporary pathway is only
            available to individuals who are already on a work permit or study
            permit. Permanent pathways are available to all.
          </li>
          <li>
            Check each pathway page for eligibility criteria and application
            process.
          </li>
        </ol>
        <h2 className={styles.subtitle}>Here’s how we can help you:</h2>
        <p className={styles.description}>
          (Our process section from the homepage goes here as well).
        </p>
      </div>
      <Footer1 />
    </>
  );
};

export default PathwaysForCaregiver;
