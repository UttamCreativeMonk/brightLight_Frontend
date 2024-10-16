import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SpousalOpenWorkPermit.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const SpousalOpenWorkPermit = () => {
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
    fetch("https://brightlight-node.onrender.com/spousalOpenWokPerMeta")
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
             <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1  className={`${styles.heading} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}>
          Spousal Open Work Permit (SOWP) Canada
        </h1>

        <section className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
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

        <section className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
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

        <section className={`${styles.pathways} ${styles.section}`} id="testing2" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
            Pathways under Spousal Open Work Permit (SOWP)
          </h2>
          <ul >
            
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/common-law-partner-temporary")
              }
            >
           For the Spouse of the worker 
            </button>
            <li> <strong>Spouse or Common-law Partner of a Temporary Foreign Worker [C41, C46, C47, C48]</strong>
If you are the spouse or common-law partner of a temporary foreign worker who is authorized to work in Canada, you may be eligible for an open work permit. The duration depends on the validity of the work permit of the spouse.  
</li>
            
           
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/international-graduate-program")
              }
            >
         For Spouse of an International Student 
            </button>
         
         <li>   <strong>Spouse or Common-law Partner of an International Student[C42] </strong>
If you are the spouse or common-law partner of an international student who is attending a qualifying DLI and studying in a qualifying program  in Canada, you may be eligible for an open work permit. 
</li>
            
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/spouse-inland")
              }
            >
           PR OWP, Inland
            </button>
            <li><strong>Open work permit for spouses of Canadian/PR, who are in Canada and have applied for PR.</strong>
        This type of open work permit is available if you are in Canada and have submitted a spousal sponsorship application for PR.
            </li>
          </ul>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[4] = el}>
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

        <section className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[5] = el}>
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

        <section className={`${styles.refusalReasons} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[6] = el}>
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

        <section className={`${styles.assistance} ${styles.section}`} id="testing3" ref={(el) => sectionsRef.current[7] = el}>
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

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
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

export default SpousalOpenWorkPermit;
