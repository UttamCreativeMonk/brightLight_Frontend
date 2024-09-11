import React, { useState } from "react";
import styles from "../styles/Citizenship.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const Citizenship = () => {
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
          <h1>Citizenship - The highest form of legal status in Canada</h1>
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
            <h2>Congratulations on your PR Journey!</h2>
            <p>
              After completing your 3 years (or staying physically in Canada for
              at least 1,095 days) of PR journey in Canada, you are now
              officially going to become a Canadian Citizen. Congratulations.
              All you are left to do is complete the Canadian Citizenship
              application through IRCC and enjoy the highest form of legal
              status in Canada. This is the last step for you to become a
              Canadian.
            </p>
          </section>

          <section className={styles.section} id="benefits">
            <h2>Benefits of becoming a Canadian Citizen:</h2>
            <ul>
              <li>You now have the right to vote and hold office</li>
              <li>
                You now have the right to travel internationally with a Canadian
                passport
              </li>
              <li>You can now work and live in Canada indefinitely</li>
              <li>You can access Canadian social programs and benefits</li>
              <li>
                You also have the right to apply for Canadian citizenship for
                your children
              </li>
            </ul>
          </section>

          <section className={styles.section} id="eligibility">
            <h2>Eligibility criteria for Canadian Citizenship</h2>
            <p>
              Are you eligible to file your Canadian Citizenship? Let's find
              out.
            </p>
            <ul>
              <li>
                You need to be a permanent resident of Canada and have lived in
                Canada for 3 years out of the past 5 years. You must be present
                physically in Canada for at least 1,095 days out of the past 5
                years.
              </li>
              <li>
                You have filed your taxes in Canada for at least three years
                during the five years before applying.
              </li>
              <li>
                You have to pass a citizenship test. This test is made to assess
                your knowledge of Canadian history, geography, values, and
                government.
              </li>
              <li>Show your skills and proficiency in English or French</li>
            </ul>
            <p>
              Note that there are some exceptions to these requirements, such as
              for spouses of Canadian citizens and for individuals who have
              served in the Canadian Armed Forces.
            </p>
          </section>

          <section className={styles.section} id="how-to-apply">
            <h2>How to apply for Canadian Citizenship?</h2>
            <p>
              Before you apply, make sure you meet the eligibility requirements.
              These include being a permanent resident of Canada, having lived
              in Canada for at least 3 out of the past 5 years, filing your
              taxes in Canada for at least three years during the five years
              before applying, passing a citizenship test, and showing your
              ability to speak either English or French.
            </p>
            <p>
              To apply, you'll need to complete the necessary forms, provide
              supporting documents, and pay the applicable fees.
            </p>
            <p>
              If you're approved, you'll attend a citizenship ceremony to take
              the Oath of Citizenship, where you will officially become a
              Canadian citizen. You will also receive your Canadian citizenship
              certificate.
            </p>
            <p>
              We know what it means to you to become a Canadian citizen. We
              would be honored to help you through the application process and
              to get you ready for your citizenship ceremony.{" "}
              <a href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj">
                Click here
              </a>{" "}
              (hyperlink to Calendly)
            </p>
          </section>

          <section className={styles.section} id="refusal-reasons">
            <h2>Reasons for refusal of Canadian Citizenship:</h2>
            <ul>
              <li>
                Non-compliance with residency requirements: To be eligible for
                Canadian citizenship, you must have lived in Canada for at least
                1,095 days (3 years) during the five years before applying. You
                must also have maintained your permanent resident status
                throughout this time. If you have not met these residency
                requirements, your application may be refused.
              </li>
              <li>
                Failure to pass the citizenship test: The citizenship test
                assesses your knowledge of Canadian history, geography, values,
                and government. You must achieve a score of 75% or higher to
                pass the test. If you do not pass the test, you will be required
                to retake it.
              </li>
              <li>
                Your Inability to Show Language Proficiency: To be eligible for
                Canadian citizenship, you must showcase your proficiency in
                either English or French. You can do this by passing a language
                test. If you do not pass the language test, you may be required
                to take additional language classes.
              </li>
              <li>
                Misrepresentation or fraud: If you have misrepresented or
                falsified any information on your citizenship application, or if
                you have provided false or misleading information to a Canadian
                immigration officer, your application may be refused.
              </li>
              <li>
                Criminal record: If you have a criminal record, it may affect
                your eligibility for Canadian citizenship. In some cases, a
                criminal record may be a bar to citizenship.
              </li>
              <li>
                Security concerns: If there are any security concerns about your
                application, your application may be refused. This could include
                concerns about your involvement in organized crime, terrorism,
                or other criminal activities.
              </li>
              <li>
                Failure to attend a citizenship ceremony: If you are invited to
                a citizenship ceremony, you must attend to take the Oath of
                Citizenship. If you do not attend the ceremony, your application
                may be refused.
              </li>
            </ul>
            <p>
              <a href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj">
                Book Appointment
              </a>
            </p>
          </section>

          <section className={styles.section} id="why-choose-us">
            <h2>Still not sure?</h2>
            <p>
              If you have received a refusal for any of the reasons mentioned
              above, do not worry. With over a decade of experience, we
              specialize in previously refused cases. We have got approvals for
              clients who had multiple previous refusals. We achieve this with a
              tailored approach to your specific case, addressing each concern
              that the officer has listed in previous refusals. We use case law
              and find similar cases to your circumstances that had positive
              results, and we use them as precedents in cases we work on. This
              is why we have a high success rate.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process all the way to obtaining your visa. Start your
              process now.
            </p>
          </section>


          <section className={styles.section}>
            <h2>Clients Testimonials</h2>
            {/* Add video and written testimonials here */}
          </section>
        </main>
      </div>

      <Footer1 />
    </>
  );
};

export default Citizenship;
