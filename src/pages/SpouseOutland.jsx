import React, { useState } from "react";
import styles from "../styles/SpouseInland.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const SpouseOutland = () => {
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
              <p onClick={() => scrollToSection("Process")}>Process</p>
              <p onClick={() => scrollToSection("Process-Timeline")}>Process Timeline</p>
              <p onClick={() => scrollToSection("How-to-apply")}>
                How to Apply
              </p>
              <p onClick={() => scrollToSection("Eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("Dual-Intent-Visa")}>Dual Intent Visa</p>
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
        <h1 id="about-program">Outland Spousal and Common-Law Partner Sponsorship</h1>
        <p>
          Outland sponsorship provides an opportunity for Canadians and
          permanent residents to sponsor their spouse or common-law partner for
          permanent residence in Canada. Outland sponsorship allows foreign
          nationals residing abroad to be sponsored by their Canadian spouse or
          partner for permanent resident (PR) status in Canada. Unlike the
          Inland spousal sponsorship, which requires couples to live together
          within Canada, the Outland process accommodates situations where
          partners are separated by geographical boundaries.
        </p>

        <h2>Is Outland Sponsorship Right for You?</h2>
        <p>Consider Outland sponsorship if:</p>
        <ul>
          <li>You cannot apply for spousal sponsorship from within Canada.</li>
          <li>
            Your loved one is not legally residing in Canada during the
            application process.
          </li>
        </ul>
        <p>
          Even applicants currently in Canada can choose the Outland sponsorship
          route. It permits travel to and from Canada while the application is
          underway, making it suitable for those with work or personal
          commitments that require international mobility.
        </p>

        <h2 id="Process">Approval Process</h2>
        <p>
          For the sponsored person to obtain Canadian PR through Outland
          sponsorship, both the Canadian citizen or permanent resident and the
          foreign national must receive approval from Immigration, Refugees and
          Citizenship Canada (IRCC).
        </p>

        <h2 id="Eligibility">Eligibility Criteria</h2>
        <p>
          To sponsor a loved one under the Outland application category, both
          the sponsor and sponsored person must meet specific requirements:
        </p>
        <ul>
          <li>The sponsor must be a Canadian citizen or permanent resident.</li>
          <li>Both parties must be at least 18 years old.</li>
          <li>
            The relationship can fall into one of the following categories:
          </li>
          <ul>
            <li>
              Spouse: Legally married with a valid marriage recognized by the
              jurisdiction where registered and under Canadian law.
            </li>
            <li>
              Common-law: Cohabiting or having cohabited for at least 12
              consecutive months in a marriage-like relationship.
            </li>
            <li>
              Conjugal partnership*: In an ongoing committed relationship for at
              least 12 months, despite legal constraints preventing physical
              cohabitation (e.g., immigration barriers or marital status).
            </li>
          </ul>
          <li>
            The sponsor must not have sponsored a spouse in Canada within the
            five years preceding the application.
          </li>
          <li>
            Neither spouse should be incarcerated, charged with a serious
            offense, or bankrupt.
          </li>
        </ul>
        <p>
          Note: If you are in a conjugal relationship, submit an Outland
          sponsorship application, as this type of relationship is not eligible
          under Inland sponsorship.
        </p>

        <h2 id="How-to-apply">How to apply for Outland Sponsorship in Canada?</h2>
        <p>
          Outland sponsorship is a specialized application process designed to
          facilitate the sponsorship of a loved one under Canada’s Family Class
          immigration program. If you are a Canadian citizen or a permanent
          resident, this process allows you to sponsor your foreign spouse or
          partner for permanent residence.
        </p>
        <h3>Outland Sponsorship Process:</h3>
        <ol>
          <li>
            Eligibility Verification: Begin by confirming your eligibility as a
            sponsor. Ensure that you meet the necessary criteria to support your
            loved one’s immigration application.
          </li>
          <li>
            Document Collection: Gather all relevant supporting documents. These
            may include proof of your relationship, financial stability, and
            other required paperwork.
          </li>
          <li>
            Form Completion: Fill out the necessary forms accurately. Pay
            attention to any country-specific forms that may be applicable based
            on your spouse or partner’s country of residence.
          </li>
          <li>
            Submission: Submit your completed application package to the
            appropriate visa office in Canada. Follow the instructions provided
            in the official guide available on the government website.
          </li>
        </ol>

        <h2>Quebec-Specific Considerations:</h2>
        <p>
          <strong>Sponsorship in Quebec:</strong> If you reside in the province
          of Quebec, additional requirements apply. Quebec sponsors must commit
          to a financial undertaking to support their sponsored family members.
          The duration of this commitment varies based on the relationship type.
          For spousal sponsorship, the sponsor commits to financially supporting
          their spouse, common-law partner, or conjugal partner for three years.
        </p>
        <p>
          <strong>Processing Time:</strong> Outland sponsorship applications in
          Quebec may take up to 24 months to process.
        </p>

        <h2 id="Process-Timeline">Processing Timeline:</h2>
        <p>
          <strong>IRCC’s Targeted Processing Period:</strong> Generally, spousal
          sponsorships are processed within approximately 12-14 months. This
          timeline includes the time required for biometrics collection and the
          review of both the sponsor’s eligibility and the sponsored person’s
          application for permanent residence.
        </p>
        <ul>
          <li>
            Acknowledgment of Receipt (AOR): After submitting your application,
            you will receive an acknowledgment of receipt from IRCC.
          </li>
          <li>
            Eligibility Assessment: IRCC assesses the sponsor’s eligibility,
            which typically takes 4-5 months.
          </li>
          <li>
            Evaluation of Permanent Residence Application: The final step
            involves evaluating the sponsored person’s application for permanent
            residence, which may take approximately 6-8 months.
          </li>
          <li>
            Quebec-Specific Processing: As mentioned earlier, Quebec-based
            sponsorships may take up to 10-12 months to process.
          </li>
        </ul>
        <p>
          Remember that these timelines are approximate and subject to change
          based on individual circumstances and processing volumes.
        </p>

        <h2>Dual Intent Visa for Outland Spouse</h2>
        <p>
          Navigating the waiting period during spousal sponsorship applications
          can be challenging for newly married couples. These applications often
          take a considerable amount of time to process. However, there is an
          alternative: the Dual Intent Visitor Visa. In most cases, this visa is
          approved within 30 days and boasts a remarkable success rate of over
          90%.
        </p>

        <h3 id="Dual-Intent-Visa">What is a Dual Intent Visa?</h3>
        <p>
          The concept of Dual Intent involves simultaneously pursuing two
          pathways: applying for permanent residence and seeking temporary
          status. Essentially, it demonstrates an intention to both reside in
          Canada permanently and stay temporarily. For temporary residents, this
          can be a complex process. They must convincingly express their desire
          to leave Canada at the end of their authorized stay while also aiming
          to become permanent residents.
        </p>
        <p>
          At Brightlight Immigration, we understand that correctly demonstrating
          Dual Intent can be challenging. With over 12 years of experience, we
          strive to simplify this process for you.
        </p>

        <h2>Spouses and Partners</h2>
        <p>
          When assessing foreign nationals sponsored for permanent residence as
          spouses or common-law partners, officers take individual circumstances
          into account. Factors considered include:
        </p>
        <ul>
          <li>Approval status of the sponsorship application</li>
          <li>Stage one approval for permanent residence</li>
          <li>Retention of ties in the applicant’s home country</li>
          <li>
            Contingency plans in case the permanent residence application is
            refused
          </li>
        </ul>
        <p>
          If a spouse or partner can convincingly demonstrate that they will
          leave Canada at the end of their authorized stay, even if their
          permanent residence application is rejected, officers may issue a
          temporary resident visa (TRV).
        </p>
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

export default SpouseOutland;