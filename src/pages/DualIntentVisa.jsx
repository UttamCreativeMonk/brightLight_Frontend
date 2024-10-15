import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/DualIntentVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const DualIntentVisa = () => {
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

    fetch("https://brightlight-node.onrender.com/dualintentVisaMeta")
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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Dual Intent Visa
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            A Dual Intent Visa allows you to have two different reasons for
            visiting Canada. This means you can come to Canada temporarily with
            the option of considering permanent residence in the future or vice
            versa. Typically, these applications are made by individuals who
            already have a temporary resident visa and have either applied or
            are planning to apply for permanent resident status in Canada. This
            flexibility is what makes this visa type unique and called "Dual
            Intent."
          </p>
          <p>
            At <strong>Brightlight Immigration</strong>, we understand that
            demonstrating Dual Intent can be complex. With over 12 years of
            experience, we aim to simplify this process for you.
          </p>
        </section>

        <section
          className={`${styles.scenarios} ${styles.section}`}
          id="scenarios"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>Common Scenarios</h2>
          <ul>
            <li>
              If you've applied for permanent residence through spousal
              sponsorship and wish to reunite with your spouse in Canada while
              waiting for your PR application, you can apply for a Dual Intent
              Visa to temporarily visit and live with your spouse in Canada.
            </li>
            <li>
              If you’ve submitted an Express Entry profile and are in the
              application process, you can apply for a Dual Intent Visa to
              temporarily visit Canada or apply for a work/study permit while
              your permanent residency application is in process. This allows
              you to stay in Canada and experience the country during your PR
              application review.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.keyConsiderations} ${styles.section}`}
          id="key-points"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>Key Considerations</h2>
          <p>
            Dual Intent Visa for Outland Spouse: Navigating the waiting period
            during spousal sponsorship application processing can be challenging
            for newly married couples. These applications often take a
            considerable amount of time to process. However, there is an
            alternative: the Dual Intent Visitor Visa. In most cases, this visa
            is approved within 30 days and boasts a remarkable success rate of
            over 90%.
          </p>

          <p>
            If a spouse or partner can convincingly demonstrate that they will
            leave Canada at the end of their authorized stay, even if their
            permanent residence application is rejected, officers may issue a
            temporary resident visa (TRV).
          </p>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2 className={styles.subheading}>Eligibility Criteria</h2>
          <p>
            Immigration officers carefully review your application for temporary
            residence to ensure you're eligible to stay in Canada and that you
            have genuine intentions. They consider various factors that affect
            your ability to support yourself and your plans for the future. Here
            are some key considerations for dual intent applications:
          </p>
          <ul>
            <li>
              How long do you intend to stay in Canada? Provide a specific
              timeframe.
            </li>
            <li>
              How will you support yourself financially during your stay in
              Canada? Share your sources of income, etc.
            </li>
            <li>
              What connections do you have that will ensure your return to your
              home country after you visit Canada? Share concrete examples.
            </li>
            <li>
              Clearly express the reason for your visit to Canada. Elaborate on
              the specific circumstances surrounding your trip.
            </li>
            <li>
              Ensure the documents you submit with your visa application are
              genuine and accurate.
            </li>
            <li>
              Provide evidence of your past compliance with Canadian immigration
              regulations and the information provided in your biographic and
              biometric records.
            </li>
            <li>
              If your visa application is refused, what are your plans for
              returning to your home country? Outline a clear contingency plan.
            </li>
          </ul>
          <p>
            Under the recent changes to family reunification policies,
            immigration officers will now consider additional factors when
            assessing applications.
          </p>
          <h3>In cases of Spousal and Partners:</h3>
          <ul>
            <li>
              Immigration officers will evaluate whether your sponsorship
              application has been approved.
            </li>
            <li>
              Immigration officers will assess the progress of your permanent
              residence application, including whether stage one has been
              approved.
            </li>
            <li>The office will check if you have received your AOR or not.</li>
            <li>
              Immigration officers will also assess the ties to your home
              country.
            </li>
            <li>
              What will your plans be for returning home in case your permanent
              residence application is denied?
            </li>
          </ul>
          <h3>In the cases of Parents and Grandparents:</h3>
          <ul>
            <li>
              Immigration officers will consider whether your permanent
              residence applications are in progress.
            </li>
            <li>
              They will assess whether your primary intention is to visit Canada
              temporarily and not seek permanent residency.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.refusals} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>Common Refusal Reasons</h2>
          <ul>
            <li>
              Failure to demonstrate genuine dual intent is a common reason for
              your dual intent visa application to be refused.
            </li>
            <li>
              The visa officer is not satisfied that you will leave Canada at
              the end of your stay.
            </li>
            <li>
              The visa officer is not satisfied that you have strong ties to
              your home country.
            </li>
            <li>
              The visa officer is not satisfied with your purpose for traveling
              to Canada temporarily.
            </li>
            <li>
              You have previous visa refusals on record that were not justified
              in your current application.
            </li>
          </ul>
        </section>


        
        <section
          className={`${styles.support} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have got approvals for clients who
            had multiple previous refusals.
          </p>
          <p>
            We achieve this with a tailored approach to your specific case,
            addressing each concern that the officer has listed in previous
            refusals. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa. Start your
            process now.
          </p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>

        {/* <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="whyChooseUs"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading} id="why-choose-us">
            Why Choose Us?
          </h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
        </section> */}
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling BCPNP applications with a high success rate.
            </li>
            <li>
              <strong>Tailored Approach:</strong> Personalized services and
              strategies based on your specific case.
            </li>
            <li>
              <strong>High Success Rate:</strong> Proven track record using case
              law and precedents for positive results.
            </li>
            <li>
              <strong>Comprehensive Support:</strong> Assistance from the start
              of the application process to obtaining your PR.
            </li>
          </ul>
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

export default DualIntentVisa;
