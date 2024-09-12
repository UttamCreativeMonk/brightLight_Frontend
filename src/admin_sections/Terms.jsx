import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let Terms = () => {
  let [sectionDataSingle, setSectionDataSingle] = useState({
    heading: "",
    description: "",
    subHeading1: "",
    subHeadingDescription1: "",
    subHeading2: "",
    subHeadingDescription2: "",
    subHeading3: "",
    subHeadingDescription3: "",
    subHeading4: "",
    subHeadingDescription4: "",
    subHeading5: "",
    subHeadingDescription5: "",
    subHeading6: "",
    subHeadingDescription6: "",
    subHeading7: "",
    subHeadingDescription7: "",
    subHeading8: "",
    subHeadingDescription8: "",
    subHeading9: "",
    subHeadingDescription9: "",
    subHeading10: "",
    subHeadingDescription10: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/terms-conditions/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/terms-conditions")
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
      <textarea
        placeholder="Description"
        name="description"
        value={sectionDataSingle.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i}>
          <input
            placeholder={`Sub Heading ${i + 1}`}
            name={`subHeading${i + 1}`}
            value={sectionDataSingle[`subHeading${i + 1}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder={`Sub Heading ${i + 1} Description`}
            name={`subHeadingDescription${i + 1}`}
            value={sectionDataSingle[`subHeadingDescription${i + 1}`] || ""}
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

export default Terms;
