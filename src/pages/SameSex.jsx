import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SameSex.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const SameSex = () => {
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("common-law-partner")}>
                Common Law Partner
              </p>
              <p onClick={() => scrollToSection("conjugal-partner")}>
                Conjugal Partner
              </p>
              <p onClick={() => scrollToSection("appointment")}>Appointment</p>
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
          Same-Sex Spousal Sponsorship in Canada
        </h1>
        <p
          className={`${styles.paragraphIntro} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          As a permanent resident or Canadian citizen, you have the opportunity
          to bring your same-sex partner to Canada through the permanent
          residence application process. Canada, known for its progressive
          values, respects privacy and individual liberty for all residents. In
          2005, the country legally recognized same-sex marriages, leading to
          the inclusion of common-law partners, same-sex spouses, and conjugal
          partners in the Citizenship and Immigration Canada (CIC) policies.
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          Eligibility Criteria for Same-Sex Sponsorship:
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          If you’re in a same-sex relationship and your partner resides outside
          Canada, you can sponsor them to join you in Canada. To qualify,
          consider the following criteria:
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "-20px",
            marginBottom: "60px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <li className={styles.listItem}>
            <strong>Permanent Resident or Canadian Citizen:</strong>
            You must be either a permanent resident or a Canadian citizen.
          </li>
          <li className={styles.listItem}>
            <strong>Marriage in Canada:</strong> If you and your same-sex
            partner are married within Canada, and possess a valid marriage
            certificate issued by a Canadian province or territory, you meet the
            eligibility requirements.
          </li>
          <li className={styles.listItem}>
            <strong>Marriage Outside Canada:</strong> If your marriage occurred
            outside Canada, you can still apply for spousal sponsorship or
            conjugal partner sponsorship if the marriage is legally recognized
            in Canada and complies with the laws of the country where it took
            place.
          </li>
        </ul>

        <h2
          style={{
            fontSize: "16px",
            marginTop: "-35px",
            marginBottom: "-10px",
          }}
          className={`${styles.subtitle} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          Same-Sex Partner Sponsorship
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          In Canada, two partner categories are acknowledged: conjugal and
          common-law. Even if you’re not legally married to your same-sex
          partner, you can sponsor them to reside in Canada together.
        </p>

        <h2
          className={`${styles.heading} ${styles.section}`}
          id="common-law-partner"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          What is a Common Law Partner?
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          A Common Law Partner refers to an individual with whom you share a
          continuous living arrangement for more than one year, maintaining a
          conjugal relationship. Whether your partner is of the opposite or same
          gender, this definition applies for immigration purposes.
          Demonstrating a significant level of commitment between both parties
          is essential.
        </p>

        <h2
          style={{ fontSize: "18px", marginTop: "-15px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          Proving Your Common Law Partnership
        </h2>
        <p>
          To establish your common-law relationship, consider the following
          aspects:
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          <li className={styles.listItem}>
            <strong>Shared Residence:</strong> You and your partner must reside
            in the same home, sharing responsibilities such as household chores.
          </li>
          <li className={styles.listItem}>
            <strong>Financial and Emotional Support:</strong> Provide evidence
            of mutual financial arrangements and emotional support.
          </li>
          <li className={styles.listItem}>
            <strong>Parenting Together:</strong> If applicable, demonstrate that
            you have children together.
          </li>
          <li className={styles.listItem}>
            <strong>Public Presentation:</strong> Present yourselves as a couple
            in public settings.
          </li>
          <li className={styles.listItem}>
            <strong>Personal Behavior:</strong> Factors like fidelity,
            commitment, and feelings toward each other contribute to the proof.
          </li>
        </ul>

        <h2
          style={{ fontSize: "18px", marginTop: "25px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          Common Law: Required Documents for Sponsorship
        </h2>
        <p>
          When applying, submit at least two of the following documents to
          validate your common-law relationship:
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          <li className={styles.listItem}>
            Pay stubs or tax forms showing the same address.
          </li>
          <li className={styles.listItem}>
            Proof of living together for a minimum of one year
          </li>
          <li className={styles.listItem}>
            Evidence of property ownership or shared rent
          </li>
          <li className={styles.listItem}>Joint bank accounts</li>
          <li className={styles.listItem}>Utility bills in both names</li>
          <li className={styles.listItem}>Government-issued IDs</li>
          <li className={styles.listItem}>Car insurance details</li>
          <li className={styles.listItem}>
            Birth certificates or adoption records for shared children.
          </li>
          <li className={styles.listItem}>
            Photos portraying your conjugal relationship.
          </li>
          <li className={styles.listItem}>
            Affirmation from family and friends (letters, emails, social media)
          </li>
        </ul>
        <p>
          If specific documents are unavailable, explore alternative ways to
          demonstrate your relationship. Sworn declarations or letters from
          trusted sources can strengthen your case. Ultimately, the visa
          officer’s discretion will determine the acceptance of your common-law
          documents, so providing ample proof enhances your chances of approval.
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="conjugal-partner"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
          Who Qualifies as a Conjugal Partner?
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          A Conjugal Partner refers to an individual living outside of Canada
          with whom you share a committed and romantic relationship lasting at
          least one year. However, significant barriers prevent you from
          residing together. These barriers may include factors beyond their
          control, such as immigration restrictions, religious considerations,
          or sexual orientation.
        </p>

        <h2
          style={{ fontSize: "18px", marginTop: "-15px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[15] = el)}
        >
          Qualifications for Conjugal Partnership
        </h2>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
          <li className={styles.listItem}>
            <strong>Barriers to Living Together:</strong> Despite the inability
            to cohabit, your relationship must demonstrate commitment and
            genuine connection.
          </li>
          <li className={styles.listItem}>
            <strong>Legal Marriage Constraints:</strong> Some conjugal partners
            cannot legally marry their sponsor but still qualify under this
            category.
          </li>
          <li className={styles.listItem}>
            <strong>
              Similarities to Common-Law and Spousal Relationships:
            </strong>{" "}
            In all other aspects, conjugal partnerships mirror common-law unions
            or marriages, requiring a bona fide relationship lasting at least
            one year.
          </li>
        </ul>

        <h2
          style={{ fontSize: "18px", marginTop: "35px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[15] = el)}
        >
          Conjugal Relationship Considerations
        </h2>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
          <li className={styles.listItem}>
            <strong>Country-Specific Challenges:</strong> If your relationship
            faces obstacles due to factors like a country’s stance on same-sex
            marriage, lack of divorce options, or legal restrictions, it still
            qualifies as a conjugal relationship.
          </li>
          <li className={styles.listItem}>
            <strong>Emotional, Financial, and Physical Interdependence:</strong>{" "}
            Conjugal partners must rely on each other emotionally, financially,
            and physically.
          </li>
        </ul>

        <h2
          style={{ fontSize: "18px", marginTop: "35px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[17] = el)}
        >
          Conjugal Partner: Required Documents for Sponsorship
        </h2>
        <p>
          When applying to sponsor a spouse, gather the following documents:
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          <li className={styles.listItem}>Completed application forms.</li>
          <li className={styles.listItem}>Proof of status in Canada</li>
          <li className={styles.listItem}>Identity documents</li>
          <li className={styles.listItem}>Marriage certificate</li>
          <li className={styles.listItem}>
            Police certificates from countries where your spouse lived for six
            months or longer after turning 18.
          </li>
          <li className={styles.listItem}>
            Medical certificate for your spouse
          </li>
          <li className={styles.listItem}>
            Proof of payment for government fees
          </li>
          <li className={styles.listItem}>Digital photo</li>
          <li className={styles.listItem}>
            Relationship information and sponsorship evaluation questionnaire
          </li>
          <li className={styles.listItem}>Wedding invitations and photos</li>
          <li className={styles.listItem}>
            Birth certificates or adoption records for shared children.
          </li>
          <li className={styles.listItem}>
            Proof of marriage registration with a government authority
          </li>
        </ul>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-u"
          ref={(el) => (sectionsRef.current[99] = el)}
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

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="appointment"
          ref={(el) => (sectionsRef.current[19] = el)}
        >
          Still not sure?
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[20] = el)}
        >
          Are you facing challenges in bringing your same-sex spouse or conjugal
          partner to Canada? Look no further than Brightlight Immigration. With
          over 12 years of expertise, we specialize in creating robust same-sex
          sponsorship applications, ensuring your spouse, common-law partner, or
          conjugal partner can join you in Canada.
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

export default SameSex;
