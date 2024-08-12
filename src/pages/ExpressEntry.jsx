import React from "react";
import styles from "../styles/ExpressEntry.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import BestChoice from "../assets/best-choice.png";
import { ReactComponent as Responsibility } from "../assets/handsShake.svg";
import PlaneMap from "../assets/planeMap.png";
import BluePolygon from "../assets/blue-polygon.webp";
import GoogleIcon from "../assets/google-review.webp";

let ExpressEntry = () => {
  return (
    <>
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div className={styles.bannerHeading}>
            <h1>Express Entry</h1>
            <p>
              Are you considering making Canada your new home or exploring
              professional opportunities? The Canadian Express Entry Program
              might be the pathway for you!
            </p>
          </div>

          <div className={styles.bannerHeadingRotateParent}>
            <div className={styles.bannerHeadingRotate}>
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p>About the program</p>
              <p>Eligibility</p>
              <p>Advantages of Express Entry</p>
              <p>Refusal Reasons</p>
              <p>Draw History</p>
              <p>Why Choose us</p>
              <p>Testimonials</p>
              <p>FAQs</p>
              <p>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <p>
            The Canadian Express Entry Program is a points-based system used by
            the Canadian government to select skilled workers for permanent
            residence. It's for those skilled individuals who can contribute to
            the country's economic growth. It is a swift and efficient way for
            qualified candidates to become permanent residents of Canada.
          </p>
        </div>

        <div className={styles.canadianImg}>
          <img src={ServiceImg} alt="err" />
        </div>
      </div>

      <div className={styles.eligibleParent}>
        <h1>Are you eligible for Express Entry? Let's Find out</h1>
        <p>
          To be eligible for Canada Express Entry, you must meet the minimum
          requirements of at least one of the three immigration programs it
          manages:
        </p>

        <div className={styles.eligibleCardParent}>
          <div className={styles.eligibleCard}>
            <h2>FEDERAL SKILLED WORKER PROGRAM (FSWP)</h2>
          </div>
          <div className={styles.eligibleCard}>
            <h2>FEDERAL SKILLED TRADE PROGRAM (FSTP)</h2>
          </div>
          <div className={styles.eligibleCard}>
            <h2>CANADIAN EXPERIENCE PROGRAM (CEC)</h2>
          </div>
        </div>
      </div>

      <div className={styles.additionGrandParent}>
        <div className={styles.additionParent}>
          <h1>
            In addition to the above programs, there are 3 categories of draws
            that you can get an Invitation to apply (ITA) from.
          </h1>

          <div className={styles.additionCardParent}>
            <div className={styles.additionCard}>
              <h2>GENERAL DRAWS</h2>
            </div>
            <div className={styles.additionCard}>
              <h2>CATEGORY BASED SELECTION</h2>
            </div>
            <div className={styles.additionCard}>
              <h2>PNP BASED SELECTION</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.advantagesParent}>
        <div className={styles.advantages}>
          <div className={styles.advantagesHeading}>
            <h1>Advantages of Express Entry:</h1>
          </div>
          <div className={styles.advantagesPara}>
            <p>
              There are various immigration programs that you can apply through:
              FSWP, FSTP, CEC or category based.This means that you can choose
              the program that best suits your qualifications and experience.
            </p>
            <hr />
            <p>Applications for Express Entry are accepted all year round.</p>
            <hr />
            <p>
              Once you receive your permanent residency visa, you can settle
              anywhere in Canada.
            </p>
            <hr />
            <p>
              After you have been physically present in Canada for at least
              1,095 days (3 years) out of the last 5 years, you can apply for
              Canadian Citizenship.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.forgetParent}>
        <div className={styles.forgetMain}>
          <div className={styles.forgetHeading}>
            <h1>
              Don't forget to avoid these common Express Entry refusal reasons
              and increase your chances of approval.
            </h1>
          </div>

          <div className={styles.forgetListParent}>
            <ul className={styles.forgetListMain}>
              <li className={styles.forgetList}>
                You selected an incorrect National Occupational Classification
                (NOC) code for your application.
              </li>
              <li className={styles.forgetList}>
                You do not meet the minimum requirements for Express Entry,
                including age, education, work experience, language proficiency,
                and settlement funds.
              </li>
              <li className={styles.forgetList}>
                Inaccurate and incomplete information about your education, work
                experience, family members, and previous immigration history.
              </li>
              <li className={styles.forgetList}>
                {" "}
                Missing essential documents, such as police clearances,
                educational assessments, language test results, work experience
                verification letters, reference letters etc.
              </li>
              <li className={styles.forgetList}>
                You failed to submit your Express Entry application within 60
                days of receiving an Invitation to Apply (ITA).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.incaseParent}>
        <div className={styles.incaseMain}>
          <div className={styles.incaseAncor}>
            <a href="/">Express Entry Draws History</a>
          </div>
          <div className={styles.incaseContent}>
            <h1>In case</h1>

            <p>
              You have received a refusal for any of the reasons mentioned above
              or having doubts regarding your case and application, do not
              worry. With over a decade of experience, we specialize in handling
              Express Entry Programs. Our approval rate for these programs are
              near to 100%. We achieve this with a tailored approach to your
              specific case. We use case law and find similar cases to your
              circumstances that had positive results, and we use them as
              precedents in cases we work on. This is why we have a high success
              rate. At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process all the way to obtaining your PR. Start your
              process now.
            </p>

            <button className={styles.theButton} role="button">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.bestChoiceParent}>
          <div className={styles.bestChoice}>
            <div className={styles.bestChoiceHeading}>
              {/* <h2>What makes us the best choice for you?</h2> */}
            </div>
            <img src={BestChoice} alt="err" />
            <img src={PlaneMap} alt="err" />
          </div>
        </div>
      </div>

      {/* <div className={styles.faqParent}>
        <div className={styles.faqImageParent}>
        <div className={styles.faqMain}>
          <div className={styles.faqContent}>
            <div className={styles.faqHeading}>
              <div className={styles.faqHeadingTest}> 
              <div className={styles.bluePolygon}><img src={BluePolygon} alt="err" />
              <div> <h1>FAQ's Made Simple</h1> </div>
              </div>
              </div>
              <h4> Who is eligible for Express Entry? </h4>
              <h4> How do I apply for Express Entry? </h4>
              <h4> How do I get an Invitation to Apply (ITA)?</h4>
              <h4>
                {" "}
                What is the processing time for Express Entry applications?{" "}
              </h4>
              <h4>
                {" "}
                What are the benefits of immigrating to Canada through Express
                Entry?{" "}
              </h4>
              <h4>
                {" "}
                What are the risks of immigrating to Canada through Express
                Entry?{" "}
              </h4>
              <h4>
                {" "}
                How can I improve my chances of success in the Express Entry
                system?{" "}
              </h4>
            </div>
            <div className={styles.faqPara}>
              <p>
                Express Entry is Canada's main economic immigration system for
                skilled workers, professionals, and international graduates. It
                is a points-based system that uses a ranking system called the
                Comprehensive Ranking System (CRS) to select candidates for
                permanent residency.
              </p>
            </div>
          </div>
        </div>
        /</div>
      </div> */}

      <div className={styles.container}>
        <div className={styles.faqSection}>
          <div className={styles.icon}>
            <div className={styles.questionMark}>?</div>
          </div>
          <div className={styles.faqContent}>
            <h1 className={styles.title}>FAQ’s Made Simple</h1>
            <div className={styles.faqItem}>
              <h2 className={styles.question}>What is Express Entry?</h2>
              <p className={styles.answer}>
                Express Entry is Canada’s main economic immigration system for
                skilled workers, professionals, and international graduates. It
                is a points-based system that uses a ranking system called the
                Comprehensive Ranking System (CRS) to select candidates for
                permanent residency.
              </p>
            </div>
            <ul className={styles.questions}>
              <li>Who is eligible for Express Entry?</li>
              <li>How do I apply for Express Entry?</li>
              <li>How do I get an Invitation to Apply (ITA)?</li>
              <li>
                What is the processing time for Express Entry applications?
              </li>
              <li>
                What are the benefits of immigrating to Canada through Express
                Entry?
              </li>
              <li>
                What are the risks of immigrating to Canada through Express
                Entry?
              </li>
              <li>
                How can I improve my chances of success in the Express Entry
                system?
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* // */}

      <div className={styles.testimonialParent}>
        <div className={styles.testimonialMain}>
          <h1>Don't leave without hearing from our clients testimonials.</h1>

          <div className={styles.testimonialGoogleParent}>
            <div className={styles.testimonialGoogleImg}><img src={GoogleIcon} alt="err" /></div>
            <div className={styles.testimonialRating}><p>4.4/5</p></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ExpressEntry;
