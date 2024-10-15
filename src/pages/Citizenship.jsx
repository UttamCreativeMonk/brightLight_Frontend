import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Citizenship.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Citizenship = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/citizenshipMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
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
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>Citizenship - The highest form of legal status in Canada</h1>
            </header>

            <p className={styles.discription}>
              After completing your 3 years (or staying physically in Canada for
              at least 1,095 days) of PR journey in Canada, you are now
              officially going to become a Canadian Citizen. Congratulations.
              All you are left to do is complete the Canadian Citizenship
              application through IRCC and enjoy the highest form of legal
              status in Canada. This is the last step for you to become a
              Canadian.
            </p>
            <p className={styles.discription}>
              Because of Canadian citizenship, you’ll have several rights and
              responsibilities. It is the highest form of legal status in
              Canada, and it allows you to enjoy the full benefits of Canadian
              society, including the right to vote, hold public office, and live
              and work anywhere in the country.
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
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

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>Eligibility criteria for Canadian Citizenship</h2>
            <p>
              Are you eligible to file your Canadian Citizenship? Let's find
              out.
            </p>
            <ul style={{ marginTop: "20px", marginBottom: "20px" }}>
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

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>How to apply for Canadian Citizenship?</h2>
            <ul>
              <li>
                Before you apply, make sure you meet the eligibility
                requirements. These include being a permanent resident of
                Canada, having lived in Canada for at least 3 out of the past 5
                years, filing your taxes in Canada for at least three years
                during the five years before applying, passing a citizenship
                test, and showing your ability to speak either English or
                French.
              </li>
              <li>
                To apply, you'll need to complete the necessary forms, provide
                supporting documents, and pay the applicable fees.
              </li>
              <li>
                If you're approved, you'll attend a citizenship ceremony to take
                the Oath of Citizenship, where you will officially become a
                Canadian citizen. You will also receive your Canadian
                citizenship certificate.
              </li>
              <li>
                We know what it means to you to become a Canadian citizen. We
                would be honored to help you through the application process and
                to get you ready for your citizenship ceremony.
                <a href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj">
                  Click here
                </a>
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
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
            <p></p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
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
            <button
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
            id="why-choose-u"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                <strong>Experienced Team:</strong> Over a decade of experience
                in handling BCPNP applications with a high success rate.
              </li>
              <li>
                <strong>Tailored Approach:</strong> Personalized services and
                strategies based on your specific case.
              </li>
              <li>
                <strong>High Success Rate:</strong> Proven track record using
                case law and precedents for positive results.
              </li>
              <li>
                <strong>Comprehensive Support:</strong> Assistance from the
                start of the application process to obtaining your PR.
              </li>
            </ul>
          </section>
        </main>
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

export default Citizenship;
