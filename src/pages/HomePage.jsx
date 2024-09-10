import React, { useEffect } from "react";
import styles from "../styles/HomePage.module.css";
import WhiteLogo from "../assets/bright-source.webp";
import LinkedinLogo from "../assets/bannerLinkedinLogo.png";
import OurProcess from "../sections/OurProcess";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import FAQ_Blue from "../sections/FAQ_Blue";
import Testimonials_White from "../sections/Testimonials_White";
import Blogs from "../sections/Blogs";

let HomePage = () => {
  let [topSection, setTopSection] = useState([]);
  let [headline1Rest, setHeadline1Rest] = useState("");
  let [headline1Last, setHeadline1Last] = useState("");
  let [headline2Rest, setHeadline2Rest] = useState("");
  let [headline2Last, setHeadline2Last] = useState("");
  let [memberData, setMemberData] = useState([]);
  let [featuresData, setFeaturesData] = useState([]);
  let [loveneetBgImage, setLoveneetBgImage] = useState([]);
  let [achiementsData, setAchievementsData] = useState([]);
  let [servicesData, setServicesData] = useState([]);
  let [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/home-top")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          let headlineText = data[0].headline1;
          let words = headlineText.split(" ");
          let lastWord = words.pop();
          let restOfText = words.join(" ");
          setTopSection(data[0]);
          setHeadline1Rest(restOfText);
          setHeadline1Last(lastWord);

          let headlineText2 = data[0].headline2;
          let words2 = headlineText2.split(" ");
          let lastWord2 = words2.pop();
          let restOfText2 = words2.join(" ");
          setHeadline2Rest(restOfText2);
          setHeadline2Last(lastWord2);
        }
      });

    fetch("https://brightlight-node.onrender.com/member-of")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMemberData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/features")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setFeaturesData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/loveneetBg")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setLoveneetBgImage(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/achievements-section")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setAchievementsData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/services-section")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          let filteredArray = [];
          if (data[0].service1svg && data[0].service1name) {
            filteredArray.push({
              title: data[0].service1name,
              img: data[0].service1svg,
              desc: data[0].service1desc,
            });
          }
          if (data[0].service2svg && data[0].service2name) {
            filteredArray.push({
              title: data[0].service2name,
              img: data[0].service2svg,
              desc: data[0].service2desc,
            });
          }
          if (data[0].service3svg && data[0].service3name) {
            filteredArray.push({
              title: data[0].service3name,
              img: data[0].service3svg,
              desc: data[0].service3desc,
            });
          }
          if (data[0].service4svg && data[0].service4name) {
            filteredArray.push({
              title: data[0].service4name,
              img: data[0].service4svg,
              desc: data[0].service4desc,
            });
          }
          if (data[0].service5svg && data[0].service5name) {
            filteredArray.push({
              title: data[0].service5name,
              img: data[0].service5svg,
              desc: data[0].service5desc,
            });
          }
          if (data[0].service6svg && data[0].service6name) {
            filteredArray.push({
              title: data[0].service6name,
              img: data[0].service6svg,
              desc: data[0].service6desc,
            });
          }
          if (data[0].service7svg && data[0].service7name) {
            filteredArray.push({
              title: data[0].service7name,
              img: data[0].service7svg,
              desc: data[0].service7desc,
            });
          }
          if (data[0].service8svg && data[0].service8name) {
            filteredArray.push({
              title: data[0].service8name,
              img: data[0].service8svg,
              desc: data[0].service8desc,
            });
          }
          setServices(filteredArray);
          setServicesData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar1 showBlue={true} />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h1>
              {headline1Rest}{" "}
              <span className={styles.bannerBlueHeading}>{headline1Last}</span>
            </h1>
            <h1>
              {headline2Rest}{" "}
              <span className={styles.bannerBlueHeading}>{headline2Last}</span>
            </h1>
            <h2>{topSection?.SmallHeadline1}</h2>
          </div>

          <div className={styles.cardContainer}>
            {services.map((card, index) => (
              <div key={index} className={styles.card}>
                <img src={card.img} alt={card.title} className={styles.icon} />
                <div className={styles.title}>
                  <h2>{card.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <a href="/more-services">
            <button className={styles.bookButton17} role="button">
              More Services
            </button>
          </a>
        </div>
      </div>

      <div className={styles.bannerParent2}>
        <img src={loveneetBgImage?.image} />
        <div className={styles.bannerParent2ButtonDiv}>
          <a href="#">
            <button>
              <img src={LinkedinLogo} />
            </button>
          </a>

          <div className={styles.bannerParent2HaveQuestions}>
            <h5>Have Questions ?</h5>
            <a href="#">
              <button>
                <b>RCIC</b>
                <p>APPOINTEMENT</p>
              </button>
            </a>
          </div>
        </div>

        <div className={styles.bannerMain2}></div>
      </div>

      <div className={styles.memberParent}>
        <div className={styles.memberMain}>
          <div className={styles.memberCardParent}>
            <div className={styles.memberCard}>
              <p>{memberData?.heading1}</p>
              <div className={styles.memberCardImg}>
                <img src={memberData?.heading1Img} />
              </div>
            </div>

            <div className={styles.memberCard}>
              <p>{memberData?.heading2}</p>
              <div className={styles.memberCardImg}>
                <img src={memberData?.heading2Img} />
              </div>
            </div>

            <div className={styles.memberCard}>
              <p>{memberData?.heading3}</p>
              <div className={styles.memberCardImg}>
                <img src={memberData?.heading3Img} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.simplifyingParent}>
        <div className={styles.simplifyingMain}>
          <h1 className={styles.simplifyingHeading}>Why Us?</h1>
          {featuresData &&
            [1, 2, 3, 4].map(
              (num) =>
                featuresData[`feature${num}SVG`] &&
                featuresData[`feature${num}Heading`] && (
                  <div key={num} className={styles.simplifyingDiv}>
                    <div className={styles.simplifyingImg}>
                      <img
                        src={featuresData[`feature${num}SVG`]}
                        alt={`Feature ${num} Image`}
                      />
                    </div>
                    <div className={styles.simplifyingContent}>
                      <h2>{featuresData[`feature${num}Heading`]}</h2>
                      <p>{featuresData[`feature${num}Description`]}</p>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>

      <OurProcess />

      <div className={styles.expertiseParent}>
        <div className={styles.expertiseContentParent}>
          <div className={styles.expertiseContentHeading}>
            <h1>{servicesData?.heading}</h1>
            <p>{servicesData?.description}</p>

            <button className={styles.knowButton}>
              <a href="/">Know More</a>
            </button>
          </div>

          <div className={styles.testimonialsVideoSection}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper_pagination", clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={styles.swiper_container}
            >
              {services?.map((item, index) => {
                let formattedTitle = item.title
                  .toLowerCase()
                  .replace(/\s+/g, "-");
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.expertiseDiv}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                      <a className={styles.expertiseKmowMore} href={`/services/${formattedTitle}`}>Know More</a>
                    </div>
                  </SwiperSlide>
                );
              })}

              <div class="slider-controler" className={styles.slider_controler}>
                <div
                  class="swiper_pagination"
                  className={styles.swiper_pagination}
                ></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className={styles.aspectsParent}>
        <div className={styles.aspectsMain}>
          <div className={styles.aspectsHeading}>
            <h1>{achiementsData?.heading}</h1>
            <h2>{achiementsData?.description}</h2>
          </div>

          <div className={styles.aspectsCardParent}>
            <div className={styles.aspectsCard}>
              <img src={achiementsData?.achievement1SVG} />{" "}
              <h1>{achiementsData?.achievement1Numbers}</h1>{" "}
              <p>{achiementsData?.achievement1Heading}</p>
            </div>
            <div className={styles.aspectsCard}>
              <img src={achiementsData?.achievement2SVG} />{" "}
              <h1>{achiementsData?.achievement2Numbers}</h1>{" "}
              <p>{achiementsData?.achievement2Heading}</p>
            </div>
            <div className={styles.aspectsCard}>
              <img src={achiementsData?.achievement3SVG} />{" "}
              <h1>{achiementsData?.achievement3Numbers}</h1>{" "}
              <p>{achiementsData?.achievement3Heading}</p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials_White />

      {/* <Testimonials />
      <FAQ /> */}

      <div className={styles.sourceParent}>
        <div className={styles.sourceMain}>
          <div className={styles.sourceHeadingParent}>
            <div className={styles.sourceHeadingParentFirstDiv}>
              <img src={WhiteLogo} />
            </div>
            <div>
              <h1>Your Source For Staying Informed</h1>
              <p>IMMIGRATION NEWS & TRENDS</p>
            </div>
          </div>
          <div className={styles.sourceContentParent}>
            <div className={styles.sourceContent}>
              <div className={styles.sourceContentDate}>
                <p>VISA</p>
                <h2>NOV</h2>
                <h1>30</h1>
              </div>
              <div className={styles.sourceContentData}>
                <h3>
                  Minister Miller reveals strategy to improve Canada’s
                  immigration system
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text since the
                  1500s, wheLorem industry. Lorem Ipsum has been the industry's
                  standard dummy text since the 1500s, whe Lorem Ipsum is simply
                  dummy text of.
                </p>
                <button>Read more</button>
              </div>
            </div>
            <hr />
            <div className={styles.sourceContent}>
              <div className={styles.sourceContentDate}>
                <p>STUDY</p>
                <h2>MAY</h2>
                <h1>30</h1>
              </div>
              <div className={styles.sourceContentData}>
                <h3>
                  Canada caps international student admissions, tightens
                  eligibility for work permits
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text since the
                  1500s, wheLorem industry. Lorem Ipsum has been the industry's
                  standard dummy text since the 1500s, whe Lorem Ipsum is simply
                  dummy text of.
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <Blogs />
      <FAQ_Blue />
      <Footer1 />
    </>
  );
};

export default HomePage;
