import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const FederalSkilledWorkerProgramContent = () => {
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
    WorkProgHeading: "",
    WorkProgPara1: "",
    WorkProgPara2: "",

    EligibilityHeading: "",
    EligPara: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",

    EligTableHeading: "",
    EligTableHead1: "",
    EligTable1HeadLi1: "",
    EligTable1HeadLi2: "",
    EligTable1HeadLi3: "",
    EligTable1HeadLi4: "",
    EligTable1HeadLi5: "",
    EligTable1HeadLi6: "",

    EligTableHead2: "",
    EligTable2HeadLi1: "",
    EligTable2HeadLi2: "",
    EligTable2HeadLi3: "",
    EligTable2HeadLi4: "",
    EligTable2HeadLi5: "",
    EligTable2HeadLi6: "",

    EligTableHead3: "",
    EligTable3HeadLi1: "",
    EligTable3HeadLi2: "",
    EligTable3HeadLi3: "",
    EligTable3HeadLi4: "",
    EligTable3HeadLi5: "",
    EligTable3HeadLi6: "",

    EligLastPara: "",

    AssessmentHeading: "",
    AssessmentPara: "",

    ExpressEntryHead: "",

    HowToApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",
    ha6: "",

    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",

    StillNotSureHeading: "",
    s1: "",
    s2: "",

    WhyChooseUsHeading: "",
    WhyChooseUsPara: "",
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
      `https://brightlight-node.onrender.com/federalSkilledWorkerProgam/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/federalSkilledWorkerProgam")
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
        placeholder="Work Program Heading"
        name="WorkProgHeading"
        value={sectionDataSingle.WorkProgHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Program Detail 1"
        name="WorkProgPara1"
        value={sectionDataSingle.WorkProgPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Program Detail 2"
        name="WorkProgPara2"
        value={sectionDataSingle.WorkProgPara2}
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
        placeholder="Eligibility Paragraph"
        name="EligPara"
        value={sectionDataSingle.EligPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 1"
        name="e1"
        value={sectionDataSingle.e1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 2"
        name="e2"
        value={sectionDataSingle.e2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 3"
        name="e3"
        value={sectionDataSingle.e3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 4"
        name="e4"
        value={sectionDataSingle.e4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Table Heading"
        name="EligTableHeading"
        value={sectionDataSingle.EligTableHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 1"
        name="EligTable1HeadLi1"
        value={sectionDataSingle.EligTable1HeadLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 2"
        name="EligTable1HeadLi2"
        value={sectionDataSingle.EligTable1HeadLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 3"
        name="EligTable1HeadLi3"
        value={sectionDataSingle.EligTable1HeadLi3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 4"
        name="EligTable1HeadLi4"
        value={sectionDataSingle.EligTable1HeadLi4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 5"
        name="EligTable1HeadLi5"
        value={sectionDataSingle.EligTable1HeadLi5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 6"
        name="EligTable1HeadLi6"
        value={sectionDataSingle.EligTable1HeadLi6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Table Heading 2"
        name="EligTableHead2"
        value={sectionDataSingle.EligTableHead2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 1"
        name="EligTable2HeadLi1"
        value={sectionDataSingle.EligTable2HeadLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 2"
        name="EligTable2HeadLi2"
        value={sectionDataSingle.EligTable2HeadLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 3"
        name="EligTable2HeadLi3"
        value={sectionDataSingle.EligTable2HeadLi3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 4"
        name="EligTable2HeadLi4"
        value={sectionDataSingle.EligTable2HeadLi4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 5"
        name="EligTable2HeadLi5"
        value={sectionDataSingle.EligTable2HeadLi5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 6"
        name="EligTable2HeadLi6"
        value={sectionDataSingle.EligTable2HeadLi6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Table Heading 3"
        name="EligTableHead3"
        value={sectionDataSingle.EligTableHead3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 1"
        name="EligTable3HeadLi1"
        value={sectionDataSingle.EligTable3HeadLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 2"
        name="EligTable3HeadLi2"
        value={sectionDataSingle.EligTable3HeadLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 3"
        name="EligTable3HeadLi3"
        value={sectionDataSingle.EligTable3HeadLi3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 4"
        name="EligTable3HeadLi4"
        value={sectionDataSingle.EligTable3HeadLi4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 5"
        name="EligTable3HeadLi5"
        value={sectionDataSingle.EligTable3HeadLi5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 6"
        name="EligTable3HeadLi6"
        value={sectionDataSingle.EligTable3HeadLi6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Last Paragraph"
        name="EligLastPara"
        value={sectionDataSingle.EligLastPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Last Paragraph"
        name="EligLastPara"
        value={sectionDataSingle.EligLastPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Assessment Heading"
        name="AssessmentHeading"
        value={sectionDataSingle.AssessmentHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Assessment Details"
        name="AssessmentPara"
        value={sectionDataSingle.AssessmentPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Express Entry Heading"
        name="ExpressEntryHead"
        value={sectionDataSingle.ExpressEntryHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowToApplyHeading"
        value={sectionDataSingle.HowToApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 1"
        name="ha1"
        value={sectionDataSingle.ha1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 2"
        name="ha2"
        value={sectionDataSingle.ha2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 3"
        name="ha3"
        value={sectionDataSingle.ha3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 4"
        name="ha4"
        value={sectionDataSingle.ha4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 5"
        name="ha5"
        value={sectionDataSingle.ha5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 6"
        name="ha6"
        value={sectionDataSingle.ha6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 1"
        name="r1"
        value={sectionDataSingle.r1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 2"
        name="r2"
        value={sectionDataSingle.r2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 3"
        name="r3"
        value={sectionDataSingle.r3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 4"
        name="r4"
        value={sectionDataSingle.r4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 5"
        name="r5"
        value={sectionDataSingle.r5}
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
        placeholder="Still Not Sure Detail 1"
        name="s1"
        value={sectionDataSingle.s1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure Detail 2"
        name="s2"
        value={sectionDataSingle.s2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading"
        value={sectionDataSingle.WhyChooseUsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Para"
        name="WhyChooseUsPara"
        value={sectionDataSingle.WhyChooseUsPara}
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

export default FederalSkilledWorkerProgramContent;
