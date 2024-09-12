import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";

let SocialMedia = () => {
  let [sectionDataSingle, setSectionDataSingle] = useState({});
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
      `https://brightlight-node.onrender.com/aboutUsSocialPresenceSection/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/aboutUsSocialPresenceSection")
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
        placeholder="Description 1"
        name="description1"
        value={sectionDataSingle.description1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 2"
        name="description2"
        value={sectionDataSingle.description2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Find Us On Heading"
        name="findUsOnHeading"
        value={sectionDataSingle.findUsOnHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Instagram Link"
        name="instagramLink"
        value={sectionDataSingle.instagramLink || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="YouTube Link"
        name="youtubeLink"
        value={sectionDataSingle.youtubeLink || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Facebook Link"
        name="facebookLink"
        value={sectionDataSingle.facebookLink || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Google Maps Link"
        name="googleMapsLink"
        value={sectionDataSingle.googleMapsLink || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
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

export default SocialMedia;
