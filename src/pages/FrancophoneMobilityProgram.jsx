import React, { useState, useEffect, useRef } from "react";
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
              <p onClick={() => scrollToSection("employer-requirement")}>
                Employer Requirement
              </p>
              <p onClick={() => scrollToSection("work-permit-duration")}>
                Work Permit Duration
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>Francophone Mobility Program – NO LMIA Required</h1>
          <p>
            Mobilité Francophone: Unlocking Opportunities for French-Speaking
            Workers
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Francophone Mobility Program</h2>
          <h4>
            The Francophone Mobility Program offers an exciting pathway for
            foreign workers seeking employment in Canada. Designed to promote
            French-speaking talent, this program operates outside of Quebec and
            provides unique advantages. Let’s explore the key details:
          </h4>
          <ul>
            <li>
              <strong>No LMIA Required:</strong> Unlike traditional work
              permits, the <strong>Mobilité Francophone</strong> stream operates
              under the
              <strong> International Mobility Program</strong>. Employers can
              hire foreign nationals without the need for a{" "}
              <strong>Labour Market Impact Assessment (LMIA)</strong>. This
              means no recruitment efforts or training requirements for Canadian
              citizens or permanent residents. Additionally, the $1,000 LMIA
              application fee is waived.
            </li>
            <li>
              <strong>Eligibility Without Borders:</strong> The{" "}
              <strong>Mobilité Francophone program</strong>Mobilité Francophone
              is open to workers of <strong>any nationality and age</strong>.
              Unlike the International Experience Canada (IEC) Program, there
              are no nationality-based restrictions.
            </li>
            <li>
              <strong>Language Flexibility:</strong> While the program aims to
              promote French-speaking workers, the{" "}
              <strong> language of work does not need to be French</strong>.
              Employers are not required to communicate in French.
            </li>
            <li>
              <strong>TEER Skill Levels:</strong> All{" "}
              <strong>TEER skill level occupations </strong>(0-5) are eligible
              to apply, except for primary agricultural work.
            </li>
            <li>
              <strong>Stream Evolution:</strong> The program’s eligibility is
              now tied to public policy reasons related to Canada’s academic
              institutions or economy, rather than cultural, social, or economic
              benefits.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Eligibility Criteria for Francophone Mobility Program</h2>
          <p>
            To qualify for <strong>Mobilité Francophone</strong>, applicants
            must meet the following conditions:
          </p>
          <ul>
            <li>
              <strong>Job Offer:</strong> Must be from outside Quebec (anywhere
              else in Canada). Primary agricultural work is not covered.
            </li>
            <li>
              <strong>French Language Proficiency:</strong> You must demonstrate
              a <strong> CLB 5 equivalent</strong> in speaking and listening
              (not reading and writing) through a French language exam.
              Alternatively, proof of previous French study or work experience
              is acceptable.
            </li>
            <li>
              <strong>TEF Assessment:</strong> If language proficiency is
              unclear in the initial application, the{" "}
              <strong> Test d’Evaluation Du Français (TEF) </strong>may be
              required. A result of{" "}
              <strong> Canadian Language Benchmark (CLB) 5 or higher </strong>{" "}
              is the threshold.
            </li>
          </ul>
          <button
            onClick={() => (window.location.href = "/french-targeted-draw")}
            className={styles.tefButton}
          >
            French CLB Calculator
          </button>
        </section>

        <section
          className={`${styles.employerRequirements} ${styles.section}`}
          id="employer-requirement"
          ref={(el) => (sectionsRef.current[3] = el)}
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
          className={`${styles.workPermitDuration} ${styles.section}`}
          id="work-permit-duration"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Work Permit Duration for Francophone Mobility Program</h2>
          <p>
            Work Permit Duration for Francophone Mobility Program Under the{" "}
            <strong> C16 LMIA exempt permit code,</strong> the work permit
            duration is determined by whichever of the following dates comes
            earlier:
          </p>
          <ul>
            <li>The expiration date of the foreign worker’s passport <strong>OR</strong></li>
            <li>
              The duration specified in the job offer issued by the employer.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.familyMembers} ${styles.section}`}
          id="family-members"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>
            Family Members and Dependents for Francophone Mobility Program
          </h2>
          <p>For the <strong>Francophone Mobility Program</strong> , family members and dependents have specific options:
          </p>
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

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Application Process for Francophone Mobility Program</h2>
          <ol>
            <li>
              <strong>Job Search:</strong>
              <ul>
                <li>
                Identify opportunities: Utilize specialized job platforms and the LinkedIn network to find job offers that align with your profile in regions outside Quebec.

                </li>
                <li>
                  <strong>Tip:</strong> Customize your search by applying filters for TEER 0 to TEER 5 positions and specifying your preference for French. Remember agriculture jobs are not covered under this program.

                </li>
              </ul>
            </li>
            <li>
              <strong>Preparing Your Application:</strong>
              <ul>
                <li>
                <strong>CV and Cover Letter: </strong> Adapt your CV and cover letter to the Canadian format, emphasizing your fluency in French and relevant professional experience.

                </li>
                <li>
                  <strong>Tip:</strong> Highlight concrete examples of professional achievements to showcase your value to potential Canadian employers.

                </li>
              </ul>
            </li>
            <li>
              <strong>File Submission:</strong>
              <ul>
                <li>
                <strong>Eligibility Criteria: </strong>   Ensure that you meet all eligibility criteria before submitting your application.

                </li>
                <li> <strong>Necessary Documents:</strong> Compile essential documents, including proof of language skills, professional qualifications, and a valid job offer.
                </li>
                <li>
                  <strong>Tip:</strong>  Review your application thoroughly to avoid errors or omissions that could delay or jeopardize the process.

                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section
          className={`${styles.workPermitRenewals} ${styles.section}`}
          id="work-permit-renewals"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>Work Permit Renewals for the Mobilité Francophone Stream</h2>
          <ul>
            <h4>If you currently hold a work permit issued through the Mobilité Francophone stream, you can easily renew it. Here’s how:
            </h4>
            <li>
              <strong>Submission Options:</strong> Renewals can be submitted by
              mail or online. Existing permits under the discontinued
              “Significant benefit – Francophone destined to work outside of
              Quebec” category can be renewed through Mobilité Francophone.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
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

export default FrancophoneMobilityProgram;
