import React, { useState } from "react";
import styles from "../styles/PaginationTable.module.css";

const PaginationTable = () => {
  const dummyData = [
    { occupation: "Contractors and supervisors, landscaping...", nocCode: "7851", teerCategory: "7851" },
    { occupation: "Agricultural service contractors...", nocCode: "254548", teerCategory: "254548" },
    { occupation: "Butchers - retail and wholesale", nocCode: "6554", teerCategory: "6554" },
    { occupation: "April 1, 2024", nocCode: "2487", teerCategory: "2487" },
    { occupation: "April 1, 2024", nocCode: "298512", teerCategory: "298512" },
    { occupation: "April 1, 2024", nocCode: "8445", teerCategory: "8445" },
    { occupation: "April 1, 2024", nocCode: "1548", teerCategory: "1548" },
    { occupation: "April 1, 2024", nocCode: "21582", teerCategory: "21582" },
    { occupation: "April 1, 2024", nocCode: "545", teerCategory: "545" },
    { occupation: "April 1, 2024", nocCode: "2324", teerCategory: "2324" },
    { occupation: "April 1, 2024", nocCode: "884", teerCategory: "884" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ occupation: "", nocCode: "", teerCategory: "" });
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterChange = (field, value) => {
    setFilter({ ...filter, [field]: value });
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const filteredData = dummyData.filter(row => {
    return (
      (filter.occupation === "" || row.occupation.includes(filter.occupation)) &&
      (filter.nocCode === "" || row.nocCode.includes(filter.nocCode)) &&
      (filter.teerCategory === "" || row.teerCategory.includes(filter.teerCategory))
    );
  });

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              Occupations
              <div className={styles.dropdown}>
                <span className={styles.dropdownArrow}>▼</span>
                <div className={styles.dropdownContent}>
                  <button onClick={() => handleFilterChange("occupation", "Contractors")}>Contractors</button>
                  <button onClick={() => handleFilterChange("occupation", "Agricultural")}>Agricultural</button>
                  <button onClick={() => handleFilterChange("occupation", "Butchers")}>Butchers</button>
                  <button onClick={() => handleFilterChange("occupation", "")}>Clear</button>
                </div>
              </div>
            </th>
            <th>
              2021 NOC Code
              <div className={styles.dropdown}>
                <span className={styles.dropdownArrow}>▼</span>
                <div className={styles.dropdownContent}>
                  <button onClick={() => handleFilterChange("nocCode", "7851")}>7851</button>
                  <button onClick={() => handleFilterChange("nocCode", "254548")}>254548</button>
                  <button onClick={() => handleFilterChange("nocCode", "6554")}>6554</button>
                  <button onClick={() => handleFilterChange("nocCode", "")}>Clear</button>
                </div>
              </div>
            </th>
            <th>
              2021 TEER Category
              <div className={styles.dropdown}>
                <span className={styles.dropdownArrow}>▼</span>
                <div className={styles.dropdownContent}>
                  <button onClick={() => handleFilterChange("teerCategory", "7851")}>7851</button>
                  <button onClick={() => handleFilterChange("teerCategory", "254548")}>254548</button>
                  <button onClick={() => handleFilterChange("teerCategory", "6554")}>6554</button>
                  <button onClick={() => handleFilterChange("teerCategory", "")}>Clear</button>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((row, index) => (
              <tr key={index}>
                <td>{row.occupation}</td>
                <td>{row.nocCode}</td>
                <td>{row.teerCategory}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
          {"<<"}
        </button>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          {"<"}
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          {">"}
        </button>
        <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;


// For Fetching From The api Backend the Code is Below //



// import React, { useState, useEffect } from "react";
// import styles from "./PaginationTable.module.css";

// const PaginationTable = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchPageData(currentPage);
//   }, [currentPage]);

//   const fetchPageData = async (page) => {
//     try {
//       const response = await fetch(`/api/data?page=${page}`);
//       const result = await response.json();
//       setData(result.data);
//       setTotalPages(result.totalPages);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className={styles.tableContainer}>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Occupations</th>
//             <th>2021 NOC Code</th>
//             <th>2021 TEER Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td>{row.occupation}</td>
//               <td>{row.nocCode}</td>
//               <td>{row.teerCategory}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className={styles.pagination}>
//         <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
//           {"<<"}
//         </button>
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           {"<"}
//         </button>
//         <span>{currentPage} of {totalPages}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           {">"}
//         </button>
//         <button
//           onClick={() => handlePageChange(totalPages)}
//           disabled={currentPage === totalPages}
//         >
//           {">>"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationTable;
