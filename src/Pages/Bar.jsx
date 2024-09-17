// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "@mui/material";
import HeaderPages from "../Components/HeaderPages";
import MainBar from "./MainBar";

function Bar() {
  return (
    <Box>
      <HeaderPages
        title={"Bar Chart"}
        desc={"The Minimum Wage in Germany , France , Spain (EUR/month)"}
      />
      <MainBar />
    </Box>
  );
}

export default Bar;
