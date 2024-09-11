import React, { useState, useEffect } from 'react';
import Footer1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';
import styles from '../styles/Search.module.css';

const stripHtmlTags = (text) => (text ? text.replace(/<[^>]*>/g, '') : '');

const truncateText = (text, numChars) => {
  let cleanedText = stripHtmlTags(text);
  if (cleanedText.length <= numChars) return cleanedText;
  return cleanedText.slice(0, numChars) + '...';
};

const truncateDescription = (description, wordLimit = 30) => {
  const words = description.split(' ');
  if (words.length <= wordLimit) {
    return description;
  }
  return words.slice(0, wordLimit).join(' ') + '...'; // Append ellipsis
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [servicesData, setServicesData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryValue = queryParams.get('q') || '';
    setQuery(queryValue);

    const fetchData = async () => {
      try {
        // Fetch and filter services
        const servicesRes = await fetch('https://brightlight-node.onrender.com/services-section');
        const services = await servicesRes.json();
        const filteredServices = [];
        if (services[0]) {
          for (let i = 1; i <= 7; i++) {
            const serviceName = services[0][`service${i}name`];
            const serviceDesc = services[0][`service${i}desc`];
            if (serviceName) {
              filteredServices.push({
                name: serviceName,
                description: serviceDesc,
              });
            }
          }
        }
        setServicesData(filteredServices.filter(item => item.name.toLowerCase().includes(queryValue.toLowerCase())));

        // Fetch and filter blogs
        const blogsRes = await fetch('https://brightlight-node.onrender.com/adding-blog');
        const blogs = await blogsRes.json();
        setBlogsData(blogs.filter(item => item.blog_heading.toLowerCase().includes(queryValue.toLowerCase())));

        // Fetch and filter news
        const newsRes = await fetch('https://brightlight-node.onrender.com/news');
        const news = await newsRes.json();
        setNewsData(news.filter(item => item.news_heading.toLowerCase().includes(queryValue.toLowerCase())));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const hasResults = servicesData.length > 0 || blogsData.length > 0 || newsData.length > 0;

  return (
    <>
      <Navbar1 showBlue={true} />
      <div className={styles.searchPage}>
        <h1 className={styles.topHeading}>
          Searched Result For: <span className={styles.boldText}>"{query}"</span>
        </h1>

        {hasResults ? (
          <>
            {servicesData.length > 0 && (
              <div className={styles.servicesSection}>
                <h2>Services</h2>
                <div className={styles.servicesGridSection}>
                  {servicesData.map((item, index) => (
                    <div key={index}>
                      {item.name && <h3>{item.name}</h3>}
                      {item.description && <p>{truncateDescription(item.description)}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {blogsData.length > 0 && (
              <div className={styles.blogsSection}>
                <h2 className={styles.sectionHeading}>Blogs</h2>
                <div className={styles.blogsGridSection}>
                  {blogsData.map((item, index) => (
                    <a key={index} href={`/blogs/${item._id}`}>
                      {item.image && <img src={item.image} alt="Blog" />}
                      {item.blog_heading && <h3>{item.blog_heading}</h3>}
                      {item.blog_content && <p>{truncateText(item.blog_content, 100)}</p>}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {newsData.length > 0 && (
              <div className={styles.newsSection}>
                <h2 className={styles.sectionHeading}>News</h2>
                <div className={styles.newsGridSection}>
                  {newsData.map((item, index) => (
                    <a key={index} href={`/news/${item._id}`}>
                      {item.image && <img src={item.image} alt="News" />}
                      {item.news_heading && <h3>{item.news_heading}</h3>}
                      {item.news_content && <p>{truncateText(item.news_content, 100)}</p>}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={styles.noResults}>
            <h2>No results found. Try searching for something different.</h2>
          </div>
        )}
      </div>
      <Footer1 />
    </>
  );
};

export default Search;
