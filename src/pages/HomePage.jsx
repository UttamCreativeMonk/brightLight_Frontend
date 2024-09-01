import React, { useEffect } from "react";
import styles from "../styles/HomePage.module.css";
import permanentResidenceImg from "../assets/homeLocation.png";
import permanentResidenceHoverImg from "../assets/visaSVG.svg";
import bcpnpImg from "../assets/employee.png";
import bcpnpHoverImg from "../assets/employeeWhite.png";
import visitorVisaImg from "../assets/visa.png";
import visitorVisaHoverImg from "../assets/visaWhite.png";
import studyVisaImg from "../assets/graduatedStudent.png";
import studyVisaHoverImg from "../assets/graduatedStudentWhite.png";
import familySponsorshipImg from "../assets/parents.png";
import familySponsorshipHoverImg from "../assets/parentsWhite.png";
import workPermitImg from "../assets/workPermit.png";
import workPermitHoverImg from "../assets/workPermitWhite.png";
import pflImg from "../assets/file.png";
import pflHoverImg from "../assets/fileWhite.png";
import WhiteLogo from "../assets/bright-source.webp";
import LinkedinLogo from "../assets/bannerLinkedinLogo.png";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import OurProcess from "../sections/OurProcess";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import aboutBanner from "../assets/about-banner.png";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
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

  const cards = [
    {
      title: "Permanent Residence",
      img: permanentResidenceImg,
      hoverImg: permanentResidenceHoverImg,
    },
    {
      title: "BCPNP",
      img: bcpnpImg,
      hoverImg: bcpnpHoverImg,
    },
    {
      title: "Visitor Visa",
      img: visitorVisaImg,
      hoverImg: visitorVisaHoverImg,
    },
    { title: "Study Visa", img: studyVisaImg, hoverImg: studyVisaHoverImg },
    {
      title: "Family Sponsorship",
      img: familySponsorshipImg,
      hoverImg: familySponsorshipHoverImg,
    },
    { title: "Work Permit", img: workPermitImg, hoverImg: workPermitHoverImg },
    { title: "PFL", img: pflImg, hoverImg: pflHoverImg },
  ];

  let clientVideosData = [
    {
      img: aboutBanner,
      person_name: "Person 1",
    },
    {
      img: aboutBanner,
      person_name: "Person 2",
    },
    {
      img: aboutBanner,
      person_name: "Person 3",
    },
    {
      img: aboutBanner,
      person_name: "Person 4",
    },
    {
      img: aboutBanner,
      person_name: "Person 5",
    },
    {
      img: aboutBanner,
      person_name: "Person 6",
    },
    {
      img: aboutBanner,
      person_name: "Person 7",
    },
    {
      img: aboutBanner,
      person_name: "Person 8",
    },
    {
      img: aboutBanner,
      person_name: "Person 9",
    },
    {
      img: aboutBanner,
      person_name: "Person 10",
    },
  ];

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
            {cards.map((card, index) => (
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
        <img src={loveneetBgImage?.image} alt="err" />
        <div className={styles.bannerParent2ButtonDiv}>
          <button>
            {" "}
            <img src={LinkedinLogo} alt="err" />
          </button>
          <div className={styles.bannerParent2HaveQuestions}>
            <h5>Have Questions ?</h5>
            <button>
              <b>RCIC</b>
              <p>APPOINTEMENT</p>
            </button>
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
                <img src={memberData?.heading1Img} alt="err" />
              </div>
            </div>

            <div className={styles.memberCard}>
              <p>{memberData?.heading2}</p>
              <div className={styles.memberCardImg}>
                <img src={memberData?.heading2Img} alt="err" />
              </div>
            </div>

            <div className={styles.memberCard}>
              <p>{memberData?.heading3}</p>
              <div className={styles.memberCardImg}>
                <img src={memberData?.heading3Img} alt="err" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.simplifyingParent}>
        <div className={styles.simplifyingMain}>
          {featuresData.feature1SVG && featuresData.feature1Heading ? (
            <div className={styles.simplifyingDiv}>
              <div className={styles.simplifyingImg}>
                <img src={featuresData?.feature1SVG} alt="err" />
              </div>
              <div className={styles.simplifyingContent}>
                <h1>{featuresData?.feature1Heading}</h1>
                <p>{featuresData?.feature1Description}</p>
              </div>
            </div>
          ) : null}

          {featuresData.feature2SVG && featuresData.feature2Heading ? (
            <div className={styles.simplifyingDiv}>
              <div className={styles.simplifyingImg}>
                <img src={featuresData?.feature2SVG} alt="err" />
              </div>
              <div className={styles.simplifyingContent}>
                <h1>{featuresData?.feature2Heading}</h1>
                <p>{featuresData?.feature2Description}</p>
              </div>
            </div>
          ) : null}

          {featuresData.feature3SVG && featuresData.feature3Heading ? (
            <div className={styles.simplifyingDiv}>
              <div className={styles.simplifyingImg}>
                <img src={featuresData?.feature3SVG} alt="err" />
              </div>
              <div className={styles.simplifyingContent}>
                <h1>{featuresData?.feature3Heading}</h1>
                <p>{featuresData?.feature3Description}</p>
              </div>
            </div>
          ) : null}

          {featuresData.feature4SVG && featuresData.feature4Heading ? (
            <div className={styles.simplifyingDiv}>
              <div className={styles.simplifyingImg}>
                <img src={featuresData?.feature4SVG} alt="err" />
              </div>
              <div className={styles.simplifyingContent}>
                <h1>{featuresData?.feature4Heading}</h1>
                <p>{featuresData?.feature4Description}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <OurProcess />

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
              {clientVideosData.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div></div>
                    <img src={item.img} />
                  </SwiperSlide>
                );
              })}
              ;
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
              <img src={achiementsData?.achievement1SVG} alt="err" />{" "}
              <h1>{achiementsData?.achievement1Numbers}</h1>{" "}
              <p>{achiementsData?.achievement1Heading}</p>
            </div>
            <div className={styles.aspectsCard}>
              <img src={achiementsData?.achievement2SVG} alt="err" />{" "}
              <h1>{achiementsData?.achievement2Numbers}</h1>{" "}
              <p>{achiementsData?.achievement2Heading}</p>
            </div>
            <div className={styles.aspectsCard}>
              <img src={achiementsData?.achievement3SVG} alt="err" />{" "}
              <h1>{achiementsData?.achievement3Numbers}</h1>{" "}
              <p>{achiementsData?.achievement3Heading}</p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials_White />

      <Testimonials />
      <FAQ />

      <div className={styles.sourceParent}>
        <div className={styles.sourceMain}>
          <div className={styles.sourceHeadingParent}>
            <div className={styles.sourceHeadingParentFirstDiv}>
              <img src={WhiteLogo} alt="ERR" />
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
      <Footer />
    </>
  );
};

export default HomePage;
