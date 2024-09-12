import React, { useState } from "react";
import styles from "../styles/FrancophoneMobilityProgram.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";


const FrancophoneMobilityProgram = () => {
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer-requirement")}>
                Employer Requirement
              </p>
              <p onClick={() => scrollToSection("work-permit-duration")}>
                Work Permit Duration
              </p>
              <p onClick={() => scrollToSection("family-members")}>
                Family Members
              </p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("work-permit-renewals")}>
                Work Permit Renewals
              </p>
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
        <header className={styles.header} id="about-program">
          <h1>Francophone Mobility Program – NO LMIA Required</h1>
          <p>
            Mobilité Francophone: Unlocking Opportunities for French-Speaking
            Workers
          </p>
        </header>

        <section className={styles.benefits} id="benifits">
          <h2>Benefits of Francophone Mobility Program</h2>
          <ul>
            <li>
              <strong>No LMIA Required:</strong> Operates under the
              International Mobility Program, allowing employers to hire foreign
              nationals without a Labour Market Impact Assessment (LMIA). This
              eliminates recruitment efforts for Canadian citizens and waives
              the $1,000 LMIA application fee.
            </li>
            <li>
              <strong>Eligibility Without Borders:</strong> Open to workers of
              any nationality and age, without nationality-based restrictions.
            </li>
            <li>
              <strong>Language Flexibility:</strong> Although the program
              promotes French-speaking workers, the job does not need to be
              conducted in French, nor is it required for employers to
              communicate in French.
            </li>
            <li>
              <strong>TEER Skill Levels:</strong> All TEER skill level
              occupations (0-5) are eligible except for primary agricultural
              work.
            </li>
            <li>
              <strong>Stream Evolution:</strong> The program’s eligibility is
              now tied to public policy reasons related to Canada’s academic
              institutions or economy, rather than cultural, social, or economic
              benefits.
            </li>
          </ul>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2>Eligibility Criteria for Francophone Mobility Program</h2>
          <ul>
            <li>
              <strong>Job Offer:</strong> Must be from outside Quebec (anywhere
              else in Canada). Primary agricultural work is not covered.
            </li>
            <li>
              <strong>French Language Proficiency:</strong> Demonstrate CLB 5
              equivalent in speaking and listening through a French language
              exam, or proof of previous French study or work experience.
            </li>
            <li>
              <strong>TEF Assessment:</strong> If language proficiency is
              unclear, the Test d’Évaluation Du Français (TEF) may be required.
              CLB 5 or higher is the threshold.
            </li>
          </ul>
          <button onClick={() => window.location.href = '/french-targeted-draw'} className={styles.tefButton}>French CLB Calculator</button>
        </section>

        <section
          className={styles.employerRequirements}
          id="employer-requirement"
        >
          <h2>Employer Requirements for the Francophone Mobility Program</h2>
          <ul>
            <li>
              <strong>Job Offer:</strong> Issue a job offer at a reasonable wage
              rate within the province of work.
            </li>
            <li>
              <strong>LMIA Exempt Code:</strong> Request the LMIA exempt code
              for the job offer and work permit application. Employer compliance
              fee is $230.
            </li>
            <li>
              <strong>Proof of Operations:</strong> Provide evidence of
              operations, payroll, and income to justify the hire and the
              position.
            </li>
            <li>
              <strong>Work Location Identification:</strong> Identify the work
              location for the job offer and the foreign worker.
            </li>
          </ul>
        </section>

        <section
          className={styles.workPermitDuration}
          id="work-permit-duration"
        >
          <h2>Work Permit Duration for Francophone Mobility Program</h2>
          <p>
            The work permit duration is determined by whichever comes earlier:
          </p>
          <ul>
            <li>The expiration date of the foreign worker’s passport</li>
            <li>
              The duration specified in the job offer issued by the employer
            </li>
          </ul>
        </section>

        <section className={styles.familyMembers} id="family-members">
          <h2>
            Family Members and Dependents for Francophone Mobility Program
          </h2>
          <ul>
            <li>
              <strong>Dependent Children:</strong> Can apply for study permits.
            </li>
            <li>
              <strong>Spouses and Common-Law Partners:</strong> Eligible for a
              spousal open work permit, valid for the duration of the main
              applicant’s work permit.
            </li>
          </ul>
        </section>

        <section className={styles.applicationProcess} id="application-process">
          <h2>Application Process for Francophone Mobility Program</h2>
          <ol>
            <li>
              <strong>Job Search:</strong>
              <ul>
                <li>
                  Identify opportunities using specialized job platforms and
                  LinkedIn for positions outside Quebec.
                </li>
                <li>
                  <strong>Tip:</strong> Apply filters for TEER 0 to TEER 5
                  positions and specify a preference for French.
                </li>
              </ul>
            </li>
            <li>
              <strong>Preparing Your Application:</strong>
              <ul>
                <li>
                  Adapt your CV and cover letter to Canadian format, emphasizing
                  French fluency and relevant experience.
                </li>
                <li>
                  <strong>Tip:</strong> Highlight professional achievements to
                  showcase your value.
                </li>
              </ul>
            </li>
            <li>
              <strong>File Submission:</strong>
              <ul>
                <li>
                  Ensure eligibility criteria are met and compile necessary
                  documents including proof of language skills and a valid job
                  offer.
                </li>
                <li>
                  <strong>Tip:</strong> Review your application thoroughly to
                  avoid errors or omissions.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section
          className={styles.workPermitRenewals}
          id="work-permit-renewals"
        >
          <h2>Work Permit Renewals for the Mobilité Francophone Stream</h2>
          <ul>
            <li>
              <strong>Submission Options:</strong> Renewals can be submitted by
              mail or online. Existing permits under the discontinued
              “Significant benefit – Francophone destined to work outside of
              Quebec” category can be renewed through Mobilité Francophone.
            </li>
          </ul>
        </section>

        <section className={styles.consultation} id="why-choose-us">
          <h2>Still not sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. While we don't provide jobs for LMIA,
            we can certainly assist you if you have a job offer. We have
            obtained approvals for clients who had multiple previous refusals
            with a tailored approach, addressing each concern listed in previous
            refusals. We use case law and similar cases as precedents to achieve
            a high success rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists to assist you from the start of the
            application process to obtaining your visa. Start your process now.
          </p>
        </section>
      </div>

      <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="faqs">
        <FAQ/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
      <Footer1 />
    </>
  );
};

export default FrancophoneMobilityProgram;
