import React, { useState } from "react";
import styles from "../styles/Rnip.module.css";
import { Link } from "react-router-dom";


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
              <p onClick={() => scrollToSection("about-program")}> About the Program </p>
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("process")}>Process</p>
              <p onClick={() => scrollToSection("participating_communities")}>Participating Communities</p>
              <p onClick={() => scrollToSection("how-to-apply")}> How to Apply? </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons </p>
              <p onClick={() => scrollToSection("book-appointment")}> Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}> Why Choose Us? </p>
              <p onClick={() => scrollToSection("testimonials")}> Testimonials </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

    
      <div className={styles.container}>
      <header className={styles.header} id="about-program">
        <h1>Rural and Northern Immigration Pilot (RNIP)</h1>
      </header>
      <section className={styles.content} id="benefits">
        <p>
          The Rural and Northern Immigration Pilot (RNIP) is revolutionizing the way economic immigration benefits smaller communities across Canada. Unlike traditional immigration programs that often favor large cities, RNIP empowers rural and northern communities to take charge of their own economic growth by attracting foreign workers and international students who want to settle permanently.
        </p>
        <p>
          The program's community-driven approach is its strength. Communities themselves assess prospective candidates, ensuring they have the skills and intentions that align perfectly with local needs. This means newcomers don't just fill jobs - they become integral parts of the community fabric, contributing their unique talents and perspectives to enrich the area.
        </p>
        <h2>Participating Communities</h2>
        <table className={styles.table} id="eligibility">
          <thead>
            <tr>
              <th>Community</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>North Bay, ON</td></tr>
            <tr><td>Sudbury, ON</td></tr>
            <tr><td>Timmins, ON</td></tr>
            <tr><td>Sault Ste. Marie, ON</td></tr>
            <tr><td>Thunder Bay, ON</td></tr>
            <tr><td>Brandon, MB</td></tr>
            <tr><td>Altona/Rhineland, MB</td></tr>
            <tr><td>Moose Jaw, SK</td></tr>
            <tr><td>Claresholm, AB</td></tr>
            <tr><td>Vernon, BC</td></tr>
            <tr><td>West Kootenay (Trail, Castlegar, Rossland, Nelson), BC</td></tr>
          </tbody>
        </table>

        <h2>Eligibility Requirements for RNIP</h2>
        <p>There are two main parts to eligibility:</p>
        <ol>
          <li>IRCC requirements: You'll need to check if you meet the general criteria set by Immigration, Refugees and Citizenship Canada (IRCC). This could include things like having the right education, work experience, language skills, and more.</li>
          <li>Community-specific requirements: On top of the IRCC rules, each participating community may have its own unique eligibility criteria. You'll need to research the specific community you're interested in to see what they require.</li>
        </ol>

        <h2>How to Apply for RNIP</h2>
        <ol>
          <li>Find an eligible job: The first step in the actual application process is to secure a job offer from an employer in one of the participating communities.</li>
          <li>Get a recommendation from the community: Once you have a job offer, your next step is to submit an application for recommendation to the community you want to live in.</li>
          <li>Apply for permanent residence: If the community recommends you, you can then move on to the final step of applying for permanent residence through the federal government.</li>
        </ol>

        <h2>Work Experience Requirements</h2>
        <p>You need 1 year of continuous work experience (at least 1,560 hours) in the past 3 years. The following hours of work are eligible:</p>
        <ul>
          <li>Count the hours worked in part-time and full-time jobs.</li>
          <li>The hours must be in one occupation, but they can be with different employers.</li>
          <li>The hours must be over a period of at least 12 months.</li>
          <li>These working hours can be inside or outside Canada.</li>
          <li>If you worked in Canada, you must have been allowed to work in Canada.</li>
        </ul>

        <h2>Job Offer Requirements</h2>
        <p>Your job offer must be for an occupation at a skill level related to the NOC TEER category that matches your work experience.</p>
        <table className={styles.jobOfferTable}>
          <thead>
            <tr>
              <th>Job Offer TEER Category</th>
              <th>Required Work Experience TEER Category</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>TEER 0 or 1</td><td>TEER 0, 1, 2, or 3</td></tr>
            <tr><td>TEER 2 or 3</td><td>TEER 1, 2, 3, or 4</td></tr>
            <tr><td>TEER 4</td><td>TEER 2, 3, or 4</td></tr>
            <tr><td>TEER 5</td><td>Same 5-digit NOC Code</td></tr>
            <tr><td>Health Care Exception</td><td>NOC 31301 with TEER 1</td></tr>
          </tbody>
        </table>

        <h2>International Students Requirements</h2>
        <p>You’re exempt from the work experience criteria above if you graduated with:</p>
        <ul>
          <li>A credential from a post-secondary program of 2 years or longer and you:
            <ul>
              <li>Were studying as a full-time student for the full duration of the 2+ years</li>
              <li>Received the credential no more than 18 months before your application for permanent residence</li>
              <li>Were in the community for at least 16 of the last 24 months spent studying to get your credential</li>
            </ul>
          </li>
          <li>A master’s degree or higher and you:
            <ul>
              <li>Were studying as a full-time student for the duration of your degree</li>
              <li>Got your degree no more than 18 months before your application for permanent residence</li>
              <li>Were in the community for the length of your studies</li>
            </ul>
          </li>
        </ul>

        <h2>Language Requirements</h2>
        <table className={styles.languageTable}>
          <thead>
            <tr>
              <th>NOC Category</th>
              <th>Minimum Language Requirement (CLB/NCLC)</th>
              <th>IELTS Equivalency (Module)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>NOC 0 and A</td><td>6</td><td>Listening: 5.5, Reading: 5.0, Writing: 5.5, Speaking: 5.5</td></tr>
            <tr><td>NOC B</td><td>5</td><td>Listening: 5.0, Reading: 4.0, Writing: 5.0, Speaking: 5.0</td></tr>
            <tr><td>NOC C and D</td><td>4</td><td>Listening: 4.5, Reading: 3.5, Writing: 4.0, Speaking: 4.0</td></tr>
          </tbody>
        </table>

        <h2>Educational Requirements</h2 >
        <p>You must have a Canadian high school diploma or an educational credential assessment (ECA) report, from a designated organization or professional body, showing that you completed a foreign credential that’s equal to Canadian secondary school (high school).</p>

        <h2>Settlement Funds</h2>
        <ul>
          <li>Applicants who are not currently working legally in Canada must demonstrate sufficient financial resources to support themselves and any accompanying dependents during the settlement process.</li>
          <li>The proof of funds is required regardless of whether family members will be joining the applicant in Canada.</li>
        </ul>

        <h2>Intention to Reside in the Community</h2>
        <p>To participate in the pilot, you must plan to live in the community.</p>

        <h2>How to Apply</h2>
        <ol>
          <li>Look for a qualifying job offer with a qualifying employer in the qualifying community.</li>
          <li>Ensure your job offer location is within RNIP Communities Boundaries.</li>
          <li>Appear for English or French test and obtain the score as per your NOC.</li>
          <li>Submit an application for RNIP recommendation after following all IRCC and Community specific guidelines.</li>
          <li>The community reviews your RNIP application, might interview you and the employer.</li>
          <li>The community recommends you, making you eligible to apply to IRCC for permanent residence in Canada based on their recommendation.</li>
          <li>You submit PR application to Immigration, Refugees and Citizenship Canada (IRCC).</li>
          <li>IRCC conducts application reviews to check if you meet the IRCC RNIP requirements, perform medical clearances, and conduct background checks.</li>
          <li>You and your family members will receive permanent residency.</li>
        </ol>

        <h2>Common Reasons for Refusals for RNIP</h2>
        <ul>
          <li>Having a job offer that does not match your work experience.</li>
          <li>Employer cannot justify the need and genuineness of the job offer.</li>
          <li>Improper calculation of hours that count towards work experience.</li>
        </ul>

        <h2>Why Choose Us</h2>
        <p>Include content here.</p>
      </section>
    </div>


    </>
  );
};

export default AgriFoodPilotProgram;
