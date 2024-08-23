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
    fetch("https://brightlight-node.onrender.com/blogs")
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
    slidesToScroll: 1,
  };
  return (
    <div className={styles.blogs}>
      <div className={styles.blogsParent}>
        <div className={styles.blogsTopSection}>
          <img src={brightBlogs} />
          <div>
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
              let truncateText = (text, numWords) => {
                let words = text.split(" ");
                if (words.length <= numWords) return text;
                return words.slice(0, numWords).join(" ") + "...";
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
                  <h6>{item.date}</h6>
                  <p>{truncateText(item.blog_description_para_1, 20)}</p>
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