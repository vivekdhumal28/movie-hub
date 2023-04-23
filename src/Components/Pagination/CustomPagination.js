import React from "react";
import { Pagination } from "@mui/material";

// const darkTheme = createMuiTheme({
//   palette: {
//     type: "dark",
//   },
// });

const CustomPagination = ({ setPage, numofPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination
        count={numofPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        // hideNextButton
        // hidePrevButton
        color="primary"
      />
    </div>
  );
};

export default CustomPagination;
