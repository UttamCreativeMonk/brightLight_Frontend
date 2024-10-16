import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/HealthAuthoritiesStream.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const HealthAuthorityStream = () => {
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
    fetch("https://brightlight-node.onrender.com/healthAuthorityStreamMeta")
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
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

      <div className={styles.container}>
        <h1
          className={`${styles.title} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          British Columbia Health Authority Stream
        </h1>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          The British Columbia Health Authority Stream is one of the specialized
          immigration streams within the British Columbia Provincial Nominee
          Program (BCPNP), operated by the province of British Columbia. This
          stream aims to attract skilled immigrants who can contribute
          significantly to the healthcare infrastructure in BC.
        </p>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          Note: This stream is different from healthcare priority occupations
          applying under BCPNP Skilled Worker or International Graduate streams.
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          Benefits of British Columbia Health Authority Stream
        </h2>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <li className={styles.listItem}>
            <b>Job Offer:</b> The job offer can fall under any NOC tier, ranging
            from 0 to 5. It does not have to be a high-skilled occupation or
            related to healthcare.
          </li>
          <li className={styles.listItem}>
            <b>No Draws:</b> The BC Health Authority stream operates without
            draws. All you need to do is meet the eligibility criteria for this
            program.
          </li>
          <li className={styles.listItem}>
            <b>Nomination Priority:</b> Successful candidates nominated through
            the BC Health Authority Program receive an invitation to apply for
            Canadian permanent residence.
          </li>
          <li className={styles.listItem}>
            <b>No Express Entry Profile Required:</b> Unlike other immigration
            streams, applicants for this program do not need an Express Entry
            profile to be eligible.
          </li>
          <li className={styles.listItem}>
            <b>Accelerated Processing:</b> While Express Entry is not mandatory,
            candidates with an active profile may choose to apply through the
            Express Entry system for faster processing.
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          Eligibility for the British Columbia Health Authority Stream
        </h2>
        <p>
          To qualify for this stream, applicants must meet the following
          requirements:
        </p>
        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          1. Job Offer
        </h3>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <li className={styles.listItem}>
            Hold an indeterminate (no defined end date), full-time job offer in
            ANY occupation from one of B.C. public health <b>authorities</b>{" "}
            listed below:
            <ol className={styles.nestedList}>
              <li className={styles.nestedListItem}>
                Provincial Health Services Authority
              </li>
              <li className={styles.nestedListItem}>
                First Nations Health Authority
              </li>
              <li className={styles.nestedListItem}>Fraser Health</li>
              <li className={styles.nestedListItem}>Interior Health</li>
              <li className={styles.nestedListItem}>Island Health</li>
              <li className={styles.nestedListItem}>Northern Health</li>
              <li className={styles.nestedListItem}>
                Vancouver Coastal Health
              </li>
              <li className={styles.nestedListItem}>Providence Health Care</li>
            </ol>
          </li>
          <li className={styles.listItem}>
            Alternatively, possess a letter from a health authority or midwife
            practice group confirming your role as a physician, nurse
            practitioner, or midwife in British Columbia.
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          2. Education and Qualifications
        </h3>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <li className={styles.listItem}>
            Satisfy the education, training, experience, and qualification
            criteria specified by the public health authority.
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing7"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          3. Health Authority Support
        </h3>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing8"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          <li className={styles.listItem}>
            The health authority must provide recommendation and support your
            application.
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing9"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          4. Language
        </h3>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing10"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
          <li className={styles.listItem}>
            If the Job Offer's NOC code is of TEER Category 0 or 1, you do not
            need language results to be eligible (BCPNP can still ask you to
            pass a language test at their own discretion).
          </li>
          <li className={styles.listItem}>
            If the Job Offer's NOC code is of TEER Category 2, 3, 4 or 5, you
            will need to have a Canadian Language Benchmark (CLB) score of at
            least 4 to be eligible.
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing11"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          5. Financial Capability
        </h3>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing12"
          ref={(el) => (sectionsRef.current[15] = el)}
        >
          <li className={styles.listItem}>
            Demonstrate that you can support yourself and your dependents during
            your stay in British Columbia.
          </li>
        </ul>

        <h2
          style={{ opacity: "1", transform: "translateX(0)" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply-3"
          ref={(el) => (sectionsRef.current[19] = el)}
        >
          Express Entry BC (EEBC) Option:
        </h2>
        <p className={styles.description}>
          Applicants who meet the eligibility criteria can also explore
          the Express Entry BC (EEBC) option for accelerated processing.
        </p>
        <p className={styles.description}>
          Please note*** that if your job offer falls within a priority
          technology occupation, it does not need to be indeterminate.
        </p>
      
        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
          How to Apply for BC Health Authority Stream?
        </h2>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing13"
          ref={(el) => (sectionsRef.current[17] = el)}
        >
          <li className={styles.listItem}>
            The BC Health Authority stream accepts new applications at any time.
          </li>
          <li className={styles.listItem}>
            Specify whether you are applying through the Express Entry system or
            non-Express Entry system.
          </li>
          <li className={styles.listItem}>
            Provide resume, job description, recommendation letter, and BC PNP
            Employer Declaration Form from one of the health authorities.
          </li>
          <li className={styles.listItem}>
            Upon approval, candidates receive a provincial nomination for
            permanent residence from BC.
          </li>
          <li className={styles.listItem}>
            Candidates can also request a work permit support letter if their
            work permit is expiring or if they do not have a work permit at all.
            This allows them to work in Canada while their permanent residence
            application is processed.
          </li>
          <li className={styles.listItem}>
            If applying through Express Entry, candidates receive a nomination
            notification on their IRCC online account. Accepting the nomination
            boosts their Comprehensive Ranking System (CRS) score by 600 points,
            and hence guarantees an Invitation to Apply (ITA) for permanent
            residence.
          </li>
          <li className={styles.listItem}>
            If applying through the non-Express Entry system, candidates must
            prepare a paper-based application and submit it online.
          </li>
        </ul>
        <button
          className={styles.button}
          onClick={() => (window.location.href = "/bcpnp-calculator")}
        >
          Calculate Your BCPNP Score
        </button>




        <h2 className={styles.subtitle} id="book-appointment">
          Still Not Sure?
        </h2>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing14"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          Contact Brightlight Immigration today to assess your profile and
          embark on a transformative journey towards achieving your Canadian
          dream. With over a decade of experience, we specialize in handling
          BCPNP Health Authority Program. Our approval rate for these programs
          is nearly 100%. We achieve this with a tailored approach to your
          specific case. We use case law and find similar cases to your
          circumstances that had positive results, and we use them as precedents
          in cases we work on. This is why we have a high success rate.
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing15"
          ref={(el) => (sectionsRef.current[19] = el)}
        >
          At Brightlight Immigration, we have a dedicated team of visa
          application specialists who can assist you from the start of the
          application process all the way to obtaining your PR. Start your
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

        {/* <Link to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</Link> */}

        {/* <a href="" className={styles.button}></a> */}
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[91] = el)}
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

export default HealthAuthorityStream;
