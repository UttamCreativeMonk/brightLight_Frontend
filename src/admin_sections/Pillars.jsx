import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let Pillars = () => {
  let [sectionDataSingle, setSectionDataSingle] = useState({
    heading: "",
    description1: "",
    pillar1Heading: "",
    pillar1Description: "",
    pillar2Heading: "",
    pillar2Description: "",
    pillar3Heading: "",
    pillar3Description: "",
  });
  let [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSectionDataSingle({
          ...sectionDataSingle,
          [e.target.name]: reader.result,
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
      `https://brightlight-node.onrender.com/aboutUsPillarsSection/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/aboutUsPillarsSection")
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
        name="description1"
        value={sectionDataSingle.description1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[1, 2, 3].map((num) => (
        <div key={num} className={styles.pillarItem}>
          <input
            placeholder={`Pillar ${num} Heading`}
            name={`pillar${num}Heading`}
            value={sectionDataSingle[`pillar${num}Heading`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder={`Pillar ${num} Description`}
            name={`pillar${num}Description`}
            value={sectionDataSingle[`pillar${num}Description`] || ""}
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

export default Pillars;
