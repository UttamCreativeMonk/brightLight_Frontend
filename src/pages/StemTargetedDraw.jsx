import React, { useState } from "react";
import styles from "../styles/StemTargetedDraw.module.css";
import { Link } from "react-router-dom";


const StemTargetedDraw = () => {
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
              <p onClick={() => scrollToSection("eligiblity")}>Eligiblity</p>
              <p onClick={() => scrollToSection("stem-eligiblity")}>Stem Eligiblity</p>
              <p onClick={() => scrollToSection("stem-noc-codes")}>Stem Noc Codes </p>
              <p onClick={() => scrollToSection("book-appointment")}> Book Appointment </p>
              <p onClick={() => scrollToSection("why-choose-us")}>  Why Choose Us?  </p>
              <p onClick={() => scrollToSection("testimonials")}>  Testimonials </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
      <h1 className={styles.heading}>Category-Based Express Entry Selection Draws: STEM (Science, Technology, Engineering, Math) Occupations</h1>

      <section className={styles.introduction} id="about-program">
        <p>Canada's Express Entry system is not just a general immigration tool, but also a strategic resource for targeting specific sectors of the economy. Occasionally, Canada conducts Science, Technology, Engineering, and Math (STEM)-specific draws through the Express Entry system. These draws specifically target candidates who have work experience in eligible STEM occupations.</p>
        <p>If you're part of the STEM workforce and are considering immigrating to Canada, these specialized draws could be a significant opportunity for you. Stay tuned for more updates on these STEM-specific Express Entry draws and make your move to Canada a successful one.</p>
      </section>

      <section className={styles.eligibility} id="eligiblity">
        <h2 className={styles.subheading}>First You Must Be Eligible with Express Entry</h2>
        <p>Before you can participate in a STEM-specific draw through Canada's Express Entry system, you need to be eligible. Here's how you can get started:</p>
        <ol>
          <li>Join the Express Entry Pool: The first step towards becoming a candidate for a STEM-specific draw is to get into the Express Entry pool.</li>
          <li>Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool:
            <ul>
              <li><Link to="/federal-skilled-worker-program" className={styles.button}>Federal Skilled Worker Program (FSW)</Link>: This program is ideal for tech workers who have the necessary work experience, education, and language ability.</li>
              <li><Link to="/canadian-experience-class" className={styles.button}>Canadian Experience Class (CEC)</Link>: Similar to the FSW program, the CEC is also suitable for tech workers who have gained Canadian work experience.</li>
              <li><Link to="/federal-skilled-trades-program" className={styles.button}>Federal Skilled Trades Program (FSTP)</Link>: If you're a trades worker, this program is designed for you. It requires proof of relevant work experience, education, and language proficiency.</li>
            </ul>
          </li>
        </ol>
        <p>Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.</p>
        <p>Important things to keep in mind:</p>
        <ul>
          <li>You need at least one year of continuous work experience in a "skilled" occupation, classified under 0, 1, 2, and 3 of Canada’s Training Education Experience Responsibilities (TEER) categories.</li>
          <li>You can accumulate this work experience over two years in part-time roles, as long as it adds up to 1,560 hours, which is equivalent to one year of full-time work.</li>
          <li>The CEC program requires at least one year of skilled work experience in Canada. On the other hand, the FSW program doesn't require any Canadian work experience.</li>
        </ul>
        <p>Having six months of work experience in a STEM occupation alone is not enough to qualify for Express Entry. You need to meet the work experience requirements for at least one of the programs first. If you have one year of work experience in an eligible STEM occupation and meet the other requirements of the CEC or the FSW, then you may be invited in a STEM-specific draw.</p>
      </section>

      <section className={styles.stemEligibility} id="stem-eligiblity">
        <h2 className={styles.subheading}>Eligibility Criteria for STEM (Science, Technology, Engineering, Math) Occupations</h2>
        <ul>
          <li>A valid university degree in a STEM field.</li>
          <li>Within the last 3 years, you have at least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in a single eligible STEM occupation.</li>
          <li>A valid Express Entry profile.</li>
        </ul>
      </section>

      <section className={styles.stemNocCodes} id="stem-noc-codes">
        <h2 className={styles.subheading}>STEM Eligible NOC Codes</h2>
        <p><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html" target="_blank" rel="noopener noreferrer" className={styles.link}>STEM Eligible NOC Codes</a></p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Occupation</th>
              <th>2021 NOC Code</th>
              <th>TEER Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Architects</td>
              <td>21200</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Architecture and science managers</td>
              <td>20011</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Business systems specialists</td>
              <td>21221</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Civil Engineers</td>
              <td>21300</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Computer and information systems managers</td>
              <td>20012</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Computer engineers (except software engineers and designers)</td>
              <td>21311</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Computer systems developers and programmers</td>
              <td>21230</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Cybersecurity specialists</td>
              <td>21220</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Data scientists</td>
              <td>21211</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Database analysts and data administrators</td>
              <td>21223</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Electrical and electronics engineers</td>
              <td>21310</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Engineering managers</td>
              <td>20010</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Industrial and manufacturing engineers</td>
              <td>21321</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Information systems specialists</td>
              <td>21222</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Land surveyors</td>
              <td>21203</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Landscape Architects</td>
              <td>21201</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Mathematicians, statisticians and actuaries</td>
              <td>21210</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Metallurgical and materials engineers</td>
              <td>21322</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Natural and applied science policy researchers, consultants and program officers</td>
              <td>41400</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Software developers and programmers</td>
              <td>21232</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Software engineers and designers</td>
              <td>21231</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Urban and land use planners</td>
              <td>21202</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Web designers</td>
              <td>21233</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Web developers and programmers</td>
              <td>21234</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.drawHistory}>
        <h2 className={styles.subheading}>Express Entry STEM Draws History</h2>
        <p>The first-ever Express Entry draw for STEM workers was just held. Express Entry draw #254 saw a CRS score of 486 and invited 500 candidates eligible for category-based selection in science, technology, mathematics, and engineering (STEM) occupations.</p>
        <Link to="/previous-draw-history" className={styles.button}>View Previous Draw History</Link>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.</p>
        <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.</p>
        <Link to="/contact-us" className={styles.button}>Contact Us</Link>
      </section>

      <section className={styles.whyChooseUs}>
        <h2 className={styles.subheading}>Why Choose Us</h2>
        <p>Brightlight Immigration offers personalized services to maximize your chances of success. Our experienced team provides dedicated support throughout the immigration process, ensuring a smooth and efficient experience.</p>
        {/* Include additional details as necessary */}
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.subheading}>Client Testimonials</h2>
        <div className={styles.videoTestimonials}>
          {/* Include video testimonials here */}
        </div>
        <div className={styles.writtenTestimonials}>
          {/* Include written testimonials here */}
        </div>
      </section>
    </div>

    </>
  );
};

export default StemTargetedDraw;
