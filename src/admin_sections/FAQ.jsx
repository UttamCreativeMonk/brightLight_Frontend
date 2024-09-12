import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let FAQ = () => {
  let [sectionDataSingle, setSectionDataSingle] = useState({});
  let [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/faq-section/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionDataSingle),
      }
    )
      .then((response) => response.json())
      .then(() => {
        alert("Update Successful");
        setEditMode(false);
      })
      .catch((error) => {
        alert("Update Failed");
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/faq-section")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionDataSingle(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.singleSectionData}>
      <input
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <div key={num} className={styles.faqItem}>
          <input
            placeholder={`Question ${num}`}
            name={`q${num}`}
            value={sectionDataSingle[`q${num}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`Answer ${num}`}
            name={`a${num}`}
            value={sectionDataSingle[`a${num}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}
      <div className={styles.editIcons}>
        {editMode ? (
          <img
            src={update}
            className={styles.updateIcon}
            onClick={handleUpdateClick}
            alt="Update"
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

export default FAQ;
