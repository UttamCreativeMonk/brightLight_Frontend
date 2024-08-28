import React, { useState } from "react";
import styles from "../styles/PreviousDrawHistory.module.css";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

const PreviousDrawHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ occupation: "", nocCode: "", teerCategory: "", roundType: "" });
  const [sortConfig, setSortConfig] = useState({ key: 'number', direction: 'asc' });
  const itemsPerPage = 5;

  const dummyData = [
    { number: 101, date: "March 30,2024", occupation: "Contractors and supervisors, landscaping...", nocCode: "7851", teerCategory: "7851", roundType: "General" },
    { number: 102, date: "March 19,2024", occupation: "Agricultural service contractors...", nocCode: "254548", teerCategory: "254548", roundType: "General" },
    { number: 103, date: "March 18,2024", occupation: "Butchers - retail and wholesale", nocCode: "6554", teerCategory: "6554", roundType: "Special" },
    { number: 104, date: "March 17,2024", occupation: "Supervisors, assembly and fabrication", nocCode: "2487", teerCategory: "2487", roundType: "General" },
    { number: 105, date: "March 16,2024", occupation: "Motor vehicle body repairers", nocCode: "298512", teerCategory: "298512", roundType: "Special" },
    { number: 106, date: "March 15,2024", occupation: "Fish plant workers", nocCode: "8445", teerCategory: "8445", roundType: "General" },
    { number: 107, date: "March 13,2024", occupation: "Textile and garment production workers", nocCode: "1548", teerCategory: "1548", roundType: "Special" },
    { number: 108, date: "March 11,2024", occupation: "Metalworking machine operators", nocCode: "21582", teerCategory: "21582", roundType: "General" },
    { number: 109, date: "March 10,2024", occupation: "Industrial painters and coaters", nocCode: "545", teerCategory: "545", roundType: "Special" },
    { number: 110, date: "March 8,2024", occupation: "Woodworking machine operators", nocCode: "2324", teerCategory: "2324", roundType: "General" },
    { number: 111, date: "March 7,2024", occupation: "Other products assemblers, finishers", nocCode: "884", teerCategory: "884", roundType: "Special" },
  ];

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

  const handleSortChange = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const sortedData = [...dummyData].sort((a, b) => {
    if (sortConfig.key === 'date') {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (dateA > dateB) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    } else {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    }
  });

  const filteredData = sortedData.filter(row => {
    return (
      (filter.occupation === "" || row.occupation.includes(filter.occupation)) &&
      (filter.nocCode === "" || row.nocCode.includes(filter.nocCode)) &&
      (filter.teerCategory === "" || row.teerCategory.includes(filter.teerCategory)) &&
      (filter.roundType === "" || row.roundType.includes(filter.roundType))
    );
  });

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <h1>Previous Draw History</h1>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <button className={styles.sortButton} onClick={() => handleSortChange('number')}>
                  <span className={styles.headingSpan}>#</span>
                
                  <span className={styles.dropdownArrow}>
                    {sortConfig.key === 'number' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▼'}
                  </span>
                </button>
              </th>
              <th>
                <button className={styles.sortButton} onClick={() => handleSortChange('date')}>
                 <span className={styles.headingSpan}>Date</span>
                  
                  <span className={styles.dropdownArrow}>
                    {sortConfig.key === 'date' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▼'}
                  </span>
                </button>
              </th>
              <th>
                <span className={styles.headingSpan}> Occupations</span>
               
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
                <span className={styles.headingSpan}>Round Type</span>
                
                <div className={styles.dropdown}>
                  <span className={styles.dropdownArrow}>▼</span>
                  <div className={styles.dropdownContent}>
                    <button onClick={() => handleFilterChange("roundType", "General")}>General</button>
                    <button onClick={() => handleFilterChange("roundType", "Special")}>Special</button>
                    <button onClick={() => handleFilterChange("roundType", "")}>Clear</button>
                  </div>
                </div>
              </th>
              <th>
                <span className={styles.headingSpan}>2021 NOC Code</span>
                
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
                <span className={styles.headingSpan}>2021 TEER Category</span>
                
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
                <tr className={styles.dataAll} key={index}>
                  <td> <p>{row.number}</p> </td>
                  <td> <p>{row.date}</p></td>
                  <td> <p>{row.occupation}</p></td>
                  <td> <p>{row.roundType}</p></td>
                  <td><p>{row.nocCode}</p></td>
                  <td><p>{row.teerCategory}</p></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6"><p>No data available</p></td>
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
    </>
  );
};

export default PreviousDrawHistory;
