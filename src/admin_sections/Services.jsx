import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let Services = () => {
  let [sectionDataSingle, setSectionDataSingle] = useState({});
  let [editMode, setEditMode] = useState(false);
  let [files, setFiles] = useState({});

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      setFiles({
        ...files,
        [e.target.name]: e.target.files[0],
      });
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

    const formData = new FormData();
    for (let key in sectionDataSingle) {
      formData.append(key, sectionDataSingle[key]);
    }
    for (let key in files) {
      formData.append(key, files[key]);
    }

    fetch(
      `https://brightlight-node.onrender.com/services-section/${sectionDataSingle._id}`,
      {
        method: "PUT",
        body: formData,
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
    fetch("https://brightlight-node.onrender.com/services-section")
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
      <input
        placeholder="Description"
        name="description"
        value={sectionDataSingle.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {[1, 2, 3, 4, 5, 6, 7, 8].map((service, index) => (
        <div key={index}>
          <input
            placeholder={`Service ${service} Name`}
            name={`service${service}name`}
            value={sectionDataSingle[`service${service}name`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`Service ${service} Description`}
            name={`service${service}desc`}
            value={sectionDataSingle[`service${service}desc`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <img
            className={styles.existingImageSmall}
            src={sectionDataSingle[`service${service}svg`]}
          />
          <input
            name={`service${service}svg`}
            type="file"
            accept=".svg"
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
          />
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
          />
        )}
        
      </div>
    </div>
  );
};

export default Services;
