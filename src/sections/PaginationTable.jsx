import React, { useEffect, useState } from "react";
import styles from "../styles/PaginationTable.module.css";

const parseDate = (dateString) => {
  return new Date(dateString);
};

const PaginationTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "drawNumber",
    direction: "ascending",
  });
  const itemsPerPage = 30;

  useEffect(() => {
    fetch(
      "https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json#/rounds"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data.rounds);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Sorting logic
  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let comparison = 0;

        if (sortConfig.key === "drawDateFull") {
          // Compare dates
          comparison =
            parseDate(a[sortConfig.key]) - parseDate(b[sortConfig.key]);
        } else if (
          sortConfig.key === "drawSize" ||
          sortConfig.key === "drawCRS"
        ) {
          // Compare numeric values
          comparison = (a[sortConfig.key] || 0) - (b[sortConfig.key] || 0);
        } else {
          // Compare strings
          comparison = a[sortConfig.key]?.localeCompare(b[sortConfig.key]) || 0;
        }

        return sortConfig.direction === "ascending" ? comparison : -comparison;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  // Calculate the data to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Change sort order
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Create page numbers
  const pageNumbers = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <button
                className={styles.sortButton}
                onClick={() => handleSort("drawNumber")}
              >
                <span className={styles.headingSpan}>#</span>
                <span
                  className={`${styles.dropdownArrow} ${
                    sortConfig.key === "drawNumber"
                      ? styles[sortConfig.direction]
                      : ""
                  }`}
                >
                  {sortConfig.key === "drawNumber"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▼"}
                </span>
              </button>
            </th>
            <th>
              <button
                className={styles.sortButton}
                onClick={() => handleSort("drawDateFull")}
              >
                <span className={styles.headingSpan}>Date</span>
                <span
                  className={`${styles.dropdownArrow} ${
                    sortConfig.key === "drawDateFull"
                      ? styles[sortConfig.direction]
                      : ""
                  }`}
                >
                  {sortConfig.key === "drawDateFull"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▼"}
                </span>
              </button>
            </th>
            <th>
              <button
                className={styles.sortButton}
                onClick={() => handleSort("drawName")}
              >
                <span className={styles.headingSpan}>Round Type</span>
                <span
                  className={`${styles.dropdownArrow} ${
                    sortConfig.key === "drawName"
                      ? styles[sortConfig.direction]
                      : ""
                  }`}
                >
                  {sortConfig.key === "drawName"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▼"}
                </span>
              </button>
            </th>
            <th>
              <button
                className={styles.sortButton}
                onClick={() => handleSort("drawSize")}
              >
                <span className={styles.headingSpan}>Invitations Issued</span>
                <span
                  className={`${styles.dropdownArrow} ${
                    sortConfig.key === "drawSize"
                      ? styles[sortConfig.direction]
                      : ""
                  }`}
                >
                  {sortConfig.key === "drawSize"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▼"}
                </span>
              </button>
            </th>
            <th>
              <button
                className={styles.sortButton}
                onClick={() => handleSort("drawCRS")}
              >
                <span className={styles.headingSpan}>
                  CRS score of lowest-ranked candidate invited
                </span>
                <span
                  className={`${styles.dropdownArrow} ${
                    sortConfig.key === "drawCRS"
                      ? styles[sortConfig.direction]
                      : ""
                  }`}
                >
                  {sortConfig.key === "drawCRS"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : "▼"}
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => {
            const url = item.drawNumberURL?.trim().split("href='")[1];
            return (
              <tr className={styles.dataAll} key={index}>
                <td>
                  <a href={`https://www.canada.ca/${url}`}>
                    {item?.drawNumber}
                  </a>
                </td>
                <td>
                  <p>{item.drawDateFull}</p>
                </td>
                <td>
                  <p>{item.drawName}</p>
                </td>
                <td>
                  <p>{item.drawSize}</p>
                </td>
                <td>
                  <p>{item.drawCRS}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span>
          Page {currentPage} of {pageNumbers}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageNumbers}
        >
          {">"}
        </button>
        <button
          onClick={() => handlePageChange(pageNumbers)}
          disabled={currentPage === pageNumbers}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
