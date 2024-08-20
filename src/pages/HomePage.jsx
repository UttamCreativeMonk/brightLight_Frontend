import React from "react";
import styles from "../styles/HomePage.module.css";

import permanentResidenceImg from "../assets/permanent_residence.png";
import bcpnpImg from "../assets/bcpnp.png";
import visitorVisaImg from "../assets/visitor_visa.png";
import studyVisaImg from "../assets/study_visa.png";
import familySponsorshipImg from "../assets/family_sponsorship.png";
import workPermitImg from "../assets/work_permit.png";
import pflImg from "../assets/pfl.png";

import Rcic from "../assets/rcic.png";
import Capic from "../assets/capic.png";
import Cicc from "../assets/cicc.png";
import Simplifying1 from "../assets/immigration-challenges.png";
import Simplifying2 from "../assets/expert-in-refusal.png";
import BannerImage from "../assets/homePageBanner.jpg";
import LinkedinLogo from "../assets/bannerLinkedinLogo.png";

import BluePointer from "../assets/blue-pointer.png";
import GoldenPointer from "../assets/golden-pointer.png";
import Runway from "../assets/runway.png";
import Plane from "../assets/plane.png";

import Visa from "../assets/visa2.png";
import CheckMark from "../assets/success-stories-icon.webp";
import SmileFace from "../assets/happy-clients-icon.webp";

let HomePage = () => {
  const cards = [
    { title: "Permanent Residence", img: permanentResidenceImg },
    { title: "BCPNP", img: bcpnpImg },
    { title: "Visitor Visa", img: visitorVisaImg },
    { title: "Study Visa", img: studyVisaImg },
    { title: "Family Sponsorship", img: familySponsorshipImg },
    { title: "Work Permit", img: workPermitImg },
    { title: "PFL", img: pflImg },
  ];
  return (
    <>
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h1>
              Feeling{" "}
              <span className={styles.bannerBlueHeading}>Overwhelmed?</span>{" "}
            </h1>
            <h1>
              Just Received a{" "}
              <span className={styles.bannerBlueHeading}>Refusal?</span>
            </h1>
            <h2>WE'VE HELPED MANY OVERCOME THEM</h2>
          </div>
          <div className={styles.cardContainer}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <img src={card.img} alt={card.title} className={styles.icon} />
                <div className={styles.title}>{card.title}</div>
              </div>
            ))}
          </div>
          <button className={styles.bookButton17} role="button">
            More Services
          </button>
        </div>
      </div>

      <div className={styles.bannerParent2}>
        <img src={BannerImage} alt="err" />
        <div className={styles.bannerParent2ButtonDiv}>
          <button> <img src={LinkedinLogo} alt="err" /></button>
          <div className={styles.bannerParent2HaveQuestions}>
            <h5>Have Questions ?</h5>
            <button><b>RCIC</b><p> APPOINTEMENT</p></button>
          </div>
        </div>

        <div className={styles.bannerMain2}></div>
      </div>

      <div className={styles.memberParent}>
        <div className={styles.memberMain}>
          <div className={styles.memberCardParent}>
            <div className={styles.memberCard}>
              <p>Member of</p>
              <div className={styles.memberCardImg}>
                <img src={Rcic} alt="err" />
              </div>
            </div>

            <div className={styles.memberCard}>
              <p>Member of</p>
              <div className={styles.memberCardImg}>
                <img src={Capic} alt="err" />
              </div>
            </div>

            <div className={styles.memberCard}>
              <p>Accepted by</p>
              <div className={styles.memberCardImg}>
                <img src={Cicc} alt="err" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.simplifyingParent}>
        <div className={styles.simplifyingMain}>
          <div className={styles.simplifyingDiv}>
            <div className={styles.simplifyingImg}>
              <img src={Simplifying1} alt="err" />
            </div>
            <div className={styles.simplifyingContent}>
              <h1>Simplifying Immigration Challenges</h1>
              <p>
                We understand the stress and confusion you might be facing. Our
                expert team knows every twist and turn of the complex
                immigration process making it faster and easier than you'd
                imagine.
              </p>
            </div>
          </div>

          <div className={styles.simplifyingDiv}>
            <div className={styles.simplifyingImg}>
              <img src={Simplifying2} alt="err" />
            </div>
            <div className={styles.simplifyingContent}>
              <h1>Expert in Refusal Cases</h1>
              <p>
                We have a proven track record of success in helping individuals
                overcome refusals, even those with 3 or 4 refusals. Our team of
                experienced professionals will carefully review your case and
                develop a personalised strategy to help you achieve your
                immigration goals.
              </p>
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

      <div className={styles.expertiseParent}>
        <div className={styles.expertiseContentParent}>
          <div className={styles.expertiseContentHeading}>
            <h1>Our Expertise is Your Success</h1>
            <p>
              Whether you're a student, a professional, or an entrepreneur
              dreaming of Canada, we're here to help you achieve it. Our
              Immigration visa services in Canada are tailored to your needs,
              making your journey to Canadian dream smooth.
            </p>

            <button className={styles.knowButton}>
              <a href="/">Know More</a>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.aspectsParent}>
        <div className={styles.aspectsMain}>
          <div className={styles.aspectsHeading}>
            <h1>Some Aspects that Hold Significance!</h1>
            <h2>
              OUR ACHIEVEMENTS IN THE SUCCESSFUL JOURNEY HAVE BEEN REMARKABLE
            </h2>
          </div>

          <div className={styles.aspectsCardParent}>
            <div className={styles.aspectsCard}>
              <img src={Visa} alt="err" /> <h1>10,257+</h1>{" "}
              <p>VISA PROCESSED</p>
            </div>
            <div className={styles.aspectsCard}>
              <img src={CheckMark} alt="err" /> <h1>10,112+</h1>{" "}
              <p>SUCCESS STORIES</p>
            </div>
            <div className={styles.aspectsCard}>
              <img src={SmileFace} alt="err" /> <h1>10,121+</h1>{" "}
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
