import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let Features = () => {
  let [sectionDataSingle, setSectionDataSingle] = useState({});
  let [editMode, setEditMode] = useState(false);

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

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/features/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionDataSingle),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Update Response:", data);
        alert("Update Successful");
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("Update Failed");
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/features")
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
      {["feature1", "feature2", "feature3", "feature4"].map(
        (feature, index) => (
          <div key={index}>
            <input
              placeholder="Heading"
              name={`${feature}Heading`}
              value={sectionDataSingle[`${feature}Heading`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              placeholder="Description"
              name={`${feature}Description`}
              value={sectionDataSingle[`${feature}Description`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <img
              className={styles.existingImageSmall}
              src={sectionDataSingle[`${feature}SVG`]}
            />
            <input
              name={`${feature}SVG`}
              type="file"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        )
      )}
      <div className={styles.editIcons}>
        {editMode ? (
          <>
            <img
              src={update}
              className={styles.updateIcon}
              onClick={handleUpdateClick}
            />
          </>
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
          />
        )}
        <img src={deleteIcon} />
      </div>
    </div>
  );
};

export default Features;
