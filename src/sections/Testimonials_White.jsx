import React, { useEffect } from "react";
import styles from "../styles/Testimonials_White.module.css";
import google from "../assets/google-review.webp";
import { ReactComponent as ReviewStar } from "../assets/review_star_blue.svg";
import { ReactComponent as Arrow } from "../assets/right-arrow-blue.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import aboutBanner from "../assets/about-banner.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

let Testimonials_White = () => {
  let [videosData, setVideosData] = useState([]);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/videos-section")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setVideosData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let getVideoIdFromUrl = (url) => {
    let urlParts = new URL(url);
    return urlParts.searchParams.get("v");
  };

  let videoId1 = videosData.video1
    ? getVideoIdFromUrl(videosData.video1)
    : null;
  let videoId2 = videosData.video2
    ? getVideoIdFromUrl(videosData.video2)
    : null;
  let videoId3 = videosData.video3
    ? getVideoIdFromUrl(videosData.video3)
    : null;
  let videoId4 = videosData.video4
    ? getVideoIdFromUrl(videosData.video4)
    : null;
  let videoId5 = videosData.video5
    ? getVideoIdFromUrl(videosData.video5)
    : null;
  let videoId6 = videosData.video6
    ? getVideoIdFromUrl(videosData.video6)
    : null;
  let videoId7 = videosData.video7
    ? getVideoIdFromUrl(videosData.video7)
    : null;
  let videoId8 = videosData.video8
    ? getVideoIdFromUrl(videosData.video8)
    : null;
  let videoId9 = videosData.video9
    ? getVideoIdFromUrl(videosData.video9)
    : null;
  let videoId10 = videosData.video10
    ? getVideoIdFromUrl(videosData.video10)
    : null;

  let [currentReview, setCurrentReview] = useState(0);
  let handlePreviousReview = () => {
    setCurrentReview((prev) => Math.max(prev - 1, 0));
  };

  let handleNextReview = () => {
    setCurrentReview((prev) =>
      Math.min(prev + 1, clientTestimonials.length - 1)
    );
  };
  let clientTestimonials = [
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "1",
    },
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "4",
    },
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "3",
    },
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "5",
    },
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "2",
    },
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "1",
    },
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "5",
    },
    {
      image:
        "https://www.fasttrackpromotion.com/wp-content/uploads/2013/04/happy-male-employee.jpg",
      review:
        "8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde asperiores facilis quam dolor saepe molestiae sed necessitatibus maiores tempora accusantium veniam cum officia alias rerum, repellat consectetur ea, incidunt aliquam dolorum rem cumque quos! Id deserunt fuga, aut dicta ipsa aspernatur minima velit earum qui doloremque doloribus hic amet.",
      person_name: "Saksham Verma",
      review_stars: "4",
    },
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
      <div className={styles.testimonialsSection}>
        <div className={styles.testimonialsContentSection}>
          <h1>Don't Leave without hearing from our clients testimonials.</h1>
          <div className={styles.googleImageSection}>
            <img src={google} />
            <p>4.4/5</p>
          </div>
          <div className={styles.clientReviewsOverflowSection}>
            <div className={styles.clientTestimonialsSection}>
              <div className={styles.clientImageSection}>
                <img
                  src={clientTestimonials[currentReview].image}
                  alt={clientTestimonials[currentReview].person_name}
                />
              </div>
              <div className={styles.reviewDetails}>
                <h3>{clientTestimonials[currentReview].review}</h3>
                <h2>{clientTestimonials[currentReview].person_name}</h2>
                <div className={styles.reviewsStarsSection}>
                  {Array.from(
                    { length: clientTestimonials[currentReview].review_stars },
                    (_, i) => (
                      <ReviewStar key={i} width={25} height={25} />
                    )
                  )}
                </div>

                <div className={styles.reviewsPaginationSection}>
                  <Arrow
                    width={20}
                    height={20}
                    onClick={handlePreviousReview}
                  />
                  <p>{`${currentReview + 1} / ${clientTestimonials.length}`}</p>
                  <Arrow width={20} height={20} onClick={handleNextReview} />
                </div>
              </div>
            </div>
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
              pagination={{ el: ".swiper_pagination_2", clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={styles.swiper_container}
            >
              {videosData.video1 && videosData.video1name ? (
                <SwiperSlide>
                  {videoId1 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video1name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video1name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video2 && videosData.video2name ? (
                <SwiperSlide>
                  {videoId2 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId2}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video2name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video2name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video3 && videosData.video3name ? (
                <SwiperSlide>
                  {videoId3 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video1name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video1name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video4 && videosData.video4name ? (
                <SwiperSlide>
                  {videoId4 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId4}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video4name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video4name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video5 && videosData.video5name ? (
                <SwiperSlide>
                  {videoId5 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId5}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video5name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video5name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video6 && videosData.video6name ? (
                <SwiperSlide>
                  {videoId6 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId6}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video6name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video6name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video7 && videosData.video7name ? (
                <SwiperSlide>
                  {videoId7 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId7}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video7name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video7name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video8 && videosData.video8name ? (
                <SwiperSlide>
                  {videoId8 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId8}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video8name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video8name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video9 && videosData.video9name ? (
                <SwiperSlide>
                  {videoId9 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId9}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video9name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video9name}</p>
                </SwiperSlide>
              ) : null}

              {videosData.video10 && videosData.video10name ? (
                <SwiperSlide>
                  {videoId10 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId10}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videosData.video10name}
                    ></iframe>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <p>{videosData.video10name}</p>
                </SwiperSlide>
              ) : null}

              <div class="slider-controler" className={styles.slider_controler}>
                <div
                  class="swiper_pagination_2"
                  className={styles.swiper_pagination}
                ></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials_White;