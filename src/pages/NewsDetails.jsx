import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/NewsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Linkedin from "../assets/bannerLinkedinLogo.png";
import rcic from "../assets/rcic.png";
import searchIcon from "../assets/search-gray.png";

let NewsDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [blog, setBlog] = useState([]);
  let [loveneetData, setLoveneetData] = useState([]);
  let [recentBlogs, setRecentBlogs] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://brightlight-node.onrender.com/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBlog(data);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/loveneet")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoveneetData(data[0]);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/news/")
      .then((res) => res.json())
      .then((data) => {
        let recentBlogsFilteredData = data.filter((item) => item._id != id);
        if (recentBlogsFilteredData) {
          setRecentBlogs(recentBlogsFilteredData.slice(0, 3));
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  let handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(`/news?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Navbar1 />
      <div className={styles.blogTopSection}>
        <div className={styles.blogsTopContentSection}>
          <h1>{blog.news_heading}</h1>
          <div className={styles.loveneetSection}>
            <img src={loveneetData.image} className={styles.loveneetImage} />
            <div className={styles.loveneetContent}>
              <div className={styles.loveneetDataFlex}>
                <h3>By {loveneetData.name}</h3>
                <h5>{loveneetData.post}</h5>
              </div>
              <h4>{loveneetData.tagline}</h4>
              <div className={styles.loveneetLinks}>
                <a className={styles.imageSection} href={loveneetData.linkedin}>
                  <img src={Linkedin} />
                </a>
                <div>
                  <p className={styles.haveAQuestion}>Have Questions?</p>
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
            <input
              placeholder="Search News"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img
              src={searchIcon}
              onClick={handleSearchClick}
              className={styles.searchIcon}
              alt="Search"
            />
          </div>
          <div className={styles.blogTagsSection}>
            {blog.tag_1 && <p>{blog.tag_1}</p>}
            {blog.tag_2 && <p>{blog.tag_2}</p>}
            {blog.tag_3 && <p>{blog.tag_3}</p>}
          </div>
          {recentBlogs ? (
            <div className={styles.recentBlogsSection}>
              <h4>Recent News</h4>
              {recentBlogs?.map((item, index) => (
                <a
                  href={`/news/${item._id}`}
                  key={index}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={styles.recentBlog}
                >
                  <h3>{item.news_heading}</h3>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.blogDescriptionSection}>
        {blog.news_content ? (
          <div dangerouslySetInnerHTML={{ __html: blog.news_content }} />
        ) : null}
      </div>
      <Footer1 />
    </>
  );
};

export default NewsDetails;
