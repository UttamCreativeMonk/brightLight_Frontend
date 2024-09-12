import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

const AddNews = () => {
  const [sectionDataSingle, setSectionDataSingle] = useState({
    news_heading: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    news_content: "",
    metaTitle: "",
    metaDescription: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSectionDataSingle({
          ...sectionDataSingle,
          [e.target.name]: reader.result, // Convert file to Base64 and store in state
        });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setSectionDataSingle({
        ...sectionDataSingle,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleAddClick = () => {
    // Create a FormData object
    const formData = new FormData();
    Object.keys(sectionDataSingle).forEach((key) => {
      formData.append(key, sectionDataSingle[key]);
    });

    fetch("https://brightlight-node.onrender.com/news", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Add Response:", data);
        alert("Blog Added Successfully");
        setEditMode(false);
        // Optionally clear the form
        setSectionDataSingle({
          news_heading: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          news_content: "",
          metaTitle: "",
          metaDescription: "",
        });
      })
      .catch((error) => {
        console.error("Error adding data:", error);
        alert("Add Failed");
      });
  };

  return (
    <div className={styles.singleSectionData}>
      <input
        placeholder="News Heading"
        name="news_heading"
        value={sectionDataSingle.news_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Tag 1"
        name="tag_1"
        value={sectionDataSingle.tag_1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Tag 2"
        name="tag_2"
        value={sectionDataSingle.tag_2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Tag 3"
        name="tag_3"
        value={sectionDataSingle.tag_3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="News Content"
        name="news_content"
        value={sectionDataSingle.news_content || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Meta Title"
        name="metaTitle"
        value={sectionDataSingle.metaTitle || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Meta Description"
        name="metaDescription"
        value={sectionDataSingle.metaDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        type="file"
        name="image"
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {sectionDataSingle.image && (
        <img
          className={styles.existingImageSmall}
          src={sectionDataSingle.image}
          alt="Preview"
        />
      )}
      <div className={styles.editIcons}>
        {editMode ? (
          <img
            src={update}
            className={styles.updateIcon}
            onClick={handleAddClick}
            alt="Add"
          />
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default AddNews;
