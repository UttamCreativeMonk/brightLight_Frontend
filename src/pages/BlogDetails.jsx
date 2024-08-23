import { useParams } from "react-router-dom";
import styles from "../styles/BlogsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Linkedin from "../assets/bannerLinkedinLogo.png";
import rcic from "../assets/rcic.png";
import searchIcon from "../assets/search-gray.png";

let BlogDetails = () => {
  let { id } = useParams();
  let [blog, setBlog] = useState([]);
  let [loveneetData, setLoveneetData] = useState([]);
  let [recentBlogs, setRecentBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://brightlight-node.onrender.com/blogs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBlog(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/loveneet")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setLoveneetData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/blogs/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let recentBlogsFilteredData = data.filter((item) => {
          return item._id != id;
        });
        if (recentBlogsFilteredData) {
          setRecentBlogs(recentBlogsFilteredData);
        }
      });
  }, []);
  return (
    <>
      <Navbar1 />
      <div className={styles.blogTopSection}>
        <div className={styles.blogsTopContentSection}>
          <h1>{blog.blog_heading}</h1>
          <div className={styles.topFlexSection}>
            <h4>{blog.category}</h4>
            <p>|</p>
            <h4>{blog.date}</h4>
          </div>
          <div className={styles.loveneetSection}>
            <img src={loveneetData.image} className={styles.loveneetImage} />
            <div className={styles.loveneetContent}>
              <div className={styles.loveneetDataFlex}>
                <h3>By {loveneetData.name}</h3>
                <p>|</p>
                <h5>{loveneetData.post}</h5>
              </div>
              <h4>{loveneetData.tagline}</h4>
              <div className={styles.loveneetLinks}>
                <a className={styles.imageSection} href={loveneetData.linkedin}>
                  <img src={Linkedin} />
                </a>
                <div>
                  <p>Have Questions ?</p>
                  <a className={styles.imageSection} href={loveneetData.rcic}>
                    <img src={rcic} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blogsFlexSection}>
        <div className={styles.blogImgSection}>
          <img src={blog.image} />
        </div>
        <div className={styles.blogSearchSection}>
          <div className={styles.searchDiv}>
            <input placeholder="Search Blogs" />
            <img src={searchIcon} />
          </div>
          {recentBlogs ? (
            <div className={styles.recentBlogsSection}>
              <h4>Recent Blogs</h4>
              {recentBlogs?.map((item, index) => {
                return (
                  <a
                    href={`/blogs/${item._id}`}
                    key={index}
                    style={{ backgroundImage: `url(${item.image}) `}}
                    className={styles.recentBlog}
                  >
                    <h3>{item.blog_heading}</h3>
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.blogDescriptionSection}>
        {blog.blog_description_para_1 ? (
          <p>{blog.blog_description_para_1}</p>
        ) : null}
        {blog.blog_description_para_2 ? (
          <p>{blog.blog_description_para_2}</p>
        ) : null}
        {blog.blog_description_para_3 ? (
          <p>{blog.blog_description_para_3}</p>
        ) : null}
        {blog.blog_description_para_4 ? (
          <p>{blog.blog_description_para_4}</p>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;