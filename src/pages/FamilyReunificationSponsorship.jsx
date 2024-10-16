import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FamilyReunificationSponsorship.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const FamilyReunificationSponsorship = () => {
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
    fetch("https://brightlight-node.onrender.com/family-meta")
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
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
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
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>Family Reunification and Sponsorship</h1>
          <p>
            Canada is renowned for its welcoming spirit and commitment to
            diversity, making it a haven for immigrants looking for a better
            life. When it comes to family reunification, Canada has established
            a comprehensive program that allows Canadian citizens and permanent
            residents to bring their loved ones to the country.
          </p>
          <p>
            Canada's Family Reunification Program is one of the three main
            pathways to permanent residency in Canada, alongside economic
            immigration and refugee protection. It allows Canadian citizens and
            permanent residents to sponsor certain relatives to immigrate to
            Canada as permanent residents.
          </p>
        </header>

        <section
          className={`${styles.categories} ${styles.section}`}
          id="categories"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Categories Who Can Be Sponsored</h2>
          <ul>
            <li>
              <button
                onClick={() =>
                  (window.location.href = "/common-law-partner-permanent")
                }
              >
                Spouses and Common-Law Partners
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/dependent-children")}
              >
                Dependent Children
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  (window.location.href = "/humanitarian-compassionate")
                }
              >
                Humanitarian and Compassionate
              </button>
            </li>
            <li>
              <button onClick={() => (window.location.href = "/orphan")}>
                Orphan
              </button>
            </li>
            <li>
              <button onClick={() => (window.location.href = "/adoption")}>
                Adoption
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/ParentsGrandparents")}
              >
                Parents and Grandparents
              </button>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>
            Eligibility Criteria for Family Reunification and Sponsorship
            Program
          </h2>
          <p>
            The requirements for this program can vary depending on the
            relationship between the sponsor and the person being sponsored.
            However, if you’re the sponsor, you must meet the following general
            requirements:
          </p>
          <ul
            style={{
              marginTop: "20px",
              marginLeft: "40px",
              marginBottom: "20px",
            }}
          >
            <li>
              <strong>Age:</strong> Should be at least 18 years old.
            </li>
            <li>
              <strong>Residency:</strong> Should be a Canadian citizen or
              permanent resident.
            </li>
            <li>
              <strong>Support:</strong> Should be physically and financially
              able to support the person being sponsored.
            </li>
            <li>
              <strong>Criminal Record:</strong> Have a clean criminal record.
            </li>
            <li>
              <strong>Housing:</strong> Should be able to provide adequate
              housing for the person being sponsored.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>
            How to Apply for the Family Reunification and Sponsorship Program
          </h2>
          <ol>
            <li>
              Complete a comprehensive application form, providing detailed
              information about yourself, your relationship to the person being
              sponsored, and your financial and housing arrangements.
            </li>
            <li>
              Pay the application fee for sponsorship, which is currently
              CAD$1,080 for spousal sponsorship and CAD$1,080 for parent and
              grandparent sponsorship.
            </li>
            <li>
              If the sponsorship application is approved, the person you are
              sponsoring will receive an invitation to apply for permanent
              residence.
            </li>
            <li>
              Ensure the person you are sponsoring completes a separate
              permanent residence application, providing details about their
              education, work experience, and language skills.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Reasons for Refusals of Family Reunification and Sponsorship</h2>
          <ul>
            <li>
              It is crucial to provide complete and accurate information in your
              application. Missing or incorrect details can raise red flags and
              lead to a refusal.
            </li>
            <li>
              Sponsors must demonstrate their ability to financially support the
              family members they are sponsoring. This means having sufficient
              income and assets to meet their basic needs.
            </li>
            <li>
              The immigration authorities may need to verify the genuineness of
              the relationship between the sponsor and the person being
              sponsored. This may involve providing documentation such as
              marriage certificates, birth certificates, or joint financial
              records. Failure to do so will lead to refusal.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have got approvals for clients who
            had multiple previous refusals. We achieve this with a tailored
            approach to your specific case, addressing each concern that the
            officer has listed in previous refusals. We use case law and find
            similar cases to your circumstances that had positive results, and
            we use them as precedents in cases we work on. This is why we have a
            high success rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa. Start your
            process now.
            <button
              className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Start your process now
            </button>
          </p>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling Immigration applications with a high success rate.
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

export default FamilyReunificationSponsorship;
