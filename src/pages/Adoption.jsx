import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Adoption.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Adoption = () => {
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
    fetch("https://brightlight-node.onrender.com/adopMeta")
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
              <p onClick={() => scrollToSection("types-of-adoption")}>
                Types of Adoption
              </p>
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>Canada's Adoption Program</h1>
          <p style={{ marginTop: "-20px" }}>
            The heart-warming journey of bringing a child into your life through
            adoption is an incredible act of love and commitment, offering the
            child a nurturing home and a lifetime of opportunities.
          </p>
          <p style={{ marginTop: "20px" }}>
            Canada's adoption program under family reunification and sponsorship
            provides a pathway for eligible Canadians to adopt children from
            both within Canada and internationally. The program aims to provide
            permanent homes for children who cannot live with their biological
            families due to various circumstances.
          </p>
        </header>

        <section
          className={`${styles.adoptionTypes} ${styles.section}`}
          id="types-of-adoption"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>
            There are two main types of adoption under family sponsorship in
            Canada:
          </h2>
          <ul>
            <li>
              <p>
                Intra-country adoption. This involves adopting a child from
                another province in Canada.
              </p>
              <a href="#intra-country" className={styles.button}>
                Intra-Country Adoption
              </a>
            </li>
            <li style={{ marginTop: "30px" }}>
              <p>
                Inter-country adoption. This involves adopting a child from
                another country.
              </p>
              <a
                href="#inter-country"
                className={styles.button}
                id="intra-country"
              >
                Inter-Country Adoption
              </a>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Eligibility Criteria for Adoption in Canada</h2>
          <ul>
            <li>Be a Canadian citizen or permanent resident.</li>
            <li>Be at least 18 years of age.</li>
            <li>Have a stable income and living situation.</li>
            <li>
              Be able to provide for the child's physical and intellectual
              needs.
            </li>
            <li>Pass a criminal background check and medical assessment.</li>
            <li>Provide references from other families and professionals.</li>
          </ul>
          <p>
            Note that if you are adopting a child from abroad, you will need to
            sponsor the child for permanent residency in Canada. This means that
            you will be financially responsible for the child's care until they
            reach the age of majority.
          </p>
        </section>

        <section
          className={`${styles.intraCountry} ${styles.section}`}
          id="inter-country"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>How to apply for sponsoring a child for adoption?</h2>

          <h4 className={styles.marginTop}>
            For Intra-Country Adoption (Inside Canada)
          </h4>
          <ul style={{ marginTop: "20px", marginLeft: "40px" }}>
            <li>Fill out the adoption application.</li>
            <li>Attend an adoption orientation.</li>
            <li>Get matched with a child.</li>
            <li>Complete a home study.</li>
            <li>Receive approval from the provincial adoption authority.</li>
            <li>Finalize the adoption.</li>
          </ul>
        </section>

        <section
          className={`${styles.interCountry} ${styles.section}`}
          id="country"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h4 className={styles.marginTop}>
            For Inter-Country Adoption (Outside Canada)
          </h4>
          <ul style={{ marginTop: "20px", marginLeft: "40px" }}>
            <li>Choose a child from the available list.</li>
            <li>Complete a home study and provide financial documentation.</li>
            <li>
              Receive approval from the Canadian government and the child's
              country of origin.
            </li>
            <li>
              Travel to the child's country of origin to finalize the adoption.
            </li>
            <li>Return to Canada with the child.</li>
          </ul>
        </section>

        <section
          className={`${styles.intraCountry} ${styles.section}`}
          id="inter-country"
          ref={(el) => (sectionsRef.current[100] = el)}
        >
          <h4 className={styles.marginTop}>
            You can’t sponsor your brother, sister, nephew, niece or grandchild
            if:
          </h4>
          <ul style={{ marginTop: "20px", marginLeft: "40px" }}>
            <li>one of their parents is still alive </li>
            <li>no one knows where their parents are</li>
            <li>their parents abandoned them</li>
            <li>
              someone else other than their parents is taking care of them while
              one or both their parents are alive
            </li>
            <li>their parent is in jail or otherwise detained</li>
          </ul>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Common Reasons for Refusals of Adoption Program</h2>
          <h4>
            Failing to meet the eligibility criteria to be eligible to sponsor a
            child for adoption that is:{" "}
          </h4>
          <ul style={{ marginTop: "20px", marginLeft: "40px" }}>
            <li>
              Incomplete or inaccurate information on your application or during
              interviews.
            </li>
            <li>
              In some cases, the child may have health concerns that make
              adoption difficult. The government may refuse adoption if it
              believes that the child's health needs are too great for the
              adoptive parents to meet.
            </li>
            <li>
              The child's home country may refuse consent due to concerns about
              the child's well-being or cultural suitability in Canada.
            </li>
          </ul>
          <button
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
          id="why-choose-u"
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

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have successfully obtained approvals
            for clients with multiple previous refusals by using a tailored
            approach, addressing each concern listed in previous refusals, and
            applying case law precedents. Our high success rate is a testament
            to our expertise.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa.
            <button
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
              className={styles.button}
            >
              {" "}
              Start your process now
            </button>
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

export default Adoption;
