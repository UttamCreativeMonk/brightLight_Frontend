import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const HealthAuthoritiesStreamContent = () => {
  const notifySuccess = () => {
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

  const notifyError = () => {
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

  const notifySize = () => {
    toast.error("Large Image Size Received.", {
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

  const [sectionDataSingle, setSectionDataSingle] = useState({
    Heading: "",
    Description: "",

    topSectionNote: "",

    BenifitsHeading: "",
    BenifitsList1: "",
    BenifitsList2: "",
    BenifitsList3: "",
    BenifitsList4: "",
    BenifitsList5: "",

    EligibilityHeading: "",
    EligibilitySubHead: "",
    EligibilityList1: "",
    EligibilityList1NestedList1: "",
    EligibilityList1NestedList2: "",
    EligibilityList1NestedList3: "",
    EligibilityList1NestedList4: "",
    EligibilityList1NestedList5: "",
    EligibilityList1NestedList6: "",
    EligibilityList1NestedList7: "",
    EligibilityList1NestedList8: "",
    EligibilityList1Point2: "",

    EligibilityList2: "",
    EligibilityList2NestedList1: "",
    EligibilityList3: "",
    EligibilityList3NestedList1: "",
    EligibilityList4: "",
    EligibilityList4NestedList1: "",
    EligibilityList4NestedList2: "",
    EligibilityList5: "",
    EligibilityList5NestedList1: "",

    ExpEntryOptionHeading: "",
    ExpEntryOptionPara1: "",
    ExpEntryOptionPara2: "",

    ApplyHeading: "",
    ApplyList1: "",
    ApplyList2: "",
    ApplyList3: "",
    ApplyList4: "",
    ApplyList5: "",
    ApplyList6: "",
    ApplyList7: "",

    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
  });

  const [editMode, setEditMode] = useState(false);

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
      `https://brightlight-node.onrender.com/health-authority-stream/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionDataSingle),
      }
    )
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
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/health-authority-stream")
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
      <ToastContainer />

      <input
        placeholder="Heading"
        name="Heading"
        value={sectionDataSingle.Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Description"
        name="Description"
        value={sectionDataSingle.Description}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Top Section Note"
        name="topSectionNote"
        value={sectionDataSingle.topSectionNote}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits Heading"
        name="BenifitsHeading"
        value={sectionDataSingle.BenifitsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 1"
        name="BenifitsList1"
        value={sectionDataSingle.BenifitsList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 2"
        name="BenifitsList2"
        value={sectionDataSingle.BenifitsList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 3"
        name="BenifitsList3"
        value={sectionDataSingle.BenifitsList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 4"
        name="BenifitsList4"
        value={sectionDataSingle.BenifitsList4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 5"
        name="BenifitsList5"
        value={sectionDataSingle.BenifitsList5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Sub Head"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1"
        name="EligibilityList1"
        value={sectionDataSingle.EligibilityList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2"
        name="EligibilityList2"
        value={sectionDataSingle.EligibilityList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List"
        name="EligibilityList2NestedList1"
        value={sectionDataSingle.EligibilityList2NestedList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 3"
        name="EligibilityList3"
        value={sectionDataSingle.EligibilityList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 3 Nested List"
        name="EligibilityList3NestedList1"
        value={sectionDataSingle.EligibilityList3NestedList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 4"
        name="EligibilityList4"
        value={sectionDataSingle.EligibilityList4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 4 Nested List 1"
        name="EligibilityList4NestedList1"
        value={sectionDataSingle.EligibilityList4NestedList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 4 Nested List 2"
        name="EligibilityList4NestedList2"
        value={sectionDataSingle.EligibilityList4NestedList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 5"
        name="EligibilityList5"
        value={sectionDataSingle.EligibilityList5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 5 Nested List"
        name="EligibilityList5NestedList1"
        value={sectionDataSingle.EligibilityList5NestedList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Express Entr yOption Heading"
        name="ExpEntryOptionHeading"
        value={sectionDataSingle.ExpEntryOptionHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Express Entry Option Paragraph 1"
        name="ExpEntryOptionPara1"
        value={sectionDataSingle.ExpEntryOptionPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Express Entry Option Paragraph 2"
        name="ExpEntryOptionPara2"
        value={sectionDataSingle.ExpEntryOptionPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Heading"
        name="ApplyHeading"
        value={sectionDataSingle.ApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 1"
        name="ApplyList1"
        value={sectionDataSingle.ApplyList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 1"
        name="ApplyList1"
        value={sectionDataSingle.ApplyList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 2"
        name="ApplyList2"
        value={sectionDataSingle.ApplyList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 3"
        name="ApplyList3"
        value={sectionDataSingle.ApplyList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 4"
        name="ApplyList4"
        value={sectionDataSingle.ApplyList4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 5"
        name="ApplyList5"
        value={sectionDataSingle.ApplyList5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 6"
        name="ApplyList6"
        value={sectionDataSingle.ApplyList6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply List 7"
        name="ApplyList7"
        value={sectionDataSingle.ApplyList7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure Para 1"
        name="StillNotSurePara1"
        value={sectionDataSingle.StillNotSurePara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure Para 1"
        name="StillNotSurePara2"
        value={sectionDataSingle.StillNotSurePara2}
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

export default HealthAuthoritiesStreamContent;