import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OpenWorkVulnerableLP.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const OpenWorkVulnerableLP = () => {
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
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("evidence")}>Evidence</p>
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>Open Work Permit for Vulnerable Workers</h1>
          <p>
            Every employer in Canada is entitled to a safe and healthy work
            environment. Those being exploited at their workplaces can acquire
            an open work permit for vulnerable workers.
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Open Work Permit for Vulnerable Workers</h2>
          <ul>
            <li>
              <strong>Flexibility:</strong> Work with nearly any employer across
              Canada.
            </li>
            <li>
              <strong>Remedy for Abusive Environments:</strong> Provides a way
              to flee an abusive work environment and seek another job.
            </li>
            <li>
              <strong>No Application Fee:</strong> There is no fee for applying.
            </li>
            <li>
              <strong>Temporary Permit:</strong> Allows enough time to secure
              alternative employment and apply for a new work permit.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Eligibility for Open Work Permit for Vulnerable Workers</h2>
          <ul>
            <li>
              You are inside Canada and hold a specific employer's work permit,
              such as a Labour Market Impact Assessment (LMIA)-based work permit
              or under the Seasonal Agricultural Worker Program.
            </li>
            <li>You are facing or at risk of job-related abuse in Canada.</li>
          </ul>
          <h3>How IRCC Defines Abuse</h3>
          <p>
            Any behavior that scares, controls, or isolates you could be abuse.
          </p>
          <p>
            Abuse can be physical, sexual, financial, or mental and can include
          </p>
          <ul>
            <li>Physical abuse, including assault and forcible confinement</li>
            <li>Sexual abuse, including sexual contact without consent</li>
            <li>Psychological abuse, including threats and intimidation</li>
            <li>Financial abuse, including fraud and extortion</li>
            <li>
              Reprisals, such as disciplinary measures, demotions, dismissals,
              or threats of such actions
            </li>
          </ul>
        </section>

        <section
          className={`${styles.evidence} ${styles.section}`}
          id="evidence"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Types of Evidence</h2>
          <p>
            You should also include as much evidence as you can with your
            application.
          </p>
          <p>Evidence could include:</p>
          <ul>
            <li>
              Letter, statement, or report from an abuse support organization,
              medical doctor, or health care professional
            </li>
            <li>Sworn statement (affidavit) from yourself</li>
            <li>
              Copy of an official report to an enforcement agency (e.g., police
              or Canada Border Services Agency)
            </li>
            <li>
              Official complaint to a provincial government enforcement agency
              (e.g., employment standards branch)
            </li>
            <li>Victim impact statement</li>
            <li>Email or text messages</li>
            <li>Pay stubs or bank statements</li>
            <li>Photos showing injuries or working conditions</li>
            <li>Witness testimony</li>
          </ul>
          <p>
            The list above includes examples of evidence. You may have other
            types of evidence.
          </p>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>How to Apply</h2>
          <ol>
            <li>Collect extensive documents to provide evidence to IRCC.</li>
            <li>
              Draft a mandatory letter describing the abuse, along with a sworn
              statement by the applicant.
            </li>
            <li>
              Apply to IRCC and wait for processing, usually within a week.
            </li>
            <li>
              The IRCC officer may request additional documents or, in rare
              cases, interview the applicant.
            </li>
            <li>
              Once approved, IRCC sends a work permit by mail, which is valid
              for 1 year.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. While we don't provide jobs for LMIA,
            we can certainly assist you if you have a job offer. We have
            obtained approvals for clients who had multiple previous refusals.
            We achieve this with a tailored approach to your specific case,
            addressing each concern listed in previous refusals. We use case law
            and similar cases as precedents to achieve a high success rate.
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

export default OpenWorkVulnerableLP;
