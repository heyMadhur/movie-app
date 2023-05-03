import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (event, page) => {
    if (page !== null) {
      setPage(page);
    }
    window.scroll(0, 0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Pagination
          count={numOfPages}
          onChange={handlePageChange}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </div>
    </ThemeProvider>
  );
};

export default CustomPagination;
