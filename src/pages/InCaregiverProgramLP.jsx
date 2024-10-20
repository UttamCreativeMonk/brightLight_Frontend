import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InCaregiverProgramLP.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const InCaregiverProgramLP = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/inHomeCaregiverProgramLpMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>In Home Caregiver Program</h1>
          <p>
            The Canadian government provides a remedy to Canadian families to
            hire full-time caregivers to provide care to their children,
            seniors, or persons with certified medical needs. You can use this
            opportunity to seek work permit and permanent residency in Canada.
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of In Home Caregiver Program</h2>
          <ul style={{ marginLeft: "40px" }}>
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

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Eligibility Criteria for In Home Caregiver Program</h2>
          <p>In home Caregiver program is a two-step process:</p>
          <ol
            style={{ marginTop: "20px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing1"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <li
              style={{ listStyle: "none", fontSize: "18px", fontWeight: "600" }}
            >
              Step 1: Your employer applies for Labour Market Impact Assessment
              (LMIA).
            </li>
            <li
              style={{ listStyle: "none", fontSize: "18px", fontWeight: "600" }}
            >
              Step 2: You can apply for work permit.
            </li>
          </ol>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            Step 1: Labour Market Impact Assessment (LMIA) Process
          </h3>
          <p>
            For the employer considering hiring a foreign worker on a caregiver
            LMIA, here is the eligibility check:
          </p>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing3"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
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

          <h4
            className={`${styles.section} ${styles.section}`}
            id="testing4"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            The employers in Canada can hire a foreign worker for one of the two
            categories:
          </h4>
          <div
            className={`${styles.categories} ${styles.section}`}
            id="categories"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <div
              className={`${styles.category} ${styles.section}`}
              id="testing5"
              ref={(el) => (sectionsRef.current[8] = el)}
            >
              <h2>1. Caregivers for children</h2>
              <p>
                This category includes positions such as childcare provider,
                live-in caregiver, nanny that fall under NOC 44100. The children
                to whom care will be provided should be under 18 years of age.
              </p>
            </div>
            <div
              className={`${styles.category} ${styles.section}`}
              id="testing6"
              ref={(el) => (sectionsRef.current[9] = el)}
            >
              <h2>2. Caregivers for people with high medical needs</h2>
              <p>
                This category includes workers who provide care to people with
                the age of 65 years or over, people with disabilities, a chronic
                or terminal illness. The positions included are as follows:
              </p>
              <ul style={{ marginTop: "20px", marginLeft: "40px" }}>
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

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing7"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
            Proof of Individual Requiring Care
          </h2>
          <p>
            At the time of LMIA application, the employer is required to provide
            proof to Service Canada to prove that they or their dependant is in
            need of care by a full-time caregiver.
          </p>
          <p>
            For age and parentage for each child under the age of 18, they can
            provide one of the following documents:
          </p>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing8"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
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
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing9"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            <li>Birth certificate</li>
            <li>Passport, or</li>
            <li>Old Age Security (OAS) identification card</li>
          </ul>
          <p>
            For disability, chronic or terminal illness for each disabled,
            chronically or terminally ill person, they can provide:
          </p>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
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

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing12"
            ref={(el) => (sectionsRef.current[14] = el)}
          >
            Step 2: You Apply for Work Permit
          </h3>
          <p
            style={{ marginTop: "20px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing13"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
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

        <section
          className={`${styles.howToApply} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
          <h3>How to Apply for In Home Caregiver Program?</h3>
          <h2>As an Employer:</h2>
          <ol style={{ marginTop: "20px", marginLeft: "40px" }}>
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

          <h2>As a Foreign Worker:</h2>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing14"
            ref={(el) => (sectionsRef.current[17] = el)}
          >
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

        <section
          className={`${styles.stillNotSure} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
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

          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>

        <section
          style={{ marginTop: "50px" }}
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[151] = el)}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
            Why Choose Us?
          </h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling BCPNP applications with a high success rate.
            </li>
            <li>
              <strong>Tailored Approach:</strong> Personalized services and
              strategies based on your specific case.
            </li>
            <li>
              <strong>High Success Rate:</strong> Proven track record using case
              law and precedents for positive results.
            </li>
            <li>
              <strong>Comprehensive Support:</strong> Assistance from the start
              of the application process to obtaining your PR.
            </li>
          </ul>
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
