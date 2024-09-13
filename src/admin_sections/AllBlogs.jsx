import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { toast, Bounce } from "react-toastify";

const AllBlogs = () => {
  let notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifySize = () => {
    toast.error("Large Image Size Recieved.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyDelete = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }
  const [blogs, setBlogs] = useState([]);
  const [editBlogId, setEditBlogId] = useState(null);
  const [newBlogData, setNewBlogData] = useState({
    blog_heading: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    blog_content: "",
    metaTitle: "",
    metaDescription: "",
  });

  // Fetch all blogs
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/adding-blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setNewBlogData({
      ...newBlogData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewBlogData({
        ...newBlogData,
        image: reader.result, // Convert file to Base64 and store in state
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle edit click
  const handleEditClick = (blog) => {
    setEditBlogId(blog._id);
    setNewBlogData(blog);
  };

  // Handle update click
  const handleUpdateClick = () => {
    if (!editBlogId) {
      console.error("No ID found for update.");
      return;
    }

    fetch(`https://brightlight-node.onrender.com/adding-blog/${editBlogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlogData),
    })
    .then((response) => {
      if (response.status === 413) {
        notifySize();
        throw new Error("Payload too large");
      } else if (!response.ok) {
        notifyError();
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
      .then(() => {
        notifySuccess();
        setEditBlogId(null);
        setNewBlogData({
          blog_heading: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          blog_content: "",
          metaTitle: "",
          metaDescription: "",
        });
        // Refetch blogs
        fetch("https://brightlight-node.onrender.com/adding-blog")
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      })
      .catch((error) => {
        notifyError();
      });
  };

  // Handle delete click
  const handleDeleteClick = (blogId) => {
    fetch(`https://brightlight-node.onrender.com/adding-blog/${blogId}`, {
      method: "DELETE",
    })
      .then(() => {
        notifyDelete();
        fetch("https://brightlight-node.onrender.com/adding-blog")
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      })
      .catch((error) => {
        notifyError()
      });
  };

  return (
    <div className={styles.blogList}>
      {blogs.length === 0 ? (
        <p className={styles.noBlogsPara}>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className={styles.blogItem}>
            <div className={styles.blogContent}>
              <h4>{blog.blog_heading}</h4>
              <img
                src={blog.image}
                alt="Blog"
                className={styles.blogImage}
              />
              <div className={styles.editIcons}>
                {editBlogId === blog._id ? (
                  <>
                    <img
                      src={update}
                      className={styles.updateIcon}
                      onClick={handleUpdateClick}
                      alt="Update"
                    />
                    <img
                      src={editIcon}
                      className={styles.editIcon}
                      onClick={() => setEditBlogId(null)}
                      alt="Cancel Edit"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={editIcon}
                      className={styles.editIcon}
                      onClick={() => handleEditClick(blog)}
                      alt="Edit"
                    />
                    <img
                      src={deleteIcon}
                      className={styles.deleteIcon}
                      onClick={() => handleDeleteClick(blog._id)}
                      alt="Delete"
                    />
                  </>
                )}
              </div>
            </div>
            {editBlogId === blog._id && (
              <div className={styles.editForm}>
                <input
                  placeholder="Blog Heading"
                  name="blog_heading"
                  value={newBlogData.blog_heading}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {newBlogData.image && (
                  <img
                    src={newBlogData.image}
                    alt="New Blog"
                    className={styles.blogImage}
                  />
                )}
                <input
                  placeholder="Tag 1"
                  name="tag_1"
                  value={newBlogData.tag_1}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Tag 2"
                  name="tag_2"
                  value={newBlogData.tag_2}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Tag 3"
                  name="tag_3"
                  value={newBlogData.tag_3}
                  onChange={handleInputChange}
                />
                <textarea
                  placeholder="Blog Content"
                  name="blog_content"
                  value={newBlogData.blog_content}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Meta Title"
                  name="metaTitle"
                  value={newBlogData.metaTitle}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Meta Description"
                  name="metaDescription"
                  value={newBlogData.metaDescription}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllBlogs;
