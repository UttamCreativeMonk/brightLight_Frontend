import React, { useState } from "react";
import styles from "../styles/EntryLevelSemiSkilled.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";


const EntryLevelSemiSkilled = () => {
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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons</p>
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
        <h1 className={styles.title} id="about-program">
          British Columbia Entry Level and Semi-Skilled Worker (ELSS) Stream
        </h1>
        <p className={styles.description}>
          The British Columbia Entry Level and Semi-Skilled Worker (ELSS) stream is part of the comprehensive British Columbia Provincial Nominee Program (BC PNP). Administered by the province of British Columbia, this program aims to facilitate the immigration journey for semi-skilled and entry level work experience.
        </p>
        <p className={styles.description}>
          Whether you’re a prospective immigrant seeking opportunities or an employer looking to hire skilled workers, the BC ELSS stream provides a pathway to contribute to the province’s vibrant workforce.
        </p>

        <h2 className={styles.subtitle} id="key-points">
          Benefits of BCPNP Entry Level and Semi-Skilled Worker (ELSS) Stream
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Nomination Priority: Successful candidates nominated through the BCPNP – Entry Level and Semi-Skilled Program (ELSS) receive an invitation to apply for Canadian permanent residence.</li>
          <li className={styles.listItem}>No Express Entry Profile Required: Unlike other immigration streams, applicants for this program do not need an Express Entry profile to be eligible.</li>
          <li className={styles.listItem}>No High-Skilled Job Offer Required: You do not need to be employed or have a job offer in a high-skilled occupation.</li>
        </ul>

        <h2 className={styles.subtitle} id="eligibility">
          Eligibility Criteria for the British Columbia BCPNP Entry Level and Semi-Skilled (ELSS) Program
        </h2>
        <div className={styles.criteria}>
          <h3 className={styles.subheading}>Job Offer</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Secure an indeterminate, full-time employment offer from an eligible BC employer.</li>
            <li className={styles.listItem}>The job offer must fall within an eligible National Occupational Classification (NOC) code, specifically TEER Category 4 or 5.</li>
            <li className={styles.listItem}>Location-specific variations apply:
              <ul className={styles.nestedList}>
                <li className={styles.nestedListItem}>Northeast Development Region of BC: All NOC 4 or 5 occupations are eligible except for live-in caregivers (NOC 44100).</li>
                <li className={styles.nestedListItem}>Outside the Northeast Development Region: Eligible occupations include:
                  <ul className={styles.nestedList}>
                    <li className={styles.nestedListItem}>Travel and accommodation roles (e.g., hotel front desk clerks, tour guides).</li>
                    <li className={styles.nestedListItem}>Food and beverage service positions (e.g., bartenders, food servers).</li>
                    <li className={styles.nestedListItem}>Support occupations in accommodation and travel services.</li>
                    <li className={styles.nestedListItem}>Other service roles (e.g., dry cleaning, laundry).</li>
                    <li className={styles.nestedListItem}>Food processing positions (e.g., machine operators, butchers).</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h3 className={styles.subheading}>Work Experience</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Maintain full-time employment (averaging at least 30 hours per week year-round) with the BC employer supporting your BCPNP application.</li>
            <li className={styles.listItem}>Work in any ELSS-eligible occupation for at least 9 consecutive months before registering for the BCPNP.</li>
          </ul>

          <h3 className={styles.subheading}>Education</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Successfully complete secondary education (high school) within or outside Canada.</li>
            <li className={styles.listItem}>If the position requires certification, licensing, or registration, provide relevant documentation.</li>
          </ul>

          <h3 className={styles.subheading}>Language Proficiency</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Attain a Canadian Language Benchmark (CLB) score of at least 4 in English or French.</li>
          </ul>

          <h3 className={styles.subheading}>Eligible ELSS Occupations</h3>
          <div className={styles.occupations}>
            <h4 className={styles.occupationTitle}>Occupations in Travel and Accommodation</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>64314 Hotel front desk clerks</li>
            </ul>

            <h4 className={styles.occupationTitle}>Tour and Recreational Guides and Casino Occupations</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>64320 Tour and travel guides</li>
              <li className={styles.listItem}>64321 Casino workers</li>
              <li className={styles.listItem}>64322 Outdoor sport and recreational guides</li>
            </ul>

            <h4 className={styles.occupationTitle}>Occupations in Food and Beverage Service</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>64300 Maîtres d’hotel and hosts/hostesses</li>
              <li className={styles.listItem}>64301 Bartenders</li>
              <li className={styles.listItem}>65200 Food and beverage servers</li>
              <li className={styles.listItem}>65201 Food counter attendants, kitchen helpers and related support occupations</li>
            </ul>

            <h4 className={styles.occupationTitle}>Cleaners (Employed Directly by Hotels/Resorts)</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>65210 Support occupations in accommodation, travel and facilities set-up services</li>
              <li className={styles.listItem}>65310 Light duty cleaners</li>
              <li className={styles.listItem}>65311 Specialized cleaners</li>
              <li className={styles.listItem}>65312 Janitors, caretakers and heavy-duty cleaners</li>
            </ul>

            <h4 className={styles.occupationTitle}>Other Service Occupations (Employed Directly by Hotels/Resorts)</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>65320 Dry cleaning, laundry and related occupations</li>
              <li className={styles.listItem}>65329 Other service support occupations</li>
            </ul>

            <h4 className={styles.occupationTitle}>Food Processing</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>94140 Process control and machine operators, food and beverage processing</li>
              <li className={styles.listItem}>94141 Industrial butchers and meat cutters, poultry preparers and related workers</li>
              <li className={styles.listItem}>94142 Fish and seafood plant workers</li>
              <li className={styles.listItem}>94143 Testers and graders, food and beverage processing</li>
              <li className={styles.listItem}>95106 Labourers in food and beverage processing</li>
            </ul>
          </div>

          <a href="/bcpnp-calculator" className={styles.button}>Calculate Your BCPNP Score</a>
        </div>

        <h2 className={styles.subtitle} id="how-to-apply">
          Application Process for British Columbia Entry Level and Semi-Skilled Worker Stream
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}> <h3>Eligibility and Registration:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>Candidates who meet the minimum stream requirements can register a profile using BC’s online immigration portal.</li>
              <li className={styles.nestedListItem}>Once submitted, profiles are assessed, and candidates receive a score based on the BC Skills Immigration Ranking System.</li>
            </ul>
          </li>
          <li className={styles.listItem}><h3>Invitations and Application:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>The highest-ranking candidates are invited to apply to the stream during periodic intakes.</li>
              <li className={styles.nestedListItem}>Upon receiving an invitation, candidates must submit a complete application within 30 days.</li>
            </ul>
          </li>
          <li className={styles.listItem}><h3>Provincial Nomination and Work Permit:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>If the application is approved, the candidate receives a provincial nomination for permanent residence from BC.</li>
              <li className={styles.nestedListItem}>Candidates not already working for a BC employer can request a letter of support for a temporary work permit. This allows them to work in Canada while their permanent residence application is processed.</li>
              <li className={styles.nestedListItem}>Applying for a work permit with a province’s nomination letter is a separate application to IRCC.</li>
            </ul>
          </li>
          <li className={styles.listItem}><h3>Official Application for Permanent Residence:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>After receiving the provincial nomination, the applicant has six months to submit an official application for permanent residence.</li>
              <li className={styles.nestedListItem}>The applications are now submitted online.</li>
            </ul>
          </li>
        </ul>

        <h2 className={styles.subtitle}>
          Still Not Sure?
        </h2>
        <p className={styles.description}>
          Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling BCPNP Entry Level and Semi-Skilled (ELSS) Program. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.
        </p>
        <p className={styles.description}>
          At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.
        </p>
        <Link id="book-appointment" to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</Link>

        <h2 className={styles.subtitle} id="why-choose-us">
          Why Choose Us?
        </h2>
        <p className={styles.description}>
          At Brightlight Immigration, we offer:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Expertise: Over a decade of experience with high approval rates.</li>
          <li className={styles.listItem}>Personalized Service: Tailored approach to address each unique case.</li>
          <li className={styles.listItem}>Case Law Utilization: Leveraging precedents from similar cases.</li>
          <li className={styles.listItem}>Full Support: From initial application to final PR approval.</li>
        </ul>
      </div>


      <div id="faqs">
        <FAQ/>
      </div>
      <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
      <Footer1/>
    </>
  );
};

export default EntryLevelSemiSkilled;
