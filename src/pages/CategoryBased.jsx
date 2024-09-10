import React, { useEffect, useState } from "react";
import styles from "../styles/CategoryBased.module.css";
import GirlVisa from "../assets/GirlVisa.png";
import LinkAncor from "../assets/link-arrows.png";
import BestChoice from "../sections/BestChoice";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

let CategoryBased = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [data, setData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/category-based")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data && data[0]) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div className={styles.bannerHeading}>
            <h1>{data?.heading}</h1>
            <p>{data?.description}</p>
          </div>
          {/* // */}
          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p>About the program</p>
              <p>Benefits</p>
              <p>Categories</p>
              <p>How it Works</p>
              <p>Eligibility</p>
              <p>Draw History</p>
              <p>How to Apply</p>
              <p>Refusal Reasons</p>
              <p>Book Appointment</p>
              <p>Why Choose Us</p>
              <p>Testimonials</p>
              <p>FAQs</p>
              <p>Blogs</p>
            </div>
          </div>
          {/* // */}
        </div>
      </div>

      <div className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <h1>{data?.aboutHeading}</h1>
          <p>{data?.aboutDescription}</p>
        </div>

        <div className={styles.canadianImg}>
          <img src={data?.aboutImage} />
        </div>
      </div>

      <div className={styles.eligibleParent}>
        <h1>{data?.drawsHeading}</h1>
        <div className={styles.container}>
          <div className={styles.column}>
            <ul>
              <li>{data?.draw1}</li>
              <li>{data?.draw2}</li>
              <li>{data?.draw3}</li>
              <li>{data?.draw8}</li>
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              <li>{data?.draw4}</li>
              <li>{data?.draw5}</li>
              <li>{data?.draw6}</li>
              <li>{data?.draw7}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.categoryBasedParent}>
        <div className={styles.categoryBasedMain}>
          <h1>{data?.workHeading}</h1>
          <div className={styles.categoryBasedContentParent}>
            <div className={styles.categoryBasedContent}>
              <p>{data?.workDescription}</p>
            </div>
            <div className={styles.categoryBasedImg}>
              <img src={GirlVisa} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eligibilityParent}>
        <div className={styles.eligibilityMain}>
          <h1>{data?.eligibilityHeading}</h1>
          <h3>{data?.eligibilitySubHeading}</h3>

          <p className={styles.eligibilityPara}>
            {data?.eligibilityDescription}
          </p>

          <div className={styles.cardWrapper}>
            {data?.e1 ? (
              <div className={styles.card}>
                <p>{data?.e1}</p>
              </div>
            ) : null}
            {data?.e2 ? (
              <div className={styles.card}>
                <p>{data?.e2}</p>
              </div>
            ) : null}

            {data?.e3 ? (
              <div className={styles.card}>
                <p>{data?.e3}</p>
              </div>
            ) : null}

            {data?.e4 ? (
              <div className={styles.card}>
                <p>{data?.e4}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.benifitParent}>
        <div className={styles.benifitMain}>
          {data?.benefitsHeading ? <h1>{data?.benefitsHeading}</h1> : null}

          <div className={styles.benifitlistParent}>
            <ul>
              {data?.b1 ? <li>{data?.b1}</li> : null}
              {data?.b2 ? <li>{data?.b2}</li> : null}
              {data?.b3 ? <li>{data?.b3}</li> : null}
              {data?.b4 ? <li>{data?.b4}</li> : null}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.howApplyParent}>
        <div className={styles.howApplyMain}>
          {data?.applyHeading ? <h1>{data?.applyHeading}</h1> : null}
          {data?.applyDescription ? <h4>{data?.applyDescription}</h4> : null}

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              {data?.a1 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>1</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a1l ? (window.location.href = data?.a1l) : null
                    }
                    style={{
                      cursor: data?.a1l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a1}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a2 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>2</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a2l ? (window.location.href = data?.a2l) : null
                    }
                    style={{
                      cursor: data?.a2l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a2}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a3 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>3</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a3l ? (window.location.href = data?.a3l) : null
                    }
                    style={{
                      cursor: data?.a3l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a3}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a4 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>4</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a4l ? (window.location.href = data?.a4l) : null
                    }
                    style={{
                      cursor: data?.a4l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a4}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a5 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>5</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a5l ? (window.location.href = data?.a5l) : null
                    }
                    style={{
                      cursor: data?.a5l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a5}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a6 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>6</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a6l ? (window.location.href = data?.a6l) : null
                    }
                    style={{
                      cursor: data?.a6l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a6}</p>
                  </div>
                </>
              ) : null}
            </div>
            {/* / */}
          </div>
          {/* // */}
        </div>
      </div>

      <div className={styles.refusalParent}>
        <div className={styles.refusalMain}>
          {data?.refusalHeading ? <h1>{data?.refusalHeading}</h1> : null}
          {data?.refusalDescription ? (
            <h3>{data?.refusalDescription}</h3>
          ) : null}

          <div className={styles.refusalListParent}>
            <ul>
              {data?.r1 ? <li>{data?.r1}</li> : null}
              {data?.r2 ? <li>{data?.r2}</li> : null}
              {data?.r3 ? <li>{data?.r3}</li> : null}
              {data?.r4 ? <li>{data?.r4}</li> : null}
              {data?.r5 ? <li>{data?.r5}</li> : null}
              {data?.r6 ? <li>{data?.r6}</li> : null}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.theButtonAncorParent}>
        <div className={styles.theButtonAncor}>
          <a href={data?.drawHeadingLink}>
            <button>
              {data?.drawHeadingBottom}{" "}
              <span className={styles.theButtonSpan}>
                <img src={LinkAncor} alt="err" />
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className={styles.appointementParent}>
        <div className={styles.appointementMain}>
          {data?.bookHeading ? <h1>{data?.bookHeading}</h1> : null}

          {data?.bookSubHeading ? <h5>{data?.bookSubHeading}</h5> : null}
          {data?.bookDescription ? <p>{data?.bookDescription}</p> : null}
        </div>
      </div>
      <BestChoice />
      <Testimonials />
      <FAQ />

      <Footer1 />
    </>
  );
};

export default CategoryBased;
