import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const GlobalStreamLMIAContent = () => {
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
    GTSHeading: "",
    GTSDescription: "",

    GTSBenefitsHeading: "",
    GTSBenefitsList1: "",
    GTSBenefitsList2: "",
    GTSBenefitsList3: "",
    GTSBenefitsList4: "",

    GTSEligibilityHeading: "",
    GTSEligibilitySubHeading1: "",
    GTSEligibilitySubHeading2: "",

    GTSCategoryAPreviewHeading: "",
    GTSCategoryBPreviewHeading: "",

    GTSCategoryAHeading: "",
    GTSCategoryADescription: "",
    GTSCategoryAList2: "",
    GTSCategoryAList3: "",
    GTSCategoryAList4: "",

    GTSCategoryBHeading: "",
    GTSCategoryBDescription: "",
    GTSCategoryBTableHeading: "",

    GSTCategoryBInnerHeading1: "",
    GSTCategoryBInnerHeading2: "",

    GSTCategoryBINoc1: "",
    GSTCategoryBINoc2: "",
    GSTCategoryBINoc3: "",
    GSTCategoryBINoc4: "",
    GSTCategoryBINoc5: "",
    GSTCategoryBINoc6: "",
    GSTCategoryBINoc7: "",
    GSTCategoryBINoc8: "",
    GSTCategoryBINoc9: "",
    GSTCategoryBINoc10: "",
    GSTCategoryBINoc11: "",
    GSTCategoryBINoc12: "",
    GSTCategoryBINoc13: "",
    GSTCategoryBINoc14: "",
    GSTCategoryBINoc15: "",
    GSTCategoryBINoc16: "",
    GSTCategoryBINoc17: "",
    GSTCategoryBINoc18: "",
    GSTCategoryBINoc19: "",
    GSTCategoryBINoc20: "",
    GSTCategoryBINoc21: "",
    GSTCategoryBINoc22: "",

    GSTCategoryBIJob1: "",
    GSTCategoryBIJob2: "",
    GSTCategoryBIJob3: "",
    GSTCategoryBIJob4: "",
    GSTCategoryBIJob5: "",
    GSTCategoryBIJob6: "",
    GSTCategoryBIJob7: "",
    GSTCategoryBIJob8: "",
    GSTCategoryBIJob9: "",
    GSTCategoryBIJob10: "",
    GSTCategoryBIJob11: "",
    GSTCategoryBIJob12: "",
    GSTCategoryBIJob13: "",
    GSTCategoryBIJob14: "",
    GSTCategoryBIJob15: "",
    GSTCategoryBIJob16: "",
    GSTCategoryBIJob17: "",
    GSTCategoryBIJob18: "",
    GSTCategoryBIJob19: "",
    GSTCategoryBIJob20: "",
    GSTCategoryBIJob21: "",
    GSTCategoryBIJob22: "",

    LMBPHeading: "",
    LMBPDescription: "",
    LMBPHListIntro1: "",
    LMBPList1: "",
    LMBPList2: "",
    LMBPHListIntro2: "",
    LMBPExList1: "",
    LMBPExList2: "",
    LMBPExList3: "",
    LMBPExList4: "",
    LMBPExList5: "",
    LMBPExList6: "",
    LMBPExList7: "",
    LMBPExList8: "",
    LMBPExList9: "",

    HowToApplyHeading: "",
    HowToApplyList1: "",
    HowToApplyList2: "",
    HowToApplyList3: "",
    HowToApplyList4: "",
    HowToApplyList5: "",
    HowToApplyList6: "",
    HowToApplyList7: "",
    HowToApplyPara: "",

    RefusalHeading: "",
    Refusallist1: "",
    Refusallist2: "",
    Refusallist3: "",
    Refusallist4: "",
    Refusallist5: "",

    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
    StillNotSurePara3: "",

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
      `https://brightlight-node.onrender.com/globalStreamLmia/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/globalStreamLmia")
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
        placeholder="Global Talent Stream (GTS) Heading"
        name="GTSHeading"
        value={sectionDataSingle.GTSHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Global Talent Stream Description"
        name="GTSDescription"
        value={sectionDataSingle.GTSDescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="GTSBenefitsHeading"
        value={sectionDataSingle.GTSBenefitsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit List 1"
        name="GTSBenefitsList1"
        value={sectionDataSingle.GTSBenefitsList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit List 2"
        name="GTSBenefitsList2"
        value={sectionDataSingle.GTSBenefitsList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit List 3"
        name="GTSBenefitsList3"
        value={sectionDataSingle.GTSBenefitsList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit List 4"
        name="GTSBenefitsList4"
        value={sectionDataSingle.GTSBenefitsList4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="GTSEligibilityHeading"
        value={sectionDataSingle.GTSEligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Subheading 1"
        name="GTSEligibilitySubHeading1"
        value={sectionDataSingle.GTSEligibilitySubHeading1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Subheading 2"
        name="GTSEligibilitySubHeading2"
        value={sectionDataSingle.GTSEligibilitySubHeading2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="GTS Category A Preview Heading"
        name="GTSCategoryAPreviewHeading"
        value={sectionDataSingle.GTSCategoryAPreviewHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="GTS Category B Preview Heading"
        name="GTSCategoryBPreviewHeading"
        value={sectionDataSingle.GTSCategoryBPreviewHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="GTS Category A Heading"
        name="GTSCategoryAHeading"
        value={sectionDataSingle.GTSCategoryAHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="GTS Category A Description"
        name="GTSCategoryADescription"
        value={sectionDataSingle.GTSCategoryADescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="GTS Category A List 2"
        name="GTSCategoryAList2"
        value={sectionDataSingle.GTSCategoryAList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="GTS Category A List 3"
        name="GTSCategoryAList3"
        value={sectionDataSingle.GTSCategoryAList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="GTS Category A List 4"
        name="GTSCategoryAList4"
        value={sectionDataSingle.GTSCategoryAList4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="GTS Category B Heading"
        name="GTSCategoryBHeading"
        value={sectionDataSingle.GTSCategoryBHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="GTS Category B Description"
        name="GTSCategoryBDescription"
        value={sectionDataSingle.GTSCategoryBDescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="GTS Category B Table Heading"
        name="GTSCategoryBTableHeading"
        value={sectionDataSingle.GTSCategoryBTableHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Category B Inner Heading 1"
        name="GSTCategoryBInnerHeading1"
        value={sectionDataSingle.GSTCategoryBInnerHeading1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Category B Inner Heading 2"
        name="GSTCategoryBInnerHeading2"
        value={sectionDataSingle.GSTCategoryBInnerHeading2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {[...Array(22)].map((_, index) => {
        const nocField = `GSTCategoryBINoc${index + 1}`;
        return (
          <textarea
            key={index}
            placeholder={`NOC Code ${index + 1}`}
            name={nocField}
            value={sectionDataSingle[nocField]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        );
      })}

      {[...Array(22)].map((_, index) => {
        const jobField = `GSTCategoryBIJob${index + 1}`;
        return (
          <textarea
            key={index}
            placeholder={`Job Title ${index + 1}`}
            name={jobField}
            value={sectionDataSingle[jobField]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        );
      })}

      <input
        placeholder="Labour Market Benefits Plan (LMBP) Heading"
        name="LMBPHeading"
        value={sectionDataSingle.LMBPHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="LMBP Description"
        name="LMBPDescription"
        value={sectionDataSingle.LMBPDescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="LMBP List Intro 1"
        name="LMBPHListIntro1"
        value={sectionDataSingle.LMBPHListIntro1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="LMBP List 1"
        name="LMBPList1"
        value={sectionDataSingle.LMBPList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="LMBP List 2"
        name="LMBPList2"
        value={sectionDataSingle.LMBPList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="LMBP List Intro 2"
        name="LMBPHListIntro2"
        value={sectionDataSingle.LMBPHListIntro2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {[...Array(9)].map((_, index) => {
        const exampleField = `LMBPExList${index + 1}`;
        return (
          <textarea
            key={index}
            placeholder={`Example Activity ${index + 1}`}
            name={exampleField}
            value={sectionDataSingle[exampleField]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        );
      })}

      <input
        placeholder="How to Apply Heading"
        name="HowToApplyHeading"
        value={sectionDataSingle.HowToApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {[...Array(7)].map((_, index) => {
        const listField = `HowToApplyList${index + 1}`;
        return (
          <textarea
            key={index}
            placeholder={`How to Apply List Item ${index + 1}`}
            name={listField}
            value={sectionDataSingle[listField]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        );
      })}

      <textarea
        placeholder="How to Apply Paragraph"
        name="HowToApplyPara"
        value={sectionDataSingle.HowToApplyPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Common Reasons for Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {[...Array(5)].map((_, index) => {
        const refusalField = `Refusallist${index + 1}`;
        return (
          <textarea
            key={index}
            placeholder={`Refusal Reason ${index + 1}`}
            name={refusalField}
            value={sectionDataSingle[refusalField]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        );
      })}

      <input
        placeholder="Still Not Sure? Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure? Paragraph 1"
        name="StillNotSurePara1"
        value={sectionDataSingle.StillNotSurePara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure? Paragraph 2"
        name="StillNotSurePara2"
        value={sectionDataSingle.StillNotSurePara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure? Paragraph 3"
        name="StillNotSurePara3"
        value={sectionDataSingle.StillNotSurePara3}
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
        placeholder="Why Choose Us Paragraph"
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

export default GlobalStreamLMIAContent;
