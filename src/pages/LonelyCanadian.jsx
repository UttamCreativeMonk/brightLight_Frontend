import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/LonelyCanadian.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
const LonelyCanadian = () => {
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
    <Navbar1/>
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
              <p onClick={() => scrollToSection("about-program")}>About the Program </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("duration")}>Duration</p>
              <p onClick={() => scrollToSection("application-process")}>Application Process</p>
              <p onClick={() => scrollToSection("alternatives")}>Alternatives</p>
              <p onClick={() => scrollToSection("bankruptcy")}>How to Apply?</p>
              <p onClick={() => scrollToSection("sponsor-siblings")}>Refusal Reasons</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.container}>
      <header className={`${styles.header} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}   >
        <h1>Lonely Canadian Sponsoring Other Relatives: A Path to Family Reunification</h1>
        <p>Canada’s family sponsorship program prioritizes family reunification. If you wish to sponsor other family members who may be lonely or orphaned, certain conditions apply. Here’s what you need to know:</p>
      </header>

      <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[1] = el} >
        <h2>Eligibility Criteria to Sponsor Other Relatives as a Lonely Canadian</h2>
        <h4>To sponsor relatives such as nephews, nieces, uncles, and aunts, the sponsor must meet the following criteria:
        </h4>
        <ul>
          <li> <strong>Minimum Necessary Income:</strong> The sponsor should have sufficient income.</li>
          <li><strong>Age Requirement:</strong> Be at least 18 years old.</li>
          <li><strong>Canadian Citizenship or Permanent Residency:</strong> The sponsor must be a Canadian citizen or permanent resident residing in Canada.</li>
          <li><strong>Debt and Bankruptcy:</strong> Be free from debt or bankruptcy proceedings.</li>
          <li><strong>Application Readiness:</strong> Prepared to submit the sponsorship application with all required forms and documents.</li>
          <li><strong>Undertaking Obligations:</strong> Willing to accept the responsibilities of undertaking.</li>
          <li><strong>No Removal Orders or Criminal Convictions:</strong> Free from any restrictions of removal orders and criminal convictions.</li>
        </ul>
      </section>

      <section className={`${styles.duration} ${styles.section}`} id="duration" ref={(el) => sectionsRef.current[2] = el} >
        <h2>Duration of Undertaking</h2>
        <ul>
          <li>The undertaking to sponsor other relatives to Canada lasts for ten years.</li>
          <li>This period begins when your relative becomes a permanent resident of Canada.</li>
          <li>During this time, the relative will not have access to social assistance.</li>
          <li>If the sponsor receives any social assistance, they must repay the amount to the government.</li>
          <li>The undertaking also extends to the spouse or child of the sponsored relative.</li>
          <li>Social assistance for disabled individuals does not impact the sponsorship application.</li>
        </ul>
      </section>

      <section  className={`${styles.bankruptcyCriminalSentences} ${styles.section}`} id="bankruptcy" ref={(el) => sectionsRef.current[3] = el}  >
        <h2>Bankruptcy and Criminal Sentences</h2>
        <ul>
          <li>Sponsoring other relatives is not allowed if the sponsor is filing for bankruptcy.</li>
          <li>Eligibility to sponsor is possible only after the discharge of bankruptcy.</li>
          <li>Similarly, a criminal conviction can disqualify the sponsor from sponsoring another relative.</li>
          <li>The severity of the crime determines most restrictions.</li>
          <li>However, eligibility may be regained if the sentence is over five years old and there is no past criminal record outside Canada during the same period.</li>
        </ul>
      </section>

      <section className={`${styles.sponsoringSiblings} ${styles.section}`} id="sponsor-siblings" ref={(el) => sectionsRef.current[4] = el}     >
        <h2>Sponsoring Siblings</h2>
        <h4>Alternative options exist for sponsoring siblings:</h4>
        <ul>
          <li>Siblings Below 18: You can sponsor a brother or sister below 18 years of age who has lost both parents.</li>
          <li>Lone Sponsor: Even if you are a lonely sponsor, you can sponsor a brother or sister who is over 18 years of age.</li>
        </ul>
        <h4>A lonely sponsor does not have:</h4>
        <ul>
          <li>Mother</li>
          <li>Father</li>
          <li>Child</li>
          <li>Spouse</li>
          <li>Common-law partner</li>
          <li>Conjugal partner</li>
          <li>Grandparents</li>
        </ul>
      </section>

      <section   className={`${styles.alternatives} ${styles.section}`} id="alternatives" ref={(el) => sectionsRef.current[5] = el} >
        <h2>Exploring Other Possibilities</h2>
        <p>Consider the following alternatives if you cannot sponsor a sibling over 18 years of age:</p>
        <ul>
          <li>Study in Canada: Apply for immigration through a study permit. <a href="/study-visa" className={styles.link}>Learn more about Study Visas</a></li>
          <li>Business Partnership: Successful business owners can secure a work permit if eligible.</li>
          <li>Express Entry: Permanent residents can leverage the Comprehensive Ranking System to receive an Invitation to Apply. <a href="/express-entry" className={styles.link}>Learn more about Express Entry</a></li>
        </ul>
      </section>

      <section  className={`${styles.applicationProcess} ${styles.section}`} id="application-process" ref={(el) => sectionsRef.current[6] = el} >
        <h2>How to Apply for Sponsoring a Relative as a Lonely Canadian</h2>
        <h3>Step 1: Obtain the Application Package</h3>
        <ul>
          <h4><strong>Application Package Contents:
          </strong></h4>
          <li>
            <ul>
              <li><strong>Instruction Guide:</strong> Read this guide before filling out the forms.</li>
              <li><strong>Forms:</strong> Complete the necessary forms.</li>
              <li><strong>Document Checklist:</strong> Ensure you include all required documents.</li>
              <li><strong>Eligibility Check:</strong> Confirm your eligibility to sponsor a relative.</li>
            </ul>
          </li>
          <h4><strong>Application Submission:</strong></h4>
          <li>
            <ul>
              <li>Provide proof of income.</li>
              <li>Relatives must express their intent to support themselves.</li>
              <li>Agree in writing to support your relatives for a specified period (3 to 20 years).</li>
              <li>Include all dependent children of your relative (if any).</li>
              <li>Submit all documents listed in the document checklist.</li>
              <li>Missing information or documents can cause delays.</li>
            </ul>
          </li>
          <h4><strong>Truthfulness: All information in your application must be accurate. Be truthful about:</strong></h4>
          <li>
            <ul>
              <li>Your family members (include all in your application).</li>
              <li>Your marital status.</li>
              <li>Any changes in your circumstances.</li>
              <li>Sponsored individuals must also declare their close family members, who will undergo security, criminality, and medical checks. Failure to do so may affect future sponsorship.</li>
            </ul>
          </li>
        </ul>
        <h3>Step 2: Pay Application Fees</h3>
        <ul>
          <h4><strong>Biometrics Fee:</strong></h4>
          <li>
            <ul>
              <li>In most cases, pay the biometrics fee when submitting your application.</li>
              <li>This fee covers fingerprint collection and a digital photo.</li>
            </ul>
          </li>
          <h4><strong>Third-Party Fees:</strong></h4>
          <li>
            <ul>
              <li>
                <p>Depending on your situation, you may need to pay third parties for:</p>
                <ul>
                  <li>Medical exams.</li>
                  <li>Police certificates.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3>Step 3: Submit Your Application</h3>
        <p>Mail all application documents to the address provided in the instruction guide of your package.</p>
        <button
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
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

export default LonelyCanadian;
