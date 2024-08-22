import React from "react";
import styles from "../styles/HomePage.module.css";

// import permanentResidenceImg from "../assets/homeLocation.png";
// import bcpnpImg from "../assets/employee.png";
// import visitorVisaImg from "../assets/visa.png";
// import studyVisaImg from "../assets/graduatedStudent.png";
// import familySponsorshipImg from "../assets/parents.png";
// import workPermitImg from "../assets/workPermit.png";
// import pflImg from "../assets/file.png";

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

import Rcic from "../assets/rcic.png";
import Capic from "../assets/capic.png";
import Cicc from "../assets/cicc.png";
import Simplifying1 from "../assets/immigration-challenges.png";
import Simplifying2 from "../assets/expert-in-refusal.png";
import BannerImage from "../assets/homePageBanner.jpg";
import LinkedinLogo from "../assets/bannerLinkedinLogo.png";

import Visa from "../assets/visa2.png";
import CheckMark from "../assets/success-stories-icon.webp";
import SmileFace from "../assets/happy-clients-icon.webp";

// import BestChoice from "../sections/BestChoice";
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
  return (
    <>
      <Navbar1 showBlue={true} />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h1>
              Feeling{" "}
              <span className={styles.bannerBlueHeading}>Overwhelmed?</span>
            </h1>
            <h1>
              Just Received a{" "}
              <span className={styles.bannerBlueHeading}>Refusal?</span>
            </h1>
            <h2>WE'VE HELPED MANY OVERCOME THEM</h2>
          </div>
          <div className={styles.cardContainer}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={styles.card}
                // onMouseEnter={(e) =>
                //   (e.currentTarget.querySelector("img").src = card.hoverImg)
                // }
                // onMouseLeave={(e) =>
                //   (e.currentTarget.querySelector("img").src = card.img)
                // }
              >
                <img src={card.img} alt={card.title} className={styles.icon} />
                <div className={styles.title}>
                  <h2>{card.title}</h2>
                </div>
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
<Blogs/>
<Testimonials_White/>
<FAQ_Blue/>
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
          /
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
              {clientVideosData.map((item) => {
                return (
                  <SwiperSlide>
                    <div></div>
                    <img src={item.img} />
                    {/* <p>{item.person_name}</p> */}
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
          /
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
      <Testimonials />
      <FAQ />

      <div className={styles.sourceParent}>
        <div className={styles.sourceMain}>
          <div className={styles.sourceHeadingParent}>
            <div>
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
            / <hr />
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
          {/* // */}

          {/* // */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
