import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let WeAreSmall = () => {
  const [sectionDataSingle, setSectionDataSingle] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setImageFile(e.target.files[0]);
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
    formData.append("file", imageFile);

    fetch(
      `https://brightlight-node.onrender.com/we-are/${sectionDataSingle._id}`,
      {
        method: "PUT",
        body: formData,
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

  const handleDeleteClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for delete.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/weAreSmall/${sectionDataSingle._id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then(() => {
        alert("Delete Successful");
        setSectionDataSingle({});
      })
      .catch((error) => {
        alert("Delete Failed");
        console.error("Error deleting data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/weAreSmall")
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
      <img className={styles.existingImage} src={sectionDataSingle.image} />
      {editMode ? (
        <>
          <input name="img" type="file" onChange={handleInputChange} />
          <div className={styles.editIcons}>
            <img
              src={update}
              className={styles.updateIcon}
              onClick={handleUpdateClick}
              alt="Update"
            />
            <img
              src={deleteIcon}
              className={styles.deleteIcon}
              onClick={handleDeleteClick}
              alt="Delete"
            />
          </div>
        </>
      ) : (
        <div className={styles.editIcons}>
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        </div>
      )}
    </div>
  );
};

export default WeAreSmall;