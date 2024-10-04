import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PathwaysForCaregiver.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import OurProcess from "../sections/OurProcess";


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
              onClick={toggleDropdown}>
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("why-choose-us")}> Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.section}`} id="testing0" ref={(el) => sectionsRef.current[0] = el}>Pathways for Caregivers</h1>
        <p className={`${styles.description} ${styles.section}`} id="testing1" ref={(el) => sectionsRef.current[1] = el}>
          The Canadian government is actively welcoming foreign residents with
          the right skills and experience to fill the country's critical need
          for caregivers. IRCC defines caregivers as the workers who provide
          care for children, seniors, or people with disabilities or illness.
        </p>
        <h2 className={`${styles.subtitle} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
          Benefits of Pathways for Caregivers:
        </h2>
        <ul  className={`${styles.list} ${styles.section}`} id="testing1" ref={(el) => sectionsRef.current[3] = el}>
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
        <h2 className={`${styles.subtitle} ${styles.section}`} id="testing2" ref={(el) => sectionsRef.current[4] = el} >
          Here are the temporary residence pathways available for caregivers:
        </h2>
        <ul className={`${styles.list} ${styles.section}`} id="testing3" ref={(el) => sectionsRef.current[5] = el}>
          <li>
            <a className={styles.link} href="/in-home-caregiver-program-lp">
              In Home Caregiver program
            </a>
            - Work permit applications received with Labour Market Impact
            Assessment (LMIA)
          </li>
        </ul>
        <h2  className={`${styles.subtitle} ${styles.section}`} id="testing4" ref={(el) => sectionsRef.current[6] = el}>
          Here are the permanent residence pathways available for caregivers:
        </h2>
        <ul className={`${styles.list} ${styles.section}`} id="testing5" ref={(el) => sectionsRef.current[7] = el}>
          <li>
            <a className={styles.link} href="/permanent-residency">
              Category A – Gaining experience
            </a>
            - For Home Child-Care Provider and Home Support Worker without
            Canadian Experience
          </li>
          <li>
            <a className={styles.link} href="/permanent-residency">
              Category B – Direct to permanent residence
            </a>
            - For Home Child-Care Provider and Home Support Worker with Canadian
            Experience
          </li>
        </ul>
        <h2 className={`${styles.subtitle} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[8] = el}>
          How to apply for Pathways for Caregivers?
        </h2>
        <ol className={`${styles.list} ${styles.section}`} id="testing6" ref={(el) => sectionsRef.current[9] = el}>
          <li className={styles.listOl}>
            Select the right NOC occupation as per your qualifications - HCCP or
            HSWP
          </li>
          <li className={styles.listOl}>
            Choose the right pathway for yourself – temporary pathway is only
            available to individuals who are already on a work permit or study
            permit. Permanent pathways are available to all.
          </li>
          <li className={styles.listOl}>
            Check each pathway page for eligibility criteria and application
            process.
          </li>
        </ol>
        <section>
        <button className={styles.button1}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }>
          Book Appointment
        </button>
        </section>
      </div>
      <h2 className={`${styles.lastSubtitle} ${styles.section}`} id="testing7" ref={(el) => sectionsRef.current[10] = el}>Here’s how we can help you:</h2>
      <OurProcess/>

      <div id="faqs">
        <FAQ/>
      </div>
      <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
      <Footer1 />
    </>
  );
};

export default PathwaysForCaregiver;
