import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/StudyPermitMinors.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const StudyPermitMinors = () => {
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
    fetch("https://brightlight-node.onrender.com/studyPermitMinorsMeta")
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
        <h1
          c
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Canadian Study Permit for Minors
        </h1>
        <section className={styles.introduction}>
          <p>
            As parents, we all aspire to provide our children with the best
            possible foundation for their future. Canada offers a unique and
            enriching educational experience that can set your child on a path
            to success and global citizenship. A study permit for minors allows
            a child under the age of 18 to attend any type of educational
            institution in Canada, including elementary schools, secondary
            schools, vocational schools, colleges, and universities. Minors who
            want to study in Canada for more than 6 months must apply for a
            study permit before they enter the country.
          </p>
        </section>

        <section
          className={`${styles.exceptions} ${styles.section}`}
          id="Exeption"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            In general, minors who intend to study in Canada for six months or
            more will need to apply for a study permit. However, there are a few
            exceptions to this rule:
          </p>
          <ul>
            <li>
              Minors who are refugees or refugee claimants do not need a study
              permit if they are accompanied by their parents or if they have a
              custodian in Canada who is a Canadian citizen or permanent
              resident.
            </li>
            <li>
              Minors who are children of Canadian citizens or permanent
              residents do not need a study permit.
            </li>
            <li>
              Minors who are attending preschool, primary school, or secondary
              school in Canada and are accompanied by a parent who has
              authorization to study or work in Canada do not need a study
              permit.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>Eligibility for the Program</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>Be between the ages of 12 and 17</li>
            <li>
              Have a valid acceptance letter from a designated learning
              institution (DLI) in Canada
            </li>
            <li>
              Be able to show that you or your child have enough money to
              support themselves in Canada
            </li>
            <li>Do not pose a risk to public safety or security</li>
            <li>
              Be able to speak and understand at least one of Canada's official
              languages (English or French)
            </li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>Application Process</h2>
          <p>
            Meet the eligibility criteria? Let's see how you or your child can
            apply for a Study Permit for minors. The application process is
            similar to the application process for an adult, refer to the{" "}
            <Link to="/student-visa">student visa page</Link>. However, some
            additional documents are required, such as:
          </p>
          <ul>
            <li>
              A letter of acceptance from the educational institution in Canada
              that the minor is going to.
            </li>
            <li>
              Proof of financial support, such as bank statements, letters of
              support from family members, or proof of scholarships or financial
              aid.
            </li>
            <li>
              A medical certificate from a doctor in the minor's home country.
            </li>
            <li>A police certificate from the minor's home country.</li>
            <li>
              Proof of travel documents (passport or travel document number).
            </li>
            <li>A recent photograph of the minor.</li>
          </ul>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>Reasons for Refusal</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>The nature of the minor's program of study is irrelevant.</li>
            <li>The minor's age is not between 12 and 17.</li>
            <li>
              The IRCC officer is not convinced with the minor's academic
              record, language proficiency, and other factors to determine if
              they are likely to succeed in their studies.
            </li>
            <li>
              The minors does not have sufficient funds to support themselves
              during their studies, including tuition fees, accommodation, food,
              and other living expenses.
            </li>
            <li>
              The minor does not have the intention to return to their home
              country.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.assistance} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you or your child have faced a refusal for any of the reasons
            mentioned above, don't worry. With over 10 years of experience, we
            specialize in handling previously refused cases. We have
            successfully secured approval for students who have had multiple
            refusals, long gaps in education, and are of mature age. We achieve
            this by tailoring our approach to your specific case and addressing
            each concern raised by the officer in previous refusals. Using case
            law, we identify similar cases with positive outcomes and apply them
            as precedents in the cases we handle. This is why we have a high
            success rate, with over 90% approval in such cases. At Brightlight
            Immigration, we have a dedicated team of visa application
            specialists who can assist you from the start of the application
            process all the way to obtaining your visa. Start your process now.
          </p>

          <button
            className={styles.button}
            id="book-appointment"
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
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{marginLeft: "40px"}}>
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

export default StudyPermitMinors;
