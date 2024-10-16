import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CategoryBasedExpress.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const CategoryBasedExpress = () => {
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
              Category-Based Express Entry Selection Draws
            </p>
            <p className={styles.discription}>
              Category-based draws are an additional type of Express Entry draw.
              These draws target specific groups of Express Entry candidates who
              possess certain skills, qualifications, or experience that are in
              high demand in Canada's labor market. By focusing on specific
              categories, the Canadian government plans to attract highly
              skilled and qualified individuals to fill labor shortages and
              contribute to the country's economic growth.
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>Benefits of Category-Based Express Entry Selection Draws:</h2>
            <h4>
              Category-based draws offer several benefits to you, including:
            </h4>
            <ul style={{marginLeft: "40px"}}>
              <li>
                Your chances of getting an ITA are Increased. By focusing on
                specific groups of candidates, category-based draws often have
                lower CRS cut-offs compared to general Express Entry draws. This
                means that candidates with lower CRS scores may still have a
                chance of receiving an ITA.
              </li>
              <li>
                It is a faster pathway to Canadian Permanent Residence. Once
                you’re selected through a category-based draw, you can proceed
                directly to the application stage for permanent residence,
                shortening the overall immigration process.
              </li>
              <li>
                Opportunities for skilled professionals in category-based draws
                are in demand. This means you’ll have a clear path to pursue
                your career in Canada. Whether you're a healthcare worker, a
                skilled tradesperson, or an expert in STEM fields, Canada
                welcomes your talents.
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[33] = el)}
          >
            <h2>
              Here are the 6 categories of Category-Based Express Entry
              Selection Draws:
            </h2>
            <div className={styles.button2Parent}>
              <button
                className={styles.button2}
                onClick={() => (window.location.href = "/french-targeted-draw")}
              >
                French-language proficiency
              </button>
              <button
                className={styles.button2}
                onClick={() =>
                  (window.location.href = "/healthcare-targeted-draw")
                }
              >
                Healthcare occupations
              </button>
              <button
                className={styles.button2}
                onClick={() => (window.location.href = "/stem-targeted-draw")}
              >
                Science, Technology, Engineering, and Math (STEM) occupations
              </button>
              <button
                className={styles.button2}
                onClick={() =>
                  (window.location.href = "/trade-occupation-targeted-draw")
                }
              >
                Trade occupations
              </button>
              <button
                className={styles.button2}
                onClick={() =>
                  (window.location.href = "/transport-occupation-targeted-draw")
                }
              >
                Transport occupations
              </button>
              <button
                className={styles.button2}
                onClick={() => (window.location.href = "/agriculture-agri-food-occupation")}
              >
                Agriculture and agri-food occupations
              </button>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[35] = el)}
          >
            <h2>How do Category Based Draws work?</h2>
            <p>
              Category-based draws are conducted separately from regular Express
              Entry draws, which typically invite candidates based on their
              Comprehensive Ranking System (CRS) score. Instead, category-based
              draws target specific groups of candidates based on their
              qualifications, such as work experience in healthcare, French
              language proficiency, or STEM (Science, Technology, Engineering,
              and Mathematics) skills.
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2> Eligibility Criteria for a Category-Based Draw</h2>
            <p>
              To be eligible for a category-based draw, you must meet all the
              requirements specified by IRCC for that particular category. Once
              a category-based draw is announced, IRCC will rank eligible
              candidates in the Express Entry pool based on their CRS score and
              select the highest-ranked candidates to receive invitations to
              apply (ITAs) for permanent residence. The eligibility requirements
              for category-based draws vary depending on the specific category.
              However, here are some general eligibility criteria that apply to
              all categories. These include:
            </p>
            <ul style={{marginLeft: "40px"}}>
              <li>You must have a valid Express Entry profile.</li>
              <li>
                You must meet the language proficiency requirements for the
                selected category.
              </li>
              <li>Have relevant work experience in the selected category.</li>
              <li>
                You must meet the educational requirements for the selected
                category.
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[31] = el)}
          >
            <h2>Express Entry Category based draws history</h2>
            <button
              className={styles.button1}
              onClick={() => (window.location.href = "/previous-draw-history")}
            >
              Previous Draw
            </button>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>How to apply for Category Based Draw?</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>
                Create an Express Entry profile first. Or even better and
                stress-free solution, let us handle your case for you.
              </li>
              <li>
                Next, IRCC conducts draws irregularly, so keep a check on the
                official website.
              </li>
              <li>
                The higher your score, the more likely you are to get an ITA.
                Improve language skills, gain work experience, and get a higher
                education.
              </li>
              <li>
                If you meet the criteria and have a high enough score, you will
                get an ITA to apply for permanent residence.
                <a href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj">
                  Click here
                </a>
              </li>
              <li>
                You’ll have 60 days to submit your complete application,
                including documents like identity proof, language test results,
                and work experience verification.
              </li>
              <li>
                Once your application is approved, you will receive a
                Confirmation of Permanent Residence (COPR), allowing you to live
                and work in Canada permanently.
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h2>Common Reasons for Refusals in Category-Based Draw</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>
                Your applicant does not meet the eligibility criteria for the
                program you are applying for. The eligibility criteria vary
                depending on the program, but they typically include age,
                education, work experience, language proficiency, and financial
                resources.
              </li>
              <li>
                You shared inaccurate and incomplete information on your Express
                Entry profile.
              </li>
              <li>
                You have failed to meet the minimum language requirements for
                the program you are applying for.
              </li>
              <li>Your CRS Score is not high enough.</li>
              <li>
                Failed to submit all of the required documentation with your
                application.
              </li>
              <li>
                You have a medical condition that could pose a health risk to
                yourself or others.
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
              above or have doubts regarding your case and application, do not
              worry. With over a decade of experience, we specialize in handling
              Express Entry Programs. Our approval rate for these programs is
              near 100%. We achieve this with a tailored approach to your
              specific case. We use case law and find similar cases to your
              circumstances that had positive results, and we use them as
              precedents in cases we work on. This is why we have a high success
              rate.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process to obtaining your PR. Start your process now.
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

export default CategoryBasedExpress;
