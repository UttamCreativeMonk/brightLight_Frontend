import React, { useState, useEffect } from "react";
import styles from "../styles/SpouseInland.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const SpouseInland = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/spousalInlandMeta")
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
              <p onClick={() => scrollToSection("Key-Points")}>Key Points</p>
              <p onClick={() => scrollToSection("Benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("How-to-apply")}>
                How to Apply
              </p>
              <p onClick={() => scrollToSection("Eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("Inland-SOWP")}>Inland-SOWP</p>
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
          id="about-program"
          style={{
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Inland Spousal and Common-Law Partner Sponsorship
        </h1>
        <p>
          Inland sponsorship enables Canadians and permanent residents to
          sponsor their spouse or common-law partner for permanent resident
          status when the couple is already living together in Canada. This
          comprehensive guide outlines the key components of Inland sponsorship,
          helping you determine if this spousal sponsorship category aligns with
          your needs.
        </p>

        <h2
          style={{
            marginTop: "50px",
          }}
          id="Key Points"
        >
          Key Points about Inland Sponsorship:
        </h2>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>
            <strong> Eligibility: </strong>Canadians and permanent residents can
            sponsor their loved ones, provided they legally cohabit in Canada.
          </li>
          <li>
            <strong> Temporary Status Requirement:</strong> The foreign spouse
            or common-law partner does not need to hold valid temporary status
            in Canada (e.g., as a worker, student, or visitor).
          </li>
          <li>
            <strong> Continued Living and Working:</strong> During the Inland
            sponsorship application process, the sponsored person can continue
            living, working, or studying in Canada.
          </li>
          <li>
            <strong> PR Visa Approval:</strong> Both the Canadian citizen or
            permanent resident and the foreign national must be approved by
            Immigration, Refugees and Citizenship Canada (IRCC) for the
            sponsored person to receive a Canadian PR visa through Inland
            sponsorship.
          </li>
        </ul>

        <h2 id="Benifits">Benefits of Inland Spousal Sponsorship</h2>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>
            <strong>Open Work Permit (OWP):</strong> Applicants may qualify for
            an open work permit, allowing full-time employment while their
            permanent residence application is processed.
          </li>
          <li>
            <strong> Economic and Emotional Relief:</strong> An OWP eases
            financial and emotional burdens during the potentially lengthy
            application process.
          </li>
          <li>
            <strong> Staying in Canada:</strong> Inland sponsorship applicants
            are generally expected to remain in Canada throughout processing.
          </li>
        </ul>

        <h2 id="Eligibility">
          Eligibility Criteria for Inland Spousal Sponsorship
        </h2>
        <ul
          style={{
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>Your spouse or partner must live with you in Canada.</li>
          <li>
            Your spouse or partner must have temporary resident status in
            Canada.
          </li>
          <li>
            Both the sponsor and sponsored person must meet the basic
            requirements for immigration to Canada:
          </li>
          <ul>
            <li>
              The sponsor must be a Canadian citizen or permanent resident.
            </li>
            <li>Both parties must be at least 18 years old.</li>
          </ul>
          <h3 style={{ margin: "20px 0px" }}>
            The relationship must fall into one of the following categories:
          </h3>
          <ul>
            <li>
              Spouse: Legally married with a valid marriage certificate
              recognized under Canadian law.
            </li>
            <li>
              Common Law: Cohabiting in a marriage-like relationship for at
              least 12 consecutive months.
            </li>
          </ul>
          <li>
            The sponsored person cannot have been sponsored by their spouse in
            Canada within the past five years.
          </li>
          <li>
            Neither spouse must be in prison, charged with a serious offense, or
            bankrupt.
          </li>
          <li>
            Please note that conjugal partnerships (where religious or marital
            status barriers prevent living together or marriage) are not
            eligible for Inland sponsorship.
          </li>
        </ul>

        <h2 id="Inland-SOWP">How does Inland Spousal Sponsorship work?</h2>
        <p
          style={{
            marginBottom: "60px",
          }}
        >
          Inland sponsorship is a specialized application process designed to
          sponsor a loved one under Canada’s Spouse or Common-Law Partner in
          Canada Class immigration program.
        </p>

        <h3>Application Components:</h3>
        <ul
          style={{
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>
            The Canadian citizen or permanent resident applies to become a
            sponsor.
          </li>
          <li>
            The foreign spouse or partner applies for permanent residence.
          </li>
        </ul>

        <h2 id="How-to-apply">How to apply for Inland Spousal Sponsorship?</h2>
        <ol
          style={{
            marginTop: "20px",
            marginBottom: "60px", 
            marginLeft: "40px"
          }}
        >
          <li>Verify eligibility for both sponsor and sponsored person.</li>
          <li>Pay the required fees online.</li>
          <li>Collect supporting documents.</li>
          <li>
            Complete and submit the necessary forms to the appropriate visa
            office.
          </li>
        </ol>

        <h3>Remaining in Canada:</h3>
        <p>
          Inland sponsorship applicants are generally expected to stay in Canada
          during processing. If the spouse or common-law partner needs to travel
          outside the country, Outland sponsorship may be a better option.
        </p>

        <h2>How long does it take to process Inland applications?</h2>
        <p
          style={{
            marginBottom: "60px",
          }}
        >
          Current approval times for Inland spousal sponsorship applications are
          approximately 12-14 months. Quebec residents or those planning to
          settle in Quebec may experience up to 24 months.
        </p>

        <h2>Inland Spousal Sponsorship - Spousal Open Work Permit</h2>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          The Spousal Open Work Permit Pilot Program (OWPP) allows spouses or
          common-law partners to work in Canada while awaiting spousal
          sponsorship application outcomes. Applicants can apply for an open
          work permit any time after applying for permanent residence in the
          Spouse or Common-Law Partner in Canada (SCLPC) class. The open work
          permit is not job-specific and allows work for any Canadian employer.
          These permits are typically valid for two years or until the passport
          expiry date.
        </p>

        <h3>Eligibility for Open Work Permit under the Pilot Program</h3>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "60px",
          }}
        >
          <li>
            {" "}
            <strong>Residency in Canada:</strong> You must currently reside in
            Canada.
          </li>
          <li>
            <strong> Sponsorship Category:</strong> You need to be sponsored
            under the Spouse or Common-Law Partner in Canada (SCLPC) Class.
          </li>
          <li>
            <strong> Valid Temporary Resident Status:</strong> Hold a valid
            temporary resident status, such as a visitor, student, or worker.
          </li>
          <li>
            <strong> Same Address as Sponsor:</strong> You must live at the same
            address as your sponsor.
          </li>
        </ul>

        <h3>Applying for a Spousal or Partner Work Permit</h3>
        <p>
          New spousal or partner work permit applications can be submitted along
          with your sponsorship application. These applications may also be
          submitted concurrently with an application for permanent residence.
          Ensure you include the appropriate fees and send the application by
          mail or courier.
        </p>

        <section
          style={{ marginTop: "50px" }}
          className={`${styles.section} ${styles.section}`}
          id="why-choose-u"
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

      <button
        className={styles.bookAppointmentBtn}
        onClick={() =>
          (window.location.href =
            "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
        }
      >
        Book Appointment
      </button>

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

export default SpouseInland;
