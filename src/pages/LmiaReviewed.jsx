import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LmiaReviewed.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const LmiaReviewed = () => {
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
        <header className={styles.header}>
          <h1>Labour Market Impact Assessment (LMIA)</h1>
        </header>
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
              <p onClick={() => scrollToSection("pathways")}>Pathways</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
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
        <main className={styles.mainContent} id="about-program">
          <section className={styles.section}>
            <h2>What is an LMIA?</h2>
            <p>
              If you're looking to apply for an LMIA, it's because you are
              either a foreign worker who wants to apply for a job on a
              temporary work permit that is available in any Canadian province
              or an employer who wants to bring in skilled professionals or
              experienced workers to join their team in Canada.
            </p>
            <p>
              Canada relies on the Temporary Foreign Worker Program (TFWP) to
              bring in workers from other countries when there's a shortage of
              qualified workers in Canada for a particular job. When a Canadian
              employer wants to hire a foreign worker, they generally submit an
              application known as a Labour Market Impact Assessment (LMIA) to
              the Canadian Government Department - Employment and Social
              Development Canada (ESDC).
            </p>
            <p>
              An ESDC officer reviews the application to assess whether hiring
              the foreign worker would be beneficial for the Canadian job
              market. They ensure that qualified Canadians/PR haven't been
              overlooked for the position and that the foreign worker will
              receive appropriate pay and benefits according to federal and
              provincial regulations.
            </p>
            <p>
              If the LMIA is positive or neutral, it means there's no Canadian
              available for the job, and hiring a foreign worker won't hurt the
              Canadian job market. However, if it's negative, it means that the
              employer has failed to demonstrate that they meet at least one of
              the requirements mentioned on the ESDC website.
            </p>
            <p>
              At Brightlight Immigration, we do not provide recruitment
              services. As your official legal consultants, we can represent
              your case to ESDC and get you the desired favorable response.
            </p>
          </section>

          <section className={styles.section} id="benifits">
            <h2>Benefits of the LMIA Program</h2>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <h3>Benefits for Canadian Employers</h3>
                <ul>
                  <li>
                    The LMIA program lets Canadian employers hire skilled people
                    from around the world, filling important roles in various
                    industries.
                  </li>
                  <li>
                    Canadian businesses can grow by hiring workers from other
                    countries, bringing in new ideas, and reaching more
                    customers. This global connection makes them more innovative
                    and competitive.
                  </li>
                  <li>
                    The LMIA program helps solve shortages of workers in
                    important areas like manufacturing, healthcare, and
                    technology. By filling these gaps, businesses can run
                    smoothly and help Canada's economy grow.
                  </li>
                </ul>
              </div>
              <div className={styles.benefit}>
                <h3>Benefits for Foreign Workers</h3>
                <ul>
                  <li>
                    The LMIA program gives foreign workers a chance to work in
                    Canada, gaining valuable experience in a well-known country.
                    This experience can open doors for their future careers.
                  </li>
                  <li>
                    Working in Canada helps foreign workers learn new skills,
                    adapt to different work settings, and experience various
                    industries and cultures. This professional growth can lead
                    to better jobs and personal development.
                  </li>
                  <li>
                    Foreign workers who get jobs through the LMIA program can
                    work legally in Canada, giving them financial stability and
                    an opportunity to start a new life in a friendly country.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section} id="pathways">
            <h2>Pathways of LMIA Available</h2>
            <div className={styles.pathways}>
              <Link to="/low-wage-lmia" className={styles.button}>
                High-wage/Low-wage LMIA
              </Link>
              <Link to="/agriculture-stream-lmia" className={styles.button}>
                Agricultural Stream LMIA
              </Link>
              <Link to="/pr-supporting-lmia" className={styles.button}>
                PR Supporting LMIA with/without WP
              </Link>
              <Link to="/global-stream-lmia" className={styles.button}>
                Global Talent Stream LMIA
              </Link>
              <Link
                to="/permanent-residence-pathways-caregivers-lp"
                className={styles.button}
              >
                Caregiver LMIA
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2>How to Apply for LMIA</h2>
            <div className={styles.applicationProcess}>
              <h3>As an Employer</h3>
              <ul>
                <li>
                  You must submit an LMIA application to Employment and Social
                  Development Canada (ESDC).
                </li>
                <li>
                  ESDC will assess the application to determine whether you meet
                  the requirements.
                </li>
                <li>
                  If the application is approved, ESDC will provide you with a
                  copy of the positive LMIA.
                </li>
                <li>
                  You can then add the foreign worker’s name to the LMIA so that
                  they can apply for a work permit. This can be done upfront as
                  well.
                </li>
              </ul>
              <h3>As a Foreign Worker</h3>
              <ul>
                <li>Apply for a work permit as per guidelines set by IRCC.</li>
                <li>
                  IRCC will assess your application to check if you meet the
                  requirements.
                </li>
                <li>
                  If your application is approved, IRCC will issue you a work
                  visa.
                </li>
                <li>After entering Canada, you will be given a work permit.</li>
                <li>
                  With the work permit, you’re supposed to work for the employer
                  who provided you with the LMIA.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Common Reasons for LMIA Refusal</h2>
            <ul>
              <li>
                As an employer, you did not try to hire Canadians by
                advertising, attending job fairs, or using online platforms.
              </li>
              <li>
                As an employer, you had an LMIA revoked in the past two years.
              </li>
              <li>
                As an employer, you have labor disputes or violate employment
                standards.
              </li>
              <li>As an employer, your business isn’t legitimate.</li>
              <li>
                As an employer, you did not provide the necessary documentation
                for the foreign worker's work permit.
              </li>
              <li>
                As a worker, you don't have enough relevant work experience or
                qualifications for the position.
              </li>
              <li>
                As a worker, you couldn’t meet the language requirements as
                required.
              </li>
              <li>
                As a worker, you have a criminal history, especially for serious
                offenses.
              </li>
              <li>
                As a worker, you do not meet the specific requirements outlined
                in the job description.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Still Not Sure?</h2>
            <p>
              If you have received a refusal for any of the reasons mentioned
              above, do not worry. With over a decade of experience, we
              specialize in previously refused cases. While we don't provide
              jobs for LMIA, we can certainly assist you if you have a job
              offer. We have obtained approvals for clients who had multiple
              previous refusals. We achieve this with a tailored approach to
              your specific case, addressing each concern that the officer has
              listed in previous refusals. We use case law and find similar
              cases to your circumstances that had positive results, and we use
              them as precedents in cases we work on. This is why we have a high
              success rate.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process to obtaining your visa. Start your process
              now.
            </p>
            <a
              href="https://calendly.com/your-link"
              className={styles.bookAppointment}
            >
              Book an Appointment
            </a>
          </section>
        </main>
      </div>
      <Footer1 />
    </>
  );
};

export default LmiaReviewed;
