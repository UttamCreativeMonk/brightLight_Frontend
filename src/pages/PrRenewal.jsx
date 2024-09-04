import React, { useEffect, useState } from "react";
import styles from "../styles/PrRenewal.module.css";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

let PrRenewal = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState({});

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
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the program
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reason")}>
                Refusal Reason
              </p>
              <p onClick={() => scrollToSection("appointment")}>Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose us
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

      <div className={styles.section} id="eligibility">
        <h2 className={styles.sectionTitle}>
          Eligibility for Permanent Residency Renewal
        </h2>
        <ul className={styles.sectionContent}>
          <li>You should be a permanent resident of Canada.</li>
          <li>
            You have lived in Canada for at least 2 years out of the last 5
            years.
          </li>
          <li>
            You can apply for renewal up to 90 days before your current PR card
            expires.
          </li>
          <li>
            You shouldn’t be under an active removal order by a Canadian
            immigration judge.
          </li>
          <li>
            If you have already become a Canadian citizen, you do not need to
            renew your PR card.
          </li>
        </ul>
      </div>

      <div className={styles.section} id="how-to-apply">
        <h2 className={styles.sectionTitle}>
          How to Apply for Permanent Residency Renewal
        </h2>
        <p className={styles.sectionContent}>
          Renewing your PR card is a straightforward process that can be done
          online through the Government of Canada's website or by mail. You will
          need to fill out the necessary forms, provide supporting documents,
          and pay the applicable fees. However, this is a golden ticket for you
          and you shouldn’t risk it if you are not sure about it. Let us take
          care of this for you and get your renewal at the earliest.
        </p>
      </div>

      <div className={styles.section} id="refusal-reason">
        <h2 className={styles.sectionTitle}>
          Reasons for Refusal of Permanent Residency Renewal
        </h2>
        <ul className={styles.sectionContent}>
          <li>You did not complete two years out of the last five years.</li>
          <li>
            You are not physically present in Canada when you apply for renewal.
          </li>
          <li>
            You got convicted of an offense related to the misuse of a PR card.
          </li>
          <li>
            You gave false or misleading information on your PR card renewal
            application.
          </li>
        </ul>
      </div>

      <div className={styles.section} id="appointment">
        <h2 className={styles.sectionTitle}>Book Appointment</h2>
        <p className={styles.sectionContent}>
          Still not sure? If you have received a refusal for any of the reasons
          mentioned above, do not worry. With over a decade of experience, we
          specialize in previously refused cases. We have got approvals for
          clients who had multiple previous refusals. We achieve this with a
          tailored approach to your specific case, addressing each concern that
          the officer has listed in previous refusals. This is why we have a
          high success rate. At Brightlight Immigration, we have a dedicated
          team of visa application specialists who can assist you from the start
          of the application process all the way to obtaining your visa. Start
          your PR Card renewal process now.
        </p>
      </div>

      <div className={styles.section} id="why-choose-us">
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <p className={styles.sectionContent}>
          [Content about why to choose the service provider.]
        </p>
      </div>

      <div className={styles.section} id="testimonials">
        <h2 className={styles.sectionTitle}>Clients Testimonials</h2>
        <div className={styles.videoParent}>
          <video src="[path-to-video]" controls></video>
          <p>[Written testimonials]</p>
        </div>
      </div>

      <div className={styles.section} id="faqs">
        <h2 className={styles.sectionTitle}>FAQs Made Simple</h2>
        <div className={styles.faq}>
          <div className={styles.faqItem}>
            <strong>Q. When should I renew my PR card?</strong>
            <p>
              A. You should renew your PR card at least 90 days before it
              expires.
            </p>
          </div>
          <div className={styles.faqItem}>
            <strong>Q. What documents do I need to renew my PR card?</strong>
            <p>
              A. The documents you need to renew your PR card include a copy of
              your current PR card, passport, proof of residence, and proof of
              identity.
            </p>
          </div>
          <div className={styles.faqItem}>
            <strong>Q. How much does it cost to renew my PR card?</strong>
            <p>
              A. The application fee is $50 for adults and $25 for children
              under 18.
            </p>
          </div>
          <div className={styles.faqItem}>
            <strong>Q. How long does it take to renew my PR card?</strong>
            <p>
              A. Processing time is typically 6-8 weeks, but urgent applications
              may be processed within 2 weeks.
            </p>
          </div>
          <div className={styles.faqItem}>
            <strong>
              Q. What if I need to travel outside of Canada before my PR card is
              renewed?
            </strong>
            <p>
              A. You can travel with your valid PR card until 60 days after the
              new card is issued. If you leave before issuance, you will need a
              PRTD to return.
            </p>
          </div>
          <div className={styles.faqItem}>
            <strong>Q. What if my PR card is lost or stolen?</strong>
            <p>
              A. Apply for a replacement PR card. The process is similar to
              renewal, with an additional fee of $35.
            </p>
          </div>
        </div>
      </div>

      {/* <Footer1/> */}
    </>
  );
};
export default PrRenewal;
