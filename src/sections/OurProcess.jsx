import styles from "../styles/OurProcess.module.css";
import BluePointer from "../assets/blue-pointer.png";
import GoldenPointer from "../assets/golden-pointer.png";
import Runway from "../assets/runway.png";
import Plane from "../assets/plane.png";
import { useState } from "react";

let OurProcess = () => {
  let [planePosition, setPlanePosition] = useState(0);
  return (
    <div className={styles.ourProcessSection}>
      <div className={styles.fourCardParent}>
        <div className={styles.fourCard}>
          <div className={styles.fourCardHeading}>
            <h1>Our Process</h1>
            <p>IT’S QUITE EASY. WE PROMISE</p>
          </div>
          <div className={styles.fourCardImgParent}>
            <div className={styles.fourCardImg}>
              <div
                className={`${styles.fourCardMain} ${styles.blueCard}`}
                onMouseEnter={() => setPlanePosition(270)}
              >
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
              <div
                className={`${styles.fourCardMain} ${styles.goldenCard}`}
                onMouseEnter={() => setPlanePosition(480)}
              >
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
              <div
                className={`${styles.fourCardMain} ${styles.blueCard}`}
                onMouseEnter={() => setPlanePosition(690)}
              >
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
              <div
                className={`${styles.fourCardMain} ${styles.goldenCard}`}
                onMouseEnter={() => setPlanePosition(890)}
              >
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
            <img
              src={Plane}
              className={styles.plane}
              alt="err"
              style={{ left: `${planePosition}px` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;