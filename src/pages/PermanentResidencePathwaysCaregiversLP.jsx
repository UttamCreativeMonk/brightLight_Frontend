import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PermanentResidencePathwaysCaregiversLP.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const PermanentResidencePathwaysCaregiversLP = () => {
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              {/* <p onClick={() => scrollToSection("pathways")}>Pathways</p> */}
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
        <h1 className={styles.title} id="about-program">
          Permanent Residence Pathways available for Caregivers
        </h1>
        <p className={styles.description}>
          The caregivers play a crucial role in contributing to the Canadian
          economy by providing invaluable support to families and individuals in
          need. The caregiver program by Immigration, Refugees and Citizenship
          Canada offers a pathway to permanent residency in Canada for
          individuals who provide the essential care.
        </p>
        <h2 className={styles.subtitle}>
          Here are the permanent residence pathways available for caregivers:
        </h2>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="#categoryA">
              Category A – Gaining experience
            </a>{" "}
            for Home Child-Care Provider Pilot and Home Support Worker Pilot -
            Scroll to section Below
          </li>
          <li>
            <a className={styles.link} href="#categoryB">
              Category B – Direct to permanent residence
            </a>{" "}
            for Home Child-Care Provider Pilot and Home Support Worker Pilot -
            Scroll to section Below
          </li>
        </ul>
        <h2 className={styles.subtitle} id="benifits">
          Benefits of Permanent Residence Pathways available for Caregivers:
        </h2>
        <ul className={styles.list}>
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
        <h2 className={styles.subtitle} id="eligibility">
          Eligibility criteria for Permanent Residence Pathways available for
          Caregivers:
        </h2>
        <h3 id="categoryA" className={styles.subheading}>
          1. Qualifying Occupations:
        </h3>
        <ul className={styles.list}>
          <li>
            <strong>NOC 44100: Home childcare providers</strong> - If you care
            for the well-being and physical and social development of children,
            then you qualify for this NOC code. Nanny, babysitter, and parent’s
            helper are included in this NOC. Foster parents, babysitters at a
            fitness center or a shopping center are not included in this NOC.
          </li>
          <li>
            <strong>NOC 44101: Home support workers</strong> - If you provide
            personal care and companionship for seniors, persons with
            disabilities, and convalescent clients in the employer’s home, then
            you qualify for this NOC code. If you are employed at a nursing home
            or other such institution, you do not qualify for this NOC.
          </li>
        </ul>
        <h3 className={styles.subheading}>2. Application Categories:</h3>
        <ul className={styles.list}>
          <li>
            a. Applicants without 12 months of Qualifying Canadian work
            experience (Category A – Gaining experience)
          </li>
          <li>
            b. Applicants with 12 months of Qualifying Canadian work experience
            (Category B – Direct to permanent residence)
          </li>
        </ul>
        <h3 className={styles.subheading}>3. Education:</h3>
        <ul className={styles.list}>
          <li>
            You are required to have either of the following:
            <ul>
              <li>
                Canadian 1-year post-secondary (or higher) educational
                credential
              </li>
              <li>
                1-year post-secondary outside Canada education program,
                equivalent to Canadian 1-year post-secondary (or higher)
                educational credential, with Educational Credential Assessment
                (ECA) report issued for immigration purposes by an organization
                designated by IRCC, within the last 5 years.
              </li>
            </ul>
          </li>
        </ul>
        <h3 className={styles.subheading}>4. Language requirements:</h3>
        <ul className={styles.list}>
          <li>CLB 5 in reading, writing, speaking, and listening.</li>
          <li>IELTS: reading-4, writing-5, speaking-5, and listening-5</li>
          <li>CELPIP-G: 5 in reading, writing, speaking, and listening.</li>
          <li>
            PTE: reading-(42-50), writing-(51-59), speaking-(51-58), and
            listening-(39-49)
          </li>
        </ul>
        <h3 className={styles.subheading}>
          5. Qualifying Canadian work experience and permanent residency
          application categories:
        </h3>
        <h4 id="categoryA" className={styles.subheading}>
          Applicants under Category A – Gaining experience:
        </h4>
        <p>
          If you are a permanent residency applicant without 12 months of
          Qualifying Canadian work experience (Category A – Gaining experience),
          then you will be issued an occupation-restricted open work permit
          (OROWP). Within 36 months of the OROWP being issued, you are required
          to submit proof of at least 12 months of authorized full-time work
          experience. You will also be required to provide the following with
          the application:
          <ul className={styles.list}>
            <li>
              An employment offer from a qualifying Canadian employer in either
              NOC 44101: Home support workers or NOC 44100: Home childcare
              providers.
            </li>
            <li>
              Documents from the home country to prove that you can perform the
              job duties mentioned in the employment offer such as employer
              reference letters, employment records, work contracts, pay stubs,
              copies of relevant education credentials or training, which can
              include diplomas or certificates training.
            </li>
          </ul>
        </p>
        <h4 className={styles.subheading}>
          Applicants under Category B – Direct to Permanent residence:
        </h4>
        <p>
          If you are a permanent residency applicant with 12 months of
          Qualifying Canadian work experience (Category B – Direct to permanent
          residence), then you submit the documents to prove your work
          experience upfront.
        </p>
        <h2 className={styles.subtitle}>
          How to apply for Permanent Residence Pathways available for
          Caregivers?
        </h2>
        <ol className={styles.list}>
          <li>
            Select the right program as per your qualifications - HCCP or HSWP
          </li>
          <li>
            Choose the right category - Category A (gaining experience) or
            Category B (Direct to PR), depending upon your situation
          </li>
          <li>
            Apply for education credential evaluation of your education program
            if studied outside Canada.
          </li>
          <li>Appear for an acceptable English test.</li>
        </ol>
        <h3 className={styles.subheading}>
          Now if you are applying to Gaining Experience category of Caregiver
          pilot:
        </h3>
        <ol className={styles.list}>
          <li>
            If you do not have qualifying Canadian experience, look for a
            genuine job offer.
          </li>
          <li>
            Complete your work permit and PR application after ensuring IRCC is
            still accepting applications for either HCCP or HSWP.
          </li>
          <li>Provide medical exam sheet and police clearance to IRCC.</li>
          <li>Pay IRCC fees and submit the application.</li>
          <li>
            You will receive an occupation-restricted open work permit (OROWP)
            and letter of introduction for a work permit for port of entry.
          </li>
          <li>
            Get 12 months of qualifying work experience in Canada within 36
            months of receiving OROWP.
          </li>
          <li>Provide proof of work experience to IRCC.</li>
        </ol>
        <h3 className={styles.subheading}>
          Now if you are applying to Direct to PR category of Caregiver pilot:
        </h3>
        <ol className={styles.list}>
          <li>
            If you have qualifying Canadian experience of 12 months, prepare PR
            application after ensuring IRCC is still accepting applications for
            either HCCP or HSWP.
          </li>
          <li>Provide medical exam sheet and police clearance to IRCC.</li>
          <li>Pay IRCC fees and submit the application.</li>
          <li>
            Apply for Bridging Open Work Permit if your current work permit is
            expiring.
          </li>
        </ol>
        <h2 className={styles.subtitle} id="why-choose-us">
          Still not sure?
        </h2>
        <p className={styles.description}>
          If you have received a refusal for any of the reasons mentioned above,
          do not worry. With over a decade of experience, we specialize in
          previously refused cases. While we don't provide jobs for LMIA, we can
          certainly assist you if you have a job offer. We have obtained
          approvals for clients who had multiple previous refusals. We achieve
          this with a tailored approach to your specific case, addressing each
          concern that the officer has listed in previous refusals. We use case
          law and find similar cases to your circumstances that had positive
          results, and we use them as precedents in cases we work on. This is
          why we have a high success rate. At Brightlight Immigration, we have a
          dedicated team of visa application specialists who can assist you from
          the start of the application process to obtaining your visa. Start
          your process now.
        </p>
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

export default PermanentResidencePathwaysCaregiversLP;
