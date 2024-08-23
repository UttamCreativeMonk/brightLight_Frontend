import { useState } from "react";
import styles from "../styles/RecentBlogs.module.css";
import { useEffect } from "react";

let RecentBlogs = () => {
  let [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          let sortedData = data.sort((a, b) => {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            return dateB - dateA;
          });
          if (sortedData) {
            let latestBlogs = sortedData.slice(0, 3);
            setBlogs(latestBlogs);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.recentBlogs}>
      <div className={styles.recentBlogMainSection}>
        <h1>Featured Blogs</h1>
        <div className={styles.blogsGridSection}>
          {blogs.map((item, index) => {
            return (
              <a
                key={index}
                href={`/blogs/${item._id}`}
                className={styles.blogs}
              >
                <img src={item.image} />
                <h4>{item.category}</h4>
                <h2>{item.blog_heading}</h2>
                <p>{item.date}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;