import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/BridgingOpenWorkPermitLP.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const BridgingOpenWorkPermitLP = () => {
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

    fetch("https://brightlight-node.onrender.com/bridgingOpenWorkMeta")
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("application-process")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.container}>
          <header className={`${styles.header} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}   >
            <h1>Bridging Open Work Permit</h1>
          </header>
          <section className={styles.intro}>
            <p>
              You can continue work in Canada while waiting for your permanent
              residency application (APR) to be approved. For this, you will
              have to apply for a bridging open work permit depending on the
              type of permanent residency application you have submitted. This
              type of work permit will “bridge” the gap between the expiry of
              your current work permit and the final decision on your permanent
              residency application.
            </p>
          </section>
          <section className={`${styles.benefits} ${styles.section}`} id="benefits" ref={(el) => sectionsRef.current[1] = el}  >
            <h2>Benefits of Bridging Open Work Permit</h2>
            <ul>
              <li>
                No interruption in your employment while you wait for the
                results of your permanent residence application.
              </li>
              <li>
                The condition that you can apply for bridging open work permit
                only if your work permit is set to expire within four months has
                been removed.
              </li>
              <li>
                Your work permit will remain valid even if your permanent
                residency application has been rejected or refused.
              </li>
              <li>
                You can apply even if you are on maintained status or eligible
                for restoration.
              </li>
            </ul>
          </section>
          <section className={`${styles.application} ${styles.section}`} id="application-process" ref={(el) => sectionsRef.current[2] = el}    >
            <h2>Eligibility criteria for Bridging Open Work Permit:</h2>
            <h4>
              To be eligible for a bridging open work permit (BOWP), you must:
            </h4>
            <ul>
              <li>
                Currently be in Canada after being authorized to enter as a
                worker.
              </li>
              <li>
                Meet one of the following criteria at the time of submission:
                <ul  className={styles.subList} >
                  <li>
                    Have valid temporary resident status and authorization to
                    work as the holder of a valid work permit.
                  </li>
                  <li>
                    Have maintained status and authorization to work as a result
                    of submitting an application to renew your work permit.
                  </li>
                  <li>
                    Be eligible to restore your temporary resident status.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                Have submitted an APR as the principal applicant under one of
                the following classes or pilots:
                </h4>
                <ul>
                  <li>Federal skilled worker class (FSWC)</li>
                  <li>Canadian experience class (CEC)</li>
                  <li>Federal skilled trades class (FSTC)</li>
                  <li>
                    Caring for children class or caring for people with high
                    medical needs class (before June 18, 2019)
                  </li>
                  <li>
                    Provincial Nominee Program (PNP) for applicants for whom
                    there are no employer restrictions on nominations
                  </li>
                  <li>Agri-Food Pilot (AFP)</li>
                  <li>
                    Quebec skilled worker class (QSWC) with valid Certificat de
                    sélection du Québec (CSQ) at the time of PR application
                    submission.
                  </li>
                  <li>
                    Home Childcare Provider Pilot (HCCPP) or Home Support Worker
                    Pilot (HSWP), who have received a positive eligibility
                    decision (approval in principle) on their application for
                    permanent residence after completing their qualifying work
                    experience.
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                Have completed one of the following APR stages depending on
                their class:
                </h4>
                <ul>
                  <li>
                    Electronic application for permanent residence (e-APR)
                    submitted under Express Entry has passed the Completeness
                    Check. This applies to the following classes:
                    <ul  className={styles.subList}>
                      <li>Federal skilled worker class (FSWC)</li>
                      <li>Canadian experience class (CEC)</li>
                      <li>Federal skilled trades class (FSTC)</li>
                      <li>
                        Provincial Nominee Program (PNP), where the applicant is
                        accepted through the provincial or territorial Express
                        Entry stream.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Application for permanent residence APR under the Quebec
                    skilled worker class (QSWC) has passed the Completeness
                    Check.
                  </li>
                  <li>
                    Receipt of a positive eligibility assessment on their
                    non-Express Entry application for permanent residence
                    submitted by mail or online under one of the following
                    classes or pilots:
                    <ul  className={styles.subList}>
                      <li>Caring for children</li>
                      <li>Caring for people with high medical needs</li>
                      <li>Agri-Food Pilot (AFP)</li>
                      <li>
                        PNP (where the applicant does not qualify for Express
                        Entry)
                      </li>
                      <li>
                        Home Childcare Provider Pilot (HCCPP) or Home Support
                        Worker Pilot (HSWP) after completing their qualifying
                        work experience.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section className={`${styles.application} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[3] = el} >
            <h2>How to apply for Bridging Open Work Permit:</h2>
            <ol>
              <li>
                After your permanent residency application has been completed
                and submitted, gather documents to prove above-mentioned
                eligibility criteria for bridging open work permit, suitable for
                your class of permanent residency application.
              </li>
              <li>
                Pay IRCC fees for open work permit holders. You will be required
                to pay separate restoration fee if applying in the restoration
                period.
              </li>
              <li>Submit complete application to IRCC.</li>
              <li>Wait for IRCC to process your application.</li>
            </ol>
          </section>
          <section  className={`${styles.advice} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[4] = el}   >
            <h2>Still not sure?</h2>
            <p>
            If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate. 

            </p>
            <p>
            At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now. 
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

export default BridgingOpenWorkPermitLP;
