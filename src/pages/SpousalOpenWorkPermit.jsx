import React, { useState } from "react";
import styles from "../styles/SpousalOpenWorkPermit.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const SpousalOpenWorkPermit = () => {
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
                {" "}
                About the Program
              </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
          Spousal Open Work Permit (SOWP) Canada
        </h1>

        <section className={styles.introduction}>
          <p>
            With a Spousal Open Work Permit (SOWP), your spouse can accompany
            you in Canada, allowing them to flourish professionally and
            contribute to your family's well-being.
          </p>
          <p>
            A Spousal Open Work Permit (SOWP) is a type of work permit issued to
            the spouse or common-law partner of a temporary visa holder,
            permanent resident, or citizen of Canada. It allows the spouse to
            work freely in Canada without requiring a specific job offer. This
            type of permit is particularly beneficial for spouses who want to
            join their partners in Canada and contribute financially to their
            families.
          </p>
        </section>

        <section className={styles.benefits} id="benifits">
          <h2 className={styles.subheading}>
            Benefits of Spousal Open Work Permit (SOWP)
          </h2>
          <ul>
            <li>
              It enables your spouse or common-law partner to accompany you to
              Canada and reside with you.
            </li>
            <li>
              It permits your spouse or common-law partner to work, alleviating
              financial strain on you.
            </li>
            <li>
              It provides your spouse or common-law partner with the opportunity
              to gain Canadian work experience.
            </li>
            <li>
              Through the Canadian work experience gained, they may become
              eligible for permanent residency programs.
            </li>
            <li>
              They have the flexibility to work for any employer and in any
              position.
            </li>
            <li>They can also establish their own business if desired.</li>
            <li>
              Unlike visitors, they are allowed to stay in Canada for longer
              than six months, with multiple entries allowed.
            </li>
          </ul>
        </section>

        <section className={styles.pathways}>
          <h2 className={styles.subheading}>
            Pathways under Spousal Open Work Permit (SOWP)
          </h2>
          <ul >
            <li>
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/common-law-partner-temporary")
              }
            >
           Spouse or Common-law Partner of a Temporary Foreign Worker 
            </button>
            </li>
            <li>
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/international-graduate-program")
              }
            >
          Spouse or Common-law Partner of an International Student
            </button>
            </li>
            <li>
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/spousal-open-work-permit")
              }
            >
             Open Work Permit for Spouses of Canadian/PR
            </button>
            </li>
          </ul>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2 className={styles.subheading}>
            Eligibility Criteria for Spousal Open Work Permit (SOWP)
          </h2>
          <p>
            If your partner is currently working or studying in Canada, you
            could be eligible for an open work permit. Or, in some cases, if
            your partner is sponsoring you for permanent residency in Canada,
            you could also be eligible for a spousal open work permit. To be
            eligible for a SOWP, you need to meet the following criteria:
          </p>
          <ol>
            <li>
              Be married or in a common-law partnership with a Canadian citizen,
              permanent resident, or a person with a valid Canadian work permit
              or study permit.
            </li>
            <li>
              Provide genuine evidence of your relationship with your partner.
            </li>
            <li>
              Be admissible to Canada, including being free from any criminal or
              medical grounds of inadmissibility.
            </li>
            <li>
              In some cases, prove that you have sufficient funds to support
              yourself during your stay in Canada.
            </li>
          </ol>
          <div className={styles.eligibilityChart}>
            <h3 className={styles.chartHeading}>Eligibility Chart</h3>
            <table>
              <thead>
                <tr>
                  <th>Your Sponsor’s Status</th>
                  <th>Occupational Skill Level Required of Your Sponsor</th>
                  <th>Minimum Work Permit Validity of Your Sponsor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Canadian citizen or permanent resident</td>
                  <td>Not necessary</td>
                  <td>Not necessary</td>
                </tr>
                <tr>
                  <td>Valid study permit holder</td>
                  <td>Not necessary</td>
                  <td>Not necessary</td>
                </tr>
                <tr>
                  <td>Valid work permit, including PGWP</td>
                  <td>TEER 0, 1, 2, 3, 4, 5</td>
                  <td>Not necessary</td>
                </tr>
                <tr>
                  <td>Bridging Open Work Permit (BOWP)</td>
                  <td>Varies depending on the program sponsor applies under</td>
                  <td>6 months</td>
                </tr>
                <tr>
                  <td>Provincial Nominee</td>
                  <td>Any occupational skill level</td>
                  <td>6 months</td>
                </tr>
                <tr>
                  <td>Atlantic Immigration Program (AIP) work permit holder</td>
                  <td>TEER 0, 1, 2, or 3</td>
                  <td>6 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.applicationProcess} id="how-to-apply">
          <h2 className={styles.subheading}>
            How to Apply for Spousal Open Work Permit (SOWP)
          </h2>
          <p>
            The list of documents needed for a Canadian spousal open work permit
            will depend on the category you're applying under and your
            individual circumstances. However, here's a general list of
            documents you might need to provide:
          </p>
          <ol>
            <li>Completed application forms.</li>
            <li>Proof of valid status in Canada, if already in Canada.</li>
            <li>Proof of your spouse's status in Canada (as applicable).</li>
            <li>
              Proof of your relationship (a marriage certificate or proof of
              common-law relationship, etc).
            </li>
            <li>
              Documentation highlighting the authenticity of your relationship
              bond.
            </li>
            <li>A clear photocopy of your valid passport.</li>
            <li>Medical exam results.</li>
            <li>Acknowledgment of Receipt (AOR) letter, if applicable.</li>
            <li>Proof of payment for government fees.</li>
          </ol>
          <p>
            Please note that these are just general documents, and the specific
            requirements may vary depending on your circumstances. It is always
            advisable to consult with an immigration consultant or authorized
            representative for personalized guidance and a checklist. Reach out
            to our Regulated Canadian Immigration Consultant (RCIC) at
            604-503-3734 for a more tailored checklist to increase your chances
            of a successful application.
          </p>
        </section>

        <section className={styles.refusalReasons} id="refusal-reasons">
          <h2 className={styles.subheading}>
            Common Reasons for Refusal of Spousal Open Work Permit (SOWP)
          </h2>
          <p>
            To increase your chances of successfully obtaining a spousal open
            work permit (SOWP), it's crucial to avoid certain common reasons for
            refusal, receiving Procedural Fairness Letter (PFL), or a request
            for additional documents. Let's explore the most frequently cited
            reasons why an immigration officer might deny your application:
          </p>
          <ul>
            <li>
              <strong>Genuineness of Relationship:</strong> The strength of your
              relationship with your spouse or common-law partner is a
              cornerstone of the SOWP application. To convince the officer of
              the authenticity of your bond, provide ample evidence of your
              shared history, such as joint bank statements, shared property
              ownership, joint travel documents, etc.
            </li>
            <li>
              <strong>Insufficient Proof of Funds:</strong> Showing financial
              stability is essential for securing a SOWP. Gather all supporting
              documents that showcase your and your spouse's ability to support
              yourselves in Canada, such as bank statements, employment letters,
              tax returns, etc.
            </li>
            <li>
              <strong>Lack of Ties to Home Country:</strong> The officer needs
              assurance that you intend to return to your home country once your
              stay in Canada concludes. Provide evidence of your strong ties to
              your native land, including property ownership, employment
              opportunities, etc.
            </li>
            <li>
              <strong>School Enrollment Proof (if applicable):</strong> To make
              your application stronger, provide solid evidence that your
              sponsor is currently enrolled in and actively attending classes at
              a designated learning institution (DLI) in Canada. Failure to do
              so could significantly hinder your application's chances of
              approval.
            </li>
          </ul>
        </section>

        <section className={styles.assistance}>
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have obtained approvals for clients
            who had multiple previous refusals.
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

          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
        </section>

        <section className={styles.whyChooseUs} id="why-choose-us">
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we are committed to providing you with
            expert assistance throughout your immigration journey. Our
            experienced team is dedicated to achieving the best possible
            outcomes for our clients.
          </p>
          {/* You can add testimonials and video testimonials here */}
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

export default SpousalOpenWorkPermit;
