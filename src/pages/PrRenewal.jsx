import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PrRenewal.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

let PrRenewal = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState({});

  const sectionsRef = useRef([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reason")}>
                Refusal Reason
              </p>
              <p onClick={() => scrollToSection("appointment")}>
                Book Appointment
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

      <section
        className={`${styles.section} ${styles.section}`}
        id="about-program"
        ref={(el) => (sectionsRef.current[11] = el)}
      >
        <header className={styles.header}>
          <h1>Permanent Residency Renewal </h1>
        </header>

        <p className={styles.discription}>
          Your PR card is proof that you have the right to live and study, just
          like a Canadian citizen. but, like taking care of something valuable,
          your PR card needs attention to keep working well. Renewing it ensures
          you can keep being a permanent resident and enjoy all the wonderful
          things Canada has to offer.
        </p>
        <p className={styles.discription}>
          Your PR card is your proof of status and allows you to re-enter Canada
          after traveling abroad. Most new PR cards are valid for 5 years and
          they are supposed to be renewed before they expire or within 90 days
          of their expiry date. However, you don't have to keep renewing it
          forever. After 5 years of being a Canadian PR, you can apply for
          Canadian citizenship. This means you will get a Canadian passport, and
          you will be able to vote in all Canadian elections. Check our{" "}
          <a href="/citizenship">Citizenship</a> page to look for your
          eligibility.
        </p>
      </section>

      <div
        className={`${styles.section} ${styles.section}`}
        id="eligibility"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
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

      <div
        className={`${styles.section} ${styles.section}`}
        id="how-to-apply"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
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

      <div
        className={`${styles.section} ${styles.section}`}
        id="refusal-reason"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h2 className={styles.sectionTitle}>
          Reasons for Refusal of Permanent Residency Renewal
        </h2>
        <p>
          Don’t forget to avoid these common PR Renewal refusal reasons and
          increase your chances of approval.
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
          className={styles.sectionContent}
        >
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

      <section
        className={`${styles.section} ${styles.section}`}
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
            <strong>Comprehensive Support:</strong> Assistance from the start of
            the application process to obtaining your PR.
          </li>
        </ul>
      </section>

      <div
        className={`${styles.section} ${styles.section}`}
        id="appointment"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2 className={styles.sectionTitle}>Still not sure?</h2>
        <p className={styles.sectionContent}>
          If you have received a refusal for any of the reasons mentioned above,
          do not worry. With over a decade of experience, we specialize in
          previously refused cases. We have got approvals for clients who had
          multiple previous refusals. We achieve this with a tailored approach
          to your specific case, addressing each concern that the officer has
          listed in previous refusals. This is why we have a high success rate.
        </p>
        <p style={{ marginTop: "20px" }}>
          {" "}
          At Brightlight Immigration, we have a dedicated team of visa
          application specialists who can assist you from the start of the
          application process all the way to obtaining your visa. Start your PR
          Card renewal process now.
        </p>
        <button
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
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
export default PrRenewal;
