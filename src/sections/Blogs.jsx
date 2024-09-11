import styles from "../styles/Blogs.module.css";
import Slider from "react-slick";
import brightBlogs from "../assets/brightblogs.webp";
import { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as Prevarrow } from "../assets/right-arrow-blue.svg";
import { ReactComponent as Nextarrow } from "../assets/right-arrow-blue.svg";

let NextArrow = () => {
  return (
    <button>
      <Nextarrow />
    </button>
  );
};

let PrevArrow = () => {
  return (
    <button>
      <Prevarrow />
    </button>
  );
};

let Blogs = () => {
  let [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/adding-blog")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBlogs(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className={styles.blogs}>
      <div className={styles.blogsParent}>
        <div className={styles.blogsTopSection}>
          <img src={brightBlogs} />
          <div className={styles.blogsHeading}>
            <h1>Our Thougtful Narratives</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam voluptate incidunt nesciunt beatae assumenda, at id
              maiores, quia molestiae sapiente obcaecati odio, omnis earum
              laudantium consectetur sequi voluptatum repellendus porro nemo
              quae quo voluptatem magnam debitis. Eos, placeat. Iste, deserunt?
            </p>
          </div>
        </div>
        <div className={styles.sliderSection}>
          <Slider {...settings}>
            {blogs.map((item, index) => {
              let stripHtmlTags = (text) =>
                text ? text.replace(/<[^>]*>/g, "") : "";

              let truncateText = (text, numChars) => {
                let cleanedText = stripHtmlTags(text);
                if (cleanedText.length <= numChars) return cleanedText;
                return cleanedText.slice(0, numChars) + "...";
              };
              return (
                <a
                  className={styles.blog}
                  key={index}
                  href={`/blogs/${item._id}`}
                >
                  <img src={item.image} />
                  <h5>{item.category}</h5>
                  <h2>{item.blog_heading}</h2>
                  <h6>
                    <b>{item.date && item.date.trim().split("T")[0]}</b>
                  </h6>
                  <p>{truncateText(item.blog_content, 100)}</p>
                  <button>Read More</button>
                </a>
              );
            })}
          </Slider>
        </div>
        <a className={styles.knowMoreAnchor} href="/blogs">
          Know More
        </a>
      </div>
    </div>
  );
};

export default Blogs;
