import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InCaregiverProgramLP.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const InCaregiverProgramLP = () => {
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
              onClick={toggleDropdown}
            >
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <header className={`${styles.header} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}>
          <h1>In Home Caregiver Program</h1>
          <p>
            The Canadian government provides a remedy to Canadian families to
            hire full-time caregivers to provide care to their children,
            seniors, or persons with certified medical needs. You can use this
            opportunity to seek work permit and permanent residency in Canada.
          </p>
        </header>

        <section  className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[1] = el}>
          <h2>Benefits of In Home Caregiver Program</h2>
          <ul>
            <li>
              The employers can hire a full-time dedicated caregiver for the
              person in need, thereby creating a less stressful environment when
              caring for individuals with high needs.
            </li>
            <li>
              The work permit provides you with an opportunity to gain
              qualifying experience in Canada to apply for permanent residence.
            </li>
            <li>
              These permanent residence applications do not have any points
              system like Express Entry or provincial nomination programs. It is
              based on a first-come, first-served basis.
            </li>
            <li>
              The language requirements for both work permit and permanent
              residency application are very low.
            </li>
            <li>
              The spouse and dependent children may accompany you throughout the
              work permit duration depending on your wage rate and National
              Occupational Classification (NOC) level.
            </li>
          </ul>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[2] = el}>
          <h2>Eligibility Criteria for In Home Caregiver Program</h2>
          <p>In home Caregiver program is a two-step process:</p>
          <ol>
            <li>
              Step 1: Your employer applies for Labour Market Impact Assessment
              (LMIA).
            </li>
            <li>Step 2: You apply for work permit.</li>
          </ol>

          <h3>Step 1: Labour Market Impact Assessment (LMIA) Process</h3>
          <p>
            For the employer considering hiring a foreign worker on a caregiver
            LMIA, here is the eligibility check:
          </p>
          <ul>
            <li>
              Have a valid payroll account with Canada Revenue Agency (CRA).
            </li>
            <li>
              Provide proof of individual requiring care such as a long form
              birth certificate, passport or physician’s note, depending on the
              type of care required.
            </li>
            <li>
              Must demonstrate their financial ability to pay the caregiver’s
              wages.
            </li>
            <li>
              Pay the foreign worker the prevailing wage for the position.
            </li>
          </ul>

          <p>
            Your employer is required to apply for a Labour Market Impact
            Assessment (LMIA). The application is submitted online by the
            employer on LMIA portal.
          </p>

          <h4>
            The employers in Canada can hire a foreign worker for one of the two
            categories:
          </h4>
          <div className={styles.categories} id="categories">
            <div className={styles.category}>
              <h3>1. Caregivers for children</h3>
              <p>
                This category includes positions such as childcare provider,
                live-in caregiver, nanny that fall under NOC 44100. The children
                to whom care will be provided should be under 18 years of age.
              </p>
            </div>
            <div className={styles.category}>
              <h3>2. Caregivers for people with high medical needs</h3>
              <p>
                This category includes workers who provide care to people with
                the age of 65 years or over, people with disabilities, a chronic
                or terminal illness. The positions included are as follows:
              </p>
              <ul>
                <li>
                  Registered nurse or registered psychiatric nurse (NOC 31301)
                </li>
                <li>Licensed practical nurse (NOC 32101)</li>
                <li>
                  Attendant for persons with disabilities, home support worker,
                  live-in caregiver, personal care attendant (NOC 44101)
                </li>
              </ul>
            </div>
          </div>

          <h3>Proof of Individual Requiring Care</h3>
          <p>
            At the time of LMIA application, the employer is required to provide
            proof to Service Canada to prove that they or their dependant is in
            need of care by a full-time caregiver.
          </p>
          <p>
            For age and parentage for each child under the age of 18, they can
            provide one of the following documents:
          </p>
          <ul>
            <li>Long form birth certificate</li>
            <li>Adoption order</li>
            <li>Official guardianship, or</li>
            <li>
              Medical doctor's note confirming the pregnancy and the due date
            </li>
          </ul>
          <p>
            For age for each senior, 65 years or older, they can provide one of
            the following documents:
          </p>
          <ul>
            <li>Birth certificate</li>
            <li>Passport, or</li>
            <li>Old Age Security (OAS) identification card</li>
          </ul>
          <p>
            For disability, chronic or terminal illness for each disabled,
            chronically or terminally ill person, they can provide:
          </p>
          <ul>
            <li>
              Completed Schedule H - Medical disability, chronic or terminal
              illness certificate (EMP5600) form, signed and dated by the
              physician, or
            </li>
            <li>
              Physician's note attesting that the patient has a disability,
              chronic or terminal illness and that they require access to a
              live-in caregiver
            </li>
          </ul>

          <h3>Step 2: You Apply for Work Permit</h3>
          <p>
            If you are a foreign national residing within Canada on a work
            permit or study permit, you can apply for a work permit under
            Temporary Foreign Worker Program after your employer obtains a
            positive Labour Market Impact Assessment (LMIA). You cannot apply
            for a work permit with caregiver LMIA if you are not currently
            already authorized to work or study (whether you are physically
            within or outside Canada). You must have a valid passport, be fluent
            in English or French and meet the minimum education and experience
            requirements for the job.
          </p>
        </section>

        <section className={`${styles.howToApply} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[3] = el}>
          <h2>How to Apply for In Home Caregiver Program?</h2>
          <h3>As an Employer:</h3>
          <ol>
            <li>
              Have an initial assessment performed by us to verify if the
              employer is eligible to apply for LMIA.
            </li>
            <li>
              We will provide you checklist of documents and information
              required to start the initial process.
            </li>
            <li>
              Perform recruitment efforts as per ESDC program requirements for
              each LMIA type – high wage or low wage occupation LMIA.
              (Hyperlink)
            </li>
            <li>Screen and interview local candidates.</li>
            <li>
              Prepare and submit LMIA application to Service Canada ESDS
              department.
            </li>
            <li>Pay the fees when requested, within 2 business days.</li>
            <li>LMIA fees exemptions:</li>
            <ul>
              <li>
                If applying for LMIA to provide care for an individual requiring
                assistance with medical needs, the LMIA processing fee of
                $1000.00 is not required. A medical certificate attesting to the
                individual’s incapacity to care for themselves will have to be
                provided.
              </li>
              <li>
                If applying for LMIA to provide care for a child under 13 years
                of age and the employer’s gross annual income is $150,000 or
                less, the LMIA processing fee of $1000.00 is not required.
              </li>
            </ul>
            <li>
              Wait for LMIA processing time, which can range from 30 to 90
              business days. If the Service Canada officer has any questions or
              concerns or requires any further information, the employer might
              be contacted for an interview.
            </li>
            <li>
              You will receive a positive LMIA by email or in the inbox section
              of LMIA portal.
            </li>
          </ol>

          <h3>As a Foreign Worker:</h3>
          <ul>
            <li>Apply for a work permit as per guidelines set by IRCC.</li>
            <li>
              IRCC will assess your application to check if you meet the
              requirements.
            </li>
            <li>
              If your application is approved, IRCC will issue you a work
              permit.
            </li>
            <li>
              Begin working with your employer to gain qualifying work
              experience for permanent residency pathways.
            </li>
          </ul>
        </section>

        <section  className={`${styles.stillNotSure} ${styles.section}`} id="testing1" ref={(el) => sectionsRef.current[4] = el}>
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. While we don't provide jobs for LMIA,
            we can certainly assist you if you have a job offer. We have
            obtained approvals for clients who had multiple previous refusals.
            We achieve this with a tailored approach to your specific case,
            addressing each concern that the officer has listed in previous
            refusals. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>

          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process to obtaining your visa. Start your process now.
          </p>
        </section>

        <section  className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[5] = el}>
          <h2>Why Choose Us</h2>
          <p>
            Discover why Brightlight Immigration is the right choice for your
            immigration needs. Our experienced team offers personalized services
            to ensure the best possible outcome for your application.
          </p>
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

export default InCaregiverProgramLP;
