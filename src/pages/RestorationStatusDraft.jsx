import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/RestorationStatusDraft.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const RestorationStatusDraft = () => {
  let [metaData, setMetaData] = useState([]);
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
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/restorationStatusDraftMeta")
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
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("requirement")}>Requirement</p>
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
          Restoration of Status
        </h1>
        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            Are you a temporary resident in Canada who has lost status? Don't
            despair! There is a way to regain your legal standing in Canada.
          </p>
          <p>
            The restoration of status is a process that provides temporary
            residents with a second chance to maintain their legal presence in
            Canada. If your temporary status (student visa, visitor permit, or
            work permit) lapses or expires and you did not apply for an
            extension before the expiry date, you will be considered out of
            status. At this point, you have a few options. You can either depart
            Canada immediately or apply to restore your temporary status. You
            have a maximum of 90 days from the date your status expires to apply
            for restoration of your status.
          </p>
          <p>
            This is a very serious situation that should be handled with the
            utmost importance, as any further delay could have a negative impact
            on any future applications you may submit. If you meet specific
            eligibility requirements, you can apply to reinstate your status and
            continue enjoying the advantages of living and working in Canada.
          </p>
          <p>
            <strong>Important things to know:</strong> If you're a student or
            worker on temporary status, you're not allowed to work or study
            while your restoration application is under review.
          </p>
        </section>

        <section
          className={`${styles.checkStatus} ${styles.section}`}
          id="check-status"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            How to Check if Your Immigration Status is Valid
          </h2>
          <p>
            To check if your stay in Canada is still allowed, look for the
            expiration date printed on your permits. These dates provide an
            indication of your temporary permission to remain in Canada until
            that point.
          </p>
          <ul>
            <li>
              If you are visiting Canada as a tourist, your stay is typically
              valid for 6 months from the date you entered the country.
            </li>
            <li>
              It is illegal to stay in Canada beyond the authorized period. If
              your stay expires and you have not applied for an extension, you
              must apply for restoration of status within 90 days.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.requirements} ${styles.section}`}
          id="requirement"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            What Are the Requirements for Restoration of Your Status?
          </h2>
          <h4>
            To regain your legal status in Canada, you must meet the following
            requirements:
          </h4>
          <ul>
            <li>
              Apply for restoration of status within 90 days (3 months) of your
              status expiration.
            </li>
            <li>
              Maintain the initial requirements and conditions of your stay,
              whether it is for study, work, or visiting Canada.
            </li>
            <li>
              Adhere to all conditions imposed on your stay, including not
              engaging in unauthorized work.
            </li>
          </ul>
          <p>
            <strong>Important Tip:</strong> Restoration of status cannot be
            granted at any Canadian port of entry, so you must apply while you
            are still in the country.
          </p>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            How to Apply for Restoration of Status
          </h2>
          <p>
            To apply for status restoration, you will need to provide specific
            documents and information to Immigration, Refugees and Citizenship
            Canada (IRCC). The specific requirements vary based on the type of
            restoration you are seeking, whether it's for a visitor, student, or
            worker. It is crucial to complete the correct forms for your
            restoration type and submit the necessary documents to increase the
            chances of your application being approved. Here are a few general
            guidelines:
          </p>
          <ul>
            <li>
              Provide a compelling reason why your previous status expired.
            </li>
            <li>Submit photocopies of all valid pages of your passport.</li>
            <li>
              Attach a photocopy of your last valid immigration document, such
              as a visitor visa, work permit, or study permit.
            </li>
            <li>
              If you are applying for restoration as a spouse, provide a copy of
              your marriage certificate or license (if applicable).
            </li>
            <li>
              Showcase sufficient financial means to support yourself during
              your extended stay in Canada.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
            Common Reasons for Refusal of Restoration of Status Applications
          </h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              Missed the deadline to submit the restoration application within
              90 days of the expiry of status.
            </li>
            <li>Continued working or studying on the restoration status.</li>
            <li>
              Did not answer the questions in the application form correctly,
              completely, and truthfully.
            </li>
            <li>
              Applied for the wrong type of intent along with the restoration
              application.
            </li>
            <li>Paid insufficient fees to IRCC.</li>
          </ul>
        </section>

        <section
          className={`${styles.assistance} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any reason, do not worry. With
            over a decade of experience, we specialize in previously refused
            cases. We have obtained approvals for clients who had multiple
            previous refusals.
          </p>
          <p>
            We achieve this with a tailored approach to your specific case,
            addressing each concern that the officer has listed in previous
            refusals. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in the cases we work on. This is why we have a high
            success rate.
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
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{ marginLeft: "40px" }}>
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

export default RestorationStatusDraft;
