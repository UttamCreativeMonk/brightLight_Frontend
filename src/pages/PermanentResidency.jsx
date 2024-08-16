import React from "react";
import styles from "../styles/PermanentResidency.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import { ReactComponent as Responsibility } from "../assets/handsShake.svg";
import studyVisaImg from '../assets/study_visa.png';
import BluePointer from "../assets/blue-pointer.png";
import GoldenPointer from "../assets/golden-pointer.png";
import Runway from "../assets/runway.png";
import Plane from "../assets/plane.png";


let PermanentResidency = () => {
  return (
    <>
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div className={styles.bannerHeading}>
            <h1>Permanent Residency</h1>
            <p>
              Canada welcomes thousands of skilled individuals from around the
              world every year. With a thriving economy, high living standards,
              and better opportunities, it's no wonder so many aspire to call it
              home.
            </p>
          </div>

          <div className={styles.bannerHeadingRotateParent}>
            <div className={styles.bannerHeadingRotate}>
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p>About the program</p>
              <p>Pathways to becoming PR</p>
              <p>Our process</p>
              <p>Blogs</p>
              <p>Free Assessment</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <p>
            The Canadian Permanent Residency (PR) Program, managed by
            Immigration, Refugees and Citizenship Canada (IRCC), allows foreign
            nationals to obtain permanent resident status in Canada. This status
            gives you the right to live, work, and study in Canada indefinitely,
            with the same rights and freedoms as Canadian citizens (except
            voting and running for office).
          </p>

          <p>
            There are different PR programs available, each with its own
            eligibility requirements and application process. For over a decade,
            we have successfully processed thousands of PR applications
            successfully. We will provide you all the information you need to
            explore your options and help you select the best one for you.
          </p>
        </div>

        <div className={styles.canadianImg}>
          <img src={ServiceImg} alt="err" />
        </div>
      </div>

      <div className={styles.pathwayParent}>
        <div className={styles.pathway}>
          <div className={styles.pathwayHeading}>
            <h1>Pathway's to becoming a PR</h1>
          </div>

          <div className={styles.pathwayCardsParent}>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="" />
              <h2>Express Entry</h2>
            </div>
            <div className={styles.pathwayCards}>
            <img src={studyVisaImg} alt="" />
              <h2>Pilot Program</h2>
            </div>
            <div className={styles.pathwayCards}>
            <img src={studyVisaImg} alt="" />
              <h2>PNP</h2>
            </div>
            <div className={styles.pathwayCards}>
            <img src={studyVisaImg} alt="" />
              <h2>RNIP</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fourCardParent}>
        <div className={styles.fourCard}>
          <div className={styles.fourCardHeading}>
            <h1>Our Process</h1>
            <p>IT’S QUITE EASY. WE PROMISE</p>
          </div>
          <div className={styles.fourCardImgParent}>
            <div className={styles.fourCardImg}>
              <div className={`${styles.fourCardMain} ${styles.blueCard}`}>
                <div className={styles.pointerImageSection}>
                  <img src={BluePointer} alt="err" />
                  <p>1</p>
                </div>
                <h3>PERSONALISED ASSESMENT</h3>
                <ul>
                  <li>
                    Firstly, we will identify and understand your Canadian
                    immigration needs and goals.
                  </li>
                  <li>
                    Then, we will assess your eligibility for various
                    immigration programs accordingly.
                  </li>
                  <li>
                    We will recommend the best pathway for your immigration
                    goals after assessment.
                  </li>
                  <li>
                    Any questions you have about the chosen pathway will be
                    addressed along with any other concerns.
                  </li>
                </ul>
              </div>
              <div className={`${styles.fourCardMain} ${styles.goldenCard}`}>
                <div className={styles.pointerImageSection}>
                  <img src={GoldenPointer} alt="err" />
                  <p>2</p>
                </div>
                <h3>TAILORED APPROACH</h3>
                <ul>
                  <li>
                    We'll create a custom Canadian immigration plan suited just
                    for you according to the pathway selected.
                  </li>
                  <li>
                    Based on this plan, you'll receive a clear proposal from us
                    outlining our services and payment structure, i.e., 50%
                    before processing your file and 50% before submission.
                  </li>
                  <li>
                    Once the initial 50% payment is made, we'll share a
                    comprehensive checklist to ensure everything is ready
                  </li>
                </ul>
              </div>
              <div className={`${styles.fourCardMain} ${styles.blueCard}`}>
                <div className={styles.pointerImageSection}>
                  <img src={BluePointer} alt="err" />
                  <p>3</p>
                </div>
                <h3>APPLICATION FULFILLMENT</h3>
                <ul>
                  <li>
                    A case manager will be assigned to guide you and collect
                    documents as per the checklist
                  </li>
                  <li>
                    We’ll prepare a strong application within 7-10 business days
                  </li>
                  <li>
                    Once your application is ready, we’ll send it to you for
                    review and final approval.
                  </li>
                  <li>
                    After your approval, simply pay the remaining 50% payment,
                    and your application will be submitted.
                  </li>
                </ul>
              </div>
              <div className={`${styles.fourCardMain} ${styles.goldenCard}`}>
                <div className={styles.pointerImageSection}>
                  <img src={GoldenPointer} alt="err" />
                  <p>4</p>
                </div>
                <h3>TRUSTED PARTNERSHIP</h3>
                <ul>
                  <li>
                    Once your application is submitted successfully, we'll keep
                    you informed at every stage of the process, from submission
                    to decision.
                  </li>
                  <li>
                    Our ongoing support and guidance will help you achieve your
                    immigration goals.
                  </li>
                  <li>
                    You can reach out to us to inquire about updates on your
                    application.
                  </li>
                  <li>
                    If satisfied with our service, we hope you'll feel inclined
                    to refer others to us
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.runwayParent}>
            <img src={Runway} alt="err" />
            <img src={Plane} className={styles.plane} alt="err" />
          </div>
        </div>
      </div>

      <div className={styles.blogParent}>
        <div className={styles.blogMain}>
          <div className={styles.blogHeading}>
            <h1>Read our recent Blogs on Express Entry 2024</h1>
          </div>
          <div className={styles.blogCardParent}>
            <div className={styles.blogCard}></div>
            <div className={styles.blogCard}></div>
            <div className={styles.blogCard}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PermanentResidency;
