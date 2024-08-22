import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import styles from "../styles/BlogsPage.module.css";
import brightSource from "../assets/bright-source-blue.png";
import paperPlane from "../assets/paperplane.png";
import { ReactComponent as Search } from "../assets/search-white.svg";
import { useEffect, useState } from "react";
import subscribe from "../assets/subscribe.jpg";

let Blogs = () => {
  let quickLinks = [
    {
      title: "Lorem Quick Link Heading for blogs section on blogs page 1",
      date: "AUG 29, 2024",
      link: "abc.com",
    },
    {
      title: "Lorem Quick Link Heading for blogs section on blogs page 1",
      date: "AUG 29, 2024",
      link: "abc.com",
    },
    {
      title: "Lorem Quick Link Heading for blogs section on blogs page 1",
      date: "AUG 29, 2024",
      link: "abc.com",
    },
  ];
  let [firstBlog, setFirstBlog] = useState([]);
  let [remainingBlogs, setRemainingBlogs] = useState([]);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          let lastItem = data[data.length - 1];
          setFirstBlog(lastItem);

          let remainingItems = data.slice(0, -1);
          setRemainingBlogs(remainingItems);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar1 showBlue={true} />
      <div className={styles.blogsTopSection}>
        <img src={brightSource} />
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          corporis sit repudiandae nostrum ipsum saepe fugit possimus eos
          doloribus? Ad iusto quis voluptates nobis veritatis perferendis libero
          sint velit? Excepturi dignissimos, beatae debitis velit unde dicta
          repellat quia officia fugit quidem? Debitis dolores doloribus cumque
          blanditiis nesciunt ullam quibusdam asperiores.
        </h3>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.searchInputSection}>
          <input placeholder="Search News" />
          <div className={styles.searchRightSection}>
            <p>Clear X</p>
            <div>
              <Search width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={styles.searchBottomNavigationSection}>
          <p>Displaying 1-10 results out of 3491 for Permanent Residency</p>
          <div>
            <p>Sort By | Newest | Relevance</p>
          </div>
        </div>
      </div>
      {firstBlog ? (
        <div className={styles.firstBlog}>
          <div className={styles.firstBlogContentSection}>
            <h4>{firstBlog.date}</h4>
            <h1>{firstBlog.blog_heading}</h1>
            <a href={`/blogs/${firstBlog.blog_heading}`}>Read More</a>
          </div>
          <div>
            <img src={firstBlog.image} />
          </div>
        </div>
      ) : null}
      <div className={styles.blogsResultSection}>
        <div className={styles.blogsGridSection}>
          {remainingBlogs?.map((item, index) => {
            let truncateText = (text, numWords) => {
              let words = text.split(" ");
              if (words.length <= numWords) return text;
              return words.slice(0, numWords).join(" ") + "...";
            };
            return (
              <a
                key={index}
                className={styles.blog}
                href={`/blogs/${item.blog_heading}`}
              >
                <img src={item.image} />
                <div>
                  <h4>{item.category}</h4>
                  <h4>{item.date}</h4>
                </div>
                <h1>{item.blog_heading}</h1>
                <p>{truncateText(item.blog_description_para_1, 20)}</p>
              </a>
            );
          })}
        </div>
        <div className={styles.rightSection}>
          <div className={styles.subscribeSection}>
            <img className={styles.plane} src={paperPlane} />
            <h3>Get the latest News Delivered to your mail!</h3>
            <img src={subscribe} className={styles.subscribe} />
          </div>
          <div className={styles.quickLinksSection}>
            <h3>Quick Links</h3>
            {quickLinks?.map((item, index) => {
              return (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                  <a href={`/blogs/${item.link}`}>Read more</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;