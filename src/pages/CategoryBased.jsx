import React from "react";
import styles from "../styles/CategoryBased.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import BestChoice from "../assets/best-choice.png";
import { ReactComponent as Responsibility } from "../assets/handsShake.svg";
import PlaneMap from "../assets/planeMap.png";
import BluePolygon from "../assets/blue-polygon.webp";
import GoogleIcon from "../assets/google-review.webp";
import GirlVisa from "../assets/GirlVisa.png";
import LinkAncor from "../assets/link-arrows.png";

let CategoryBased = () => {
  return (
    <>
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div className={styles.bannerHeading}>
            <h1>Category Based Draws</h1>
            <p>
              If you're a qualified professional in healthcare, STEM fields,
              trades, transport or agriculture, French speaker or working in
              agriculture then this could be your chance to make Canada your new
              home. Category-Based Draws offer lower CRS score cut-offs, meaning
              you may receive an invitation to apply for permanent residence
              sooner than you might under the standard Evnrose Entry process.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <h1>Introduction to Program</h1>
          <p>
            Category-based draws are an additional type of Express Entry draw.
            These draws target specific groups of Express Entry candidates who
            possess certain skills, qualifications, or experience that are in
            high demand in Canada's labor market. By focusing on specific
            categories, the Canadian government plans to attract highly skilled
            and qualified individuals to fill labor shortages and contribute to
            the country's economic growth.
          </p>
        </div>

        <div className={styles.canadianImg}>
          <img src={ServiceImg} alt="err" />
        </div>
      </div>

      <div className={styles.eligibleParent}>
        <h1>Here are the 6 Categories of Category based draws:</h1>
        <div className={styles.container}>
          <div className={styles.column}>
            <ul>
              <li>French-Language proficiency</li>
              <li>
                Science, Technology, Engineering, and Math (STEM) occupations
              </li>
              <li>Transport Occupations</li>
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              <li>Healthcare occupations</li>
              <li>Trade Occupations</li>
              <li>Agriculture and agri-food occupations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.categoryBasedParent}>
        <div className={styles.categoryBasedMain}>
          <h1>So how does category-based draws work?</h1>
          <div className={styles.categoryBasedContentParent}>
            <div className={styles.categoryBasedContent}>
              <p>
                Category-based draws are conducted separately from regular
                Express Entry draws, which typically invite candidates based on
                their Comprehensive Ranking System (CRS) score. Instead,
                category-based draws target specific groups of candidates based
                on their qualifications, such as work experience in healthcare,
                French language proficiency, or STEM (Science, Technology,
                Engineering, and Mathematics) skills.
              </p>
            </div>
            <div className={styles.categoryBasedImg}>
              <img src={GirlVisa} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eligibilityParent}>
        <div className={styles.eligibilityMain}>
          <h1>Eligibility for the program</h1>
          <h3>Are you eligible for a Category Based draw? Let's find out</h3>

          <p className={styles.eligibilityPara}>
            To be eligible for a category-based draw, you must meet all the
            requirements specified by IRCC for that particular category. Once a
            category-based draw is announced, IRCC will rank eligible candidates
            in the Express Entry pool based on their CRS score and select the
            highest-ranked candidates to receive invitations to apply (ITAs) for
            permanent residence. The eligibility requirements for category-based
            draws vary depending on the specific category. However, here are
            some general eligibility criteria that apply to all categories.
            These include:
          </p>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <p>You must have a valid Express Entry Profile</p>
            </div>
            <div className={styles.card}>
              <p>
                You must meet the language proficiency requirements for the
                selected category.
              </p>
            </div>
            <div className={styles.card}>
              <p>Have relevant work experience in the selected category.</p>
            </div>
            <div className={styles.card}>
              <p>
                You must meet the educational requirements for the selected
                category.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.benifitParent}>
        <div className={styles.benifitMain}>
          <h1>Did we mention the benefits?</h1>
          <h1>Here they are</h1>

          <div className={styles.benifitlistParent}>
            <ul>
              <li>
                Your chances of getting an ITA is Increased. By focusing on
                specific groups of candidates, category-based draws often have
                lower CRS cut-offs compared to general Express Entry draws. This
                means that candidates with lower CRS scores may still have a
                chance of receiving an ITA.
              </li>
              <li>
                It is a faster pathway to Canadian Permanent Residence. Once
                you're selected through a category-based draw, you can proceed
                directly to the application stage for permanent residence,
                shortening the overall immigration process.
              </li>
              <li>
                Opportunities for skilled professionals category-based draws are
                in demand. This means you'll have a clear path to pursue your
                career in Canada. Whether you're a healthcare worker, a skilled
                trades person, or an expert in STEM fields, Canada welcomes your
                talents.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.howApplyParent}>
        <div className={styles.howApplyMain}>
          <h1>How to Apply?</h1>
          <h4>
            Meet the eligibility criteria? Let's see how you can apply for a
            category-based draw
          </h4>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <p>
                  Create an Express Entry profile first. Or even better and
                  stress-free solution, let us handle your case for you.{" "}
                  <a href="#">Click here</a>
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <p>
                  Next, IRCC conducts draws irregularly, so keep a check on the
                  official website or <a href="#">Click here</a> for a prompt
                  notification.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <p>
                  The higher your score, the more likely you are to get an ITA.
                  Improve language skills, gain work experience, and get a
                  higher education.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <p>
                  If you meet the criteria and have a high enough score, you
                  will get an ITA to apply for permanent residence.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>5 </div>
              <div className={styles.stepContent}>
                <p>
                  You'll have 60 days to submit your complete application,
                  including documents like identity proof, language test
                  results, and work experience verification.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>6</div>
              <div className={styles.stepContent}>
                <p>
                  Once your application is approved, you will receive a
                  Confirmation of Permanent Residence (COPR), allowing you to
                  live and work in Canada permanently.
                </p>
              </div>
            </div>
            {/* / */}
          </div>
          {/* // */}
        </div>
      </div>

      <div className={styles.refusalParent}>
        <div className={styles.refusalMain}>
          <h1>Reasons of Refusal</h1>
          <h3>
            Don't forget to avoid these common category-based draw refusal
            reasons and increase your chances of approval.
          </h3>

          <div className={styles.refusalListParent}>
            <ul>
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
          </div>
        </div>
      </div>

      <div className={styles.theButtonAncorParent}>
        <div className={styles.theButtonAncor}>
          <a href="/">
            Express Entry Category Based Draws History{" "}
            <span className={styles.theButtonSpan}>
              <img src={LinkAncor} alt="err" />
            </span>
          </a>
        </div>
      </div>

      <div className={styles.appointementParent}>
        <div className={styles.appointementMain}>
          <h1>Book Appointment</h1>
          <h5>In Case</h5>
          <p>
            You have received a refusal for any of the reasons mentioned above
            or having doubts regarding your case and application, do not worry.
            With over a decade of experience, we specialize in handling Express
            Entry Programs. Our approval rate for these programs are near to
            100%. We achieve this with a tailored approach to your specific
            case. We use case law and find similar cases to your circumstances
            that had positive results, and we use them as precedents in cases we
            work on. This is why we have a high success rate. At Brightlight
            Immigration, we have a dedicated team of visa application
            specialists who can assist you from the start of the application
            process all the way to obtaining your PR. Start your process now.
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryBased;
