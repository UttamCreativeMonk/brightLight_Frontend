import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Rnip.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const AgriFoodPilotProgram = () => {
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
          <h1>Rural and Northern Immigration Pilot (RNIP)</h1>
        </header>
        <section>
          <p
            className={`${styles.section} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            The Rural and Northern Immigration Pilot (RNIP) is revolutionizing
            the way economic immigration benefits smaller communities across
            Canada. Unlike traditional immigration programs that often favor
            large cities, RNIP empowers rural and northern communities to take
            charge of their own economic growth by attracting foreign workers
            and international students who want to settle permanently.
          </p>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            The program's community-driven approach is its strength. Communities
            themselves assess prospective candidates, ensuring they have the
            skills and intentions that align perfectly with local needs. This
            means newcomers don't just fill jobs - they become integral parts of
            the community fabric, contributing their unique talents and
            perspectives to enrich the area.
          </p>
          <p style={{ marginBottom: "20px" }}>
            The participating communities will:
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Recommend candidates for permanent residence to IRCC for a final
              decision.
            </li>
            <li>
              Connect newcomers with settlement services and mentoring
              opportunities with established members of the community.
            </li>
          </ul>

          <h2>Benefits of Rural and Northern Immigration Pilot (RNIP)</h2>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Great alternative to Provincial Nominee Programs (PNPs),
              especially as PNPs are becoming more competitive and difficult to
              qualify for.
            </li>
            <li>
              Some RNIP communities may have lower eligibility requirements
              compared to other immigration programs, making it easier for
              individuals to qualify for permanent residence.
            </li>
            <li>
              1 year work permit for you and your spouses or common-law partner,
              while waiting for PR.
            </li>
          </ul>
          <h2>Eligibility Requirements for RNIP</h2>
          <p>There are two main parts to eligibility:</p>
          <ol style={{ marginLeft: "20px" }}>
            <li style={{ marginBottom: "20px" }}>
              IRCC requirements: You&#39;ll need to check if you meet the
              general criteria set by Immigration, Refugees and Citizenship
              Canada (IRCC). This could include things like having the right
              education, work experience, language skills, and more.
            </li>
            <li>
              Community-specific requirements: On top of the IRCC rules, each
              participating community may have its own unique eligibility
              criteria. You&#39;ll need to research the specific community
              you&#39;re interested in to see what they require.
            </li>
          </ol>
          <h2>How to Apply for RINP?</h2>
          <ol style={{ marginLeft: "20px" }}>
            <li style={{ marginBottom: "20px" }}>
              Find an eligible job: The first step in the actual application
              process is to secure a job offer from an employer in one of the
              participating communities. This can be a challenge, so it&#39;s
              important to start your job search early and be persistent.
            </li>
            <li style={{ marginBottom: "20px" }}>
              Get a recommendation from the community: Once you have a job
              offer, your next step is to submit an application for
              recommendation to the community you want to live in. They&#39;ll
              review
            </li>
            <li style={{ marginBottom: "20px" }}>
              Apply for permanent residence: If the community recommends you,
              congratulations! You can then move on to the final step of
              applying for permanent residence through the federal government.
              This involves submitting a full application with all the necessary
              documents and fees.
            </li>
          </ol>
          <p style={{ marginBottom: "20px" }}>
            IRCC eligibility requirements is first set of requirements that you
            will need to meet to qualify to apply and obtain PR in RNIP program:
          </p>
          <p style={{ marginBottom: "20px" }}>You must:</p>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Have qualifying work experience or have graduated from a publicly
              funded post-secondary institution in the recommending community
            </li>
            <li>Meet or exceed the language requirements</li>
            <li>Meet or exceed the educational requirements</li>
            <li>
              Prove you have enough money to support your transition into the
              community
            </li>
            <li>Intend to live in the community</li>
            <li>Meet community-specific requirements</li>
          </ul>
          <p>
            If you meet all the requirements, you can start to look for an
            eligible job in the community.
          </p>
          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing3"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            Participating Communities
          </h2>
          <p style={{ marginBottom: "20px", marginTop: "10px" }}>
            As a candidate, you need to find a job with an employer in 1 of the
            participating communities. If a community endorses you and you’re
            successful in applying for permanent residence, you’ll then move
            there to work and live.
          </p>
          <p style={{ marginBottom: "20px" }}>
            The communities participating in the pilot are:
          </p>
          <table
            className={`${styles.table} ${styles.section}`}
            id="testing4"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <thead>
              <tr>
                <th>Community</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North Bay, ON</td>
              </tr>
              <tr>
                <td>Sudbury, ON</td>
              </tr>
              <tr>
                <td>Timmins, ON</td>
              </tr>
              <tr>
                <td>Sault Ste. Marie, ON</td>
              </tr>
              <tr>
                <td>Thunder Bay, ON</td>
              </tr>
              <tr>
                <td>Brandon, MB</td>
              </tr>
              <tr>
                <td>Altona/Rhineland, MB</td>
              </tr>
              <tr>
                <td>Moose Jaw, SK</td>
              </tr>
              <tr>
                <td>Claresholm, AB</td>
              </tr>
              <tr>
                <td>Vernon, BC</td>
              </tr>
              <tr>
                <td>West Kootenay (Trail, Castlegar, Rossland, Nelson), BC</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginBottom: "20px" }}>
            Each community will also have its own:
          </p>
          <ul>
            <li>Additional eligibility requirements</li>
            <li>Job search process</li>
            <li>Community recommendation application process</li>
            <li>Criteria to calculate points based on your profile</li>
          </ul>

          <h2>Work Experience Requirements</h2>
          <ul style={{ marginTop: "20px" }}>
            <li>
              You need 1 year of continuous work experience (at least 1,560
              hours) in the past 3 years.
            </li>
            <li>
              The following hours of work are eligible:
              <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                <li>Count the hours worked in part-time and full-time jobs.</li>
                <li>
                  The hours must be in one occupation, but they can be with
                  different employers.
                </li>
                <li>The hours must be over a period of at least 12 months.</li>
                <li>These working hours can be inside or outside Canada.</li>
                <li>
                  If you worked in Canada, you must have been allowed to work in
                  Canada.
                </li>
              </ul>
            </li>
            <li>
              Don’t count hours you weren’t paid for (volunteering or unpaid
              internships don’t count).
            </li>
            <li>Don’t count hours when you were self-employed.</li>
            <li>
              Your work experience must include:
              <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                <li>
                  Most of the main duties and all the essential duties listed in
                  your National Occupational Classification (NOC).
                </li>
                <li>
                  The activities listed in the lead statement of your NOC.
                </li>
              </ul>
            </li>
          </ul>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            Job Offer Requirements
          </h2>
          <p>
            Your job offer must be for an occupation at a skill level related to
            the NOC TEER category that matches your work experience.
          </p>
          <table
            className={`${styles.jobOfferTable} ${styles.section}`}
            id="testing11"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            <thead>
              <tr>
                <th>Job Offer TEER Category</th>
                <th>Required Work Experience TEER Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TEER 0 or 1</td>
                <td>TEER 0, 1, 2, or 3</td>
              </tr>
              <tr>
                <td>TEER 2 or 3</td>
                <td>TEER 1, 2, 3, or 4</td>
              </tr>
              <tr>
                <td>TEER 4</td>
                <td>TEER 2, 3, or 4</td>
              </tr>
              <tr>
                <td>TEER 5</td>
                <td>Same 5-digit NOC Code</td>
              </tr>
              <tr>
                <td>Health Care Exception</td>
                <td>NOC 31301 with TEER 1</td>
              </tr>
            </tbody>
          </table>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing12"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
            International Students Requirements
          </h2>
          <ul
            className={`${styles.section} ${styles.section}`}
            id="testing13"
            ref={(el) => (sectionsRef.current[14] = el)}
          >
            <li>
              You’re exempt from the work experience criteria above if you
              graduated with:
              <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                <li>
                  A credential from a post-secondary program of 2 years or
                  longer and you:
                  <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <li>
                      were studying as a full-time student for the full duration
                      of the 2+ years
                    </li>
                    <li>
                      received the credential no more than 18 months before your
                      application for permanent residence
                    </li>
                    <li>
                      were in the community for at least 16 of the last 24
                      months spent studying to get your credential
                    </li>
                  </ul>
                </li>
                <p>or</p>
                <li style={{ marginTop: "20px" }}>
                  A credential from a post-secondary program of 2 years or
                  longer and you:
                  <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <li>
                      Were studying as a full-time student for the full duration
                      of the 2+ years
                    </li>
                    <li>
                      Received the credential no more than 18 months before your
                      application for permanent residence
                    </li>
                    <li>
                      Were in the community for at least 16 of the last 24
                      months spent studying to get your credential
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Important: Before you apply as an international student, make sure
            your program doesn&#39;t fall into these categories:
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
            <li>Studied English or French for more than half of the program</li>
            <li>
              Distance learning was your main method of instruction for than
              half of the program
            </li>
            <li>
              You&#39;ve received a scholarship or fellowship that requires you
              to return to your home country to apply what you learned
            </li>
          </ul>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing14"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
            Language Requirements
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Language Requirements You must meet the minimum language
            requirements based on the NOC category that applies to the job offer
            in the community.
          </p>
          <p style={{ marginBottom: "20px" }}>This can either be the:</p>
          <ul style={{ marginLeft: "20px" }}>
            <li>Canadian Language Benchmarks (CLB), or</li>
            <li>Niveaux de compétence linguistique canadiens (NCLC)</li>
          </ul>
          <p style={{ marginBottom: "20px", marginTop: "20px" }}>
            The minimum language requirements for each NOC category are:
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>NOC 0 and A: CLB/NCLC 6</li>
            <li>NOC B: CLB/NCLC 5</li>
            <li>NOC C and D: CLB/NCLC 4</li>
          </ul>
          <table
            className={`${styles.languageTable} ${styles.section}`}
            id="testing15"
            ref={(el) => (sectionsRef.current[16] = el)}
          >
            <thead>
              <tr>
                <th>NOC Category</th>
                <th>Minimum Language Requirement (CLB/NCLC)</th>
                <th>IELTS Equivalency (Module)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NOC 0 and A</td>
                <td>6</td>
                <td>
                  Listening: 5.5, Reading: 5.0, Writing: 5.5, Speaking: 5.5
                </td>
              </tr>
              <tr>
                <td>NOC B</td>
                <td>5</td>
                <td>
                  Listening: 5.0, Reading: 4.0, Writing: 5.0, Speaking: 5.0
                </td>
              </tr>
              <tr>
                <td>NOC C and D</td>
                <td>4</td>
                <td>
                  Listening: 4.5, Reading: 3.5, Writing: 4.0, Speaking: 4.0
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Educational Requirements</h2>
          <p>
            You must have a Canadian high school diploma or an educational
            credential assessment (ECA) report, from a designated organization
            or professional body, showing that you completed a foreign
            credential that’s equal to Canadian secondary school (high school).
          </p>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing16"
            ref={(el) => (sectionsRef.current[17] = el)}
          >
            Settlement Funds
          </h2>
          <ul>
            <li>
              Applicants who are not currently working legally in Canada must
              demonstrate sufficient financial resources to support themselves
              and any accompanying dependents during the settlement process.
            </li>
            <li>
              The proof of funds is required regardless of whether family
              members will be joining the applicant in Canada.
            </li>
          </ul>

          <h2>Intention to Reside in the Community</h2>
          <p>
            To participate in the pilot, you must plan to live in the community.
          </p>
          <h2>Finding a Job for Canadian Immigration</h2>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              As a candidate, you must have a genuine job offer to work in one
              of the participating communities.
            </li>
            <li>
              Keep in mind each community will have its own requirements and job
              search process.
            </li>
            <li>
              Once you have a job offer and meet all the requirements, you can
              apply for a community recommendation.
            </li>
          </ul>

          <h2>Job offer requirements</h2>
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            To be eligible for a job offer, the position must meet all of the
            following criteria:
          </p>
          <ul>
            <li>Located in the community</li>
            <li>
              Employer continues to run the business in the same community
            </li>
            <li>Full-time, with at least 30 paid hours per week</li>
            <li>Non-seasonal, with consistent hours throughout the year</li>
            <li>Permanent position, no set end date</li>
            <li>
              Meets or exceeds the Job Bank’s minimum wage for your job offer’s
              National Occupational Classification (NOC).
            </li>
            <li>You have the required skills and experience to do the job</li>
          </ul>

          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            The job offer cannot be from:
          </p>
          <ul>
            <li>A consulate</li>
            <li>A staffing or employment agency</li>
            <li>A business you own or have significant control over</li>
            <li>A business offering adult services on a regular basis</li>
            <li>An employer with administrative penalties</li>
          </ul>

          <h2
            className={`${styles.howToApply} ${styles.section}`}
            id="testing18"
            ref={(el) => (sectionsRef.current[19] = el)}
          >
            How to Apply
          </h2>
          <ol  className={styles.howToApplyLi}>
            <li>
              Look for a qualifying job offer with a qualifying employer in the
              qualifying community.
            </li>
            <li>
              Ensure your job offer location is within RNIP Communities
              Boundaries.
            </li>
            <li>
              Appear for English or French test and obtain the score as per your
              NOC.
            </li>
            <li>
              Submit an application for RNIP recommendation after following all
              IRCC and Community specific guidelines.
            </li>
            <li>
              The community reviews your RNIP application, might interview you
              and the employer.
            </li>
            <li>
              The community recommends you, making you eligible to apply to IRCC
              for permanent residence in Canada based on their recommendation.
            </li>
            <li>
              You submit PR application to Immigration, Refugees and Citizenship
              Canada (IRCC).
            </li>
            <li>
              IRCC conducts application reviews to check if you meet the IRCC
              RNIP requirements, perform medical clearances, and conduct
              background checks.
            </li>
            <li>
              You and your family members will receive permanent residency.
            </li>
          </ol>


          <h2
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[21] = el)}
          >
            Common Reasons for Refusals for RNIP
          </h2>
          <ul>
            <li>
              Having a job offer that does not match your work experience.
            </li>
            <li>
              Employer cannot justify the need and genuineness of the job offer.
            </li>
            <li>
              Improper calculation of hours that count towards work experience.
            </li>
          </ul>

          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
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

export default AgriFoodPilotProgram;
