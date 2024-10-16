import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/HealthcareTargetedDraw.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const HealthcareTargetedDraw = () => {
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
              <p onClick={() => scrollToSection("eligiblity")}>Eligiblity</p>
              <p onClick={() => scrollToSection("eligiblity-occupation")}>
                Eligiblity Occupation
              </p>
              <p onClick={() => scrollToSection("previous-draw-history")}>
                Previous Draw History
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
        <h1 className={styles.heading}>
          Category-Based Express Entry Selection Draws: Healthcare Draw
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <p>
            In 2023, the Canadian Government launched the Express Entry
            healthcare draws, a strategic initiative aimed at attracting and
            retaining crucial healthcare professionals like nurses, physicians,
            and dentists. This program fast-tracks immigration applications,
            significantly reducing the time between application and approval for
            permanent residency. The process, managed by Canada's Immigration,
            Refugees, and Citizenship Canada (IRCC), aims to process the
            majority of applications within six months. However, it's important
            to note that this is not a guaranteed timeline. The urgent need for
            additional healthcare workers in Canada is evident, and the Express
            Entry healthcare draws are a crucial tool in addressing this issue.
          </p>
        </section>

        <section
          className={`${styles.eligibilityCriteria} ${styles.section}`}
          id="eligiblity"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for Express Entry Healthcare Draws
          </h2>
          <p>
            Understanding the process of becoming eligible for Express Entry
            healthcare draws requires a comprehensive understanding of the
            Express Entry system itself.
          </p>
          <p>
            Express Entry is not an immigration program but a system used to
            manage several Canadian immigration programs. It operates on an
            expression of interest intake model, where you submit your profile
            into a pool of candidates and wait for an invitation to apply for
            permanent residency.
          </p>
          <p>
            To be eligible for Express Entry, you must meet the criteria for one
            of the following programs:
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              {/* <Link
                to=""
                className={styles.button}
              >
                
              </Link> */}
              <button
                className={styles.button1}
                onClick={() =>
                  (window.location.href = "/federal-skilled-worker-program")
                }
              >
                Federal Skilled Worker (FSW)
              </button>
              : No Canadian experience required
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              {/* <Link to="" className={styles.button}>
               
              </Link> */}
              <button
                className={styles.button1}
                onClick={() =>
                  (window.location.href = "/canadian-experience-class")
                }
              >
                Canadian Experience Class (CEC)
              </button>
              : Canadian experience required
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              {/* <Link
                to=""
                className={styles.button}
              >
            
              </Link> */}
              <button
                className={styles.button1}
                onClick={() =>
                  (window.location.href = "/federal-skilled-worker-program")
                }
              >
                Federal Skilled Trades (FST)
              </button>
              : Dedicated to trades workers
            </li>
          </ul>
          <p>
            Once you've submitted your profile, your eligibility for each
            program is evaluated based on your work experience, education, age,
            and language proficiency. This evaluation is conducted using the
            Comprehensive Ranking System (CRS), which assigns a score to your
            profile.
          </p>
          <p>
            Your CRS score is crucial as it determines whether you receive an
            invitation to apply (ITA) in a round of invitations, also known as a
            draw. In an all-program draw, the highest-scoring candidates are
            invited, while in a category-based draw, the top-scoring candidates
            who meet the draw's category eligibility criteria are invited.
          </p>
          <p>
            Healthcare Express Entry draws are category-based draws. To be
            eligible for the health worker category, you must have at least six
            months of full-time work experience in an eligible healthcare
            occupation within the past three years.
          </p>
        </section>

        <section
          className={`${styles.eligibleOccupations} ${styles.section}`}
          id="eligiblity-occupation"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            Eligible Occupations for Express Entry Healthcare Draws
          </h2>
          <p>
            In order to be eligible for Express Entry Healthcare draws, you must
            have at least six months of full-time (or the equivalent in
            part-time) paid work experience within the three years preceding the
            issuance of an ITA and when IRCC receives your application for
            Canadian permanent residency.
          </p>
          <p>Healthcare occupations category eligibility:</p>
          <ul>
            <li>
              Within the last 3 years, you have at least 6 months of full-time,
              continuous work experience (or an equivalent amount of part-time
              work experience) in a single eligible National Occupational
              Classification (NOC) in the healthcare sector.
            </li>
            <li>A valid Express Entry profile.</li>
          </ul>
          <p>
            **The following table contains the most up-to-date list of eligible
            occupations. Remember that Canada may change these occupations in
            response to labor market conditions.
          </p>
          <p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Healthcare Jobs targeted By Express Entry
            </a>
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Occupation</th>
                <th>2021 NOC Code</th>
                <th>2021 TEER Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Audiologists and speech language pathologists</td>
                <td>31112</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Chiropractors</td>
                <td>31201</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Dentists</td>
                <td>31110</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Dieticians and nutritionists</td>
                <td>31121</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Education counsellors</td>
                <td>41320</td>
                <td>1</td>
              </tr>
              <tr>
                <td>General practitioners and family physicians</td>
                <td>31102</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Instructors of persons with disabilities</td>
                <td>42203</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  Kinesiologists and other professional occupations in therapy
                  and assessment
                </td>
                <td>31204</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Licensed practical nurses</td>
                <td>32101</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Massage therapists</td>
                <td>32201</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  Medical laboratory assistants and related technical
                  occupations
                </td>
                <td>33101</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Medical laboratory technologists</td>
                <td>32120</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Medical radiation technologists</td>
                <td>32121</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Medical sonographers</td>
                <td>32122</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Nurse aides, orderlies, and patient service associates</td>
                <td>33102</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Nurse practitioners</td>
                <td>31302</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Nursing coordinators and supervisors</td>
                <td>31300</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Occupational therapists</td>
                <td>31203</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Optometrists</td>
                <td>31111</td>
                <td>1</td>
              </tr>
              <tr>
                <td>
                  Other assisting occupations in support of health services
                </td>
                <td>33109</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Other practitioners of natural healing</td>
                <td>32209</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  Other professional occupations in health diagnosing and
                  treating
                </td>
                <td>31209</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Other technical occupations in therapy and assessment</td>
                <td>32109</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Paramedical occupations</td>
                <td>32102</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Pharmacy technical assistants and pharmacy assistants</td>
                <td>33103</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  Physician assistants, midwives, and allied health
                  professionals
                </td>
                <td>31303</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Physiotherapists</td>
                <td>31202</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Psychologists</td>
                <td>31200</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Registered nurses and registered psychiatric nurses</td>
                <td>31301</td>
                <td>1</td>
              </tr>
              <tr>
                <td>
                  Respiratory therapists, clinical perfusionists, and
                  cardiopulmonary technologists
                </td>
                <td>32103</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Specialists in clinical and laboratory medicine</td>
                <td>31100</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Specialists in surgery</td>
                <td>31101</td>
                <td>1</td>
              </tr>
              <tr>
                <td>
                  Therapists in counselling and related specialized therapies
                </td>
                <td>41301</td>
                <td>1</td>
              </tr>
              <tr>
                <td>
                  Traditional Chinese medicine practitioners and acupuncturists
                </td>
                <td>32200</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Veterinarians</td>
                <td>31103</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.drawHistory} ${styles.section}`}
          id="previous-draw-history"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry Healthcare Draws History
          </h2>
          <p>
            The first-ever Express Entry draw for targeted healthcare occupation
            workers was held in February 2024. Express Entry draw #284 saw a CRS
            score of 422 and invited 3500 candidates eligible for category-based
            selection in healthcare occupations.
          </p>
          {/* <Link to="" className={styles.button}>
            
          </Link> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            How to Apply for Express Entry Healthcare Draws
          </h2>
          <ol style={{ marginLeft: "40px" }}>
            <li>Submit your profile to the Express Entry pool</li>
            <li>
              Prove that you have at least six months of eligible work
              experience in healthcare (within the three years preceding the
              issuance of an ITA and receipt of your application by IRCC)
            </li>
            <li>
              Await an ITA (or take steps to improve your CRS score to increase
              your chances of receiving an ITA)
            </li>
            <li>
              Respond to the ITA by submitting your application for permanent
              residency
            </li>
            <li>
              Wait for a decision from an IRCC officer. If approved, you can
              become a permanent resident of Canada.
            </li>
          </ol>
          <p>
            Remember, the key to success in the Express Entry system is to
            ensure you meet all the eligibility requirements and continuously
            work on improving your CRS score.
          </p>
        </section>

        <section
          className={`${styles.contact} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            Contact Brightlight Immigration today to assess your profile and
            embark on a transformative journey towards achieving your Canadian
            dream. With over a decade of experience, we specialize in handling
            Express Entry Programs. Our approval rate for these programs is
            nearly 100%. We achieve this with a tailored approach to your
            specific case. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your PR. Start your
            process now.
          </p>
          {/* <Link to="" className={styles.button}>
         
          </Link> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us
          </button>
        </section>

        {/* <section  className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[6] = el}>
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p>
            Brightlight Immigration offers personalized services to maximize
            your chances of success. Our experienced team provides dedicated
            support throughout the immigration process, ensuring a smooth and
            efficient experience.
          </p>

        </section> */}
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling Immigration applications with a high success rate.
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

export default HealthcareTargetedDraw;
