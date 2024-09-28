import React, { useState } from "react";
import styles from "../styles/TemporaryResidentPermitDraft.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const TemporaryResidentPermitDraft = () => {
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
        <h1 className={styles.heading} id="about-program">
          Temporary Resident Permit (TRP)
        </h1>

        <section className={styles.introduction}>
          <p>
            The Temporary Resident Permit (TRP) is a legal document issued by
            Citizenship and Immigration Canada (CIC) that allows individuals who
            are inadmissible to Canada to temporarily visit and stay in the
            country under very specific circumstances.
          </p>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2 className={styles.subheading}>
            Eligibility Criteria for Temporary Resident Permit
          </h2>
          <p>
            The TRP is only granted when the individual's reasons for visiting
            Canada are compelling enough to outweigh the potential risks their
            presence may pose. For example, someone might receive a TRP for a
            work-related visit if their expertise is deemed beneficial to the
            Canadian economy or society, despite the reasons that initially made
            them inadmissible.
          </p>
        </section>

        <section className={styles.applicationProcess} id="how-to-apply">
          <h2 className={styles.subheading}>
            How to Apply for a Temporary Resident Permit
          </h2>
          <p>
            To obtain a Temporary Resident Permit requires you to show a
            compelling purpose for your intended visit to Canada. The
            application process can vary depending on your country of origin.
            For specific country-specific requirements, kindly connect with our
            office at 604 503 3734.
          </p>
        </section>

        <section className={styles.refusalReasons} id="refusal-reasons">
          <h2 className={styles.subheading}>
            Common Reasons for Refusals of Temporary Resident Permit (TRP)
          </h2>
          <ul>
            <li>
              When an individual is deemed inadmissible to Canada, it means they
              are prohibited from entering the country, often due to medical or
              criminal history issues.
            </li>
            <li>
              Individuals linked to terrorism, espionage, or other threats to
              national security may be considered inadmissible.
            </li>
            <li>
              Convictions for serious crimes, including murder, manslaughter,
              drug trafficking, and organized crime offenses, can lead to a
              refusal.
            </li>
            <li>
              Involvement in criminal organizations or gangs can render an
              individual refusal.
            </li>
            <li>
              Providing false or misleading information during the application
              process or any previous immigration interactions can result in a
              refusal.
            </li>
            <li>
              Failure to comply with Canadian immigration laws, such as
              overstaying a visa, can make an individual inadmissible.
            </li>
          </ul>
        </section>

        <section className={styles.support}>
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you have received a refusal or are inadmissible for any of the
            reasons mentioned above, do not worry. With over a decade of
            experience, we specialize in previously refused cases. We have
            obtained approvals for clients who had multiple previous refusals.
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
          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
        </section>

        <section className={styles.whyChooseUs}>
          <h2 className={styles.subheading} id="why-choose-us">
            Why Choose Us?
          </h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
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

export default TemporaryResidentPermitDraft;
