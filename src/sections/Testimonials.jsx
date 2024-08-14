import React from "react";
import styles from "../styles/Testimonials.module.css";
import google from "../assets/google-review.webp";
import { ReactComponent as ReviewStar } from "../assets/review_star.svg";
import { ReactComponent as Arrow } from "../assets/right-arrow-white.svg";
import { useState } from "react";

let Testimonials = () => {
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
  return (
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
                <Arrow width={20} height={20} onClick={handlePreviousReview} />
                <p>{`${currentReview + 1} / ${clientTestimonials.length}`}</p>
                <Arrow width={20} height={20} onClick={handleNextReview} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;