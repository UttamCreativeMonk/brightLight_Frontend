
import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let MemberOf = () => {
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
      `https://brightlight-node.onrender.com/member-of/${sectionDataSingle._id}`,
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
        console.log('Update Response:', data);
        alert("Update Successful");
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("Update Failed");
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/member-of")
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
      {/* Form fields for editing */}
      {[1, 2, 3].map((num) => (
        <div key={num}>
          <input
            placeholder={`Heading ${num}`}
            name={`heading${num}`}
            value={sectionDataSingle[`heading${num}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <img
            className={styles.existingImageSmall}
            src={sectionDataSingle[`heading${num}Img`]}
          />
          <input
            name={`heading${num}Img`}
            type="file"
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}
      <div className={styles.editIcons}>
        {editMode ? (
          <>
            <img
              src={update}
              className={styles.updateIcon}
              onClick={handleUpdateClick}
              alt="Update"
            />
          </>
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        )}
        <img src={deleteIcon} alt="Delete" />
      </div>
    </div>
  );
};

export default MemberOf;