// eslint-disable-next-line no-unused-vars
import React from "react";
import HeaderPages from "../Components/HeaderPages";
import { Box } from "@mui/material";
import MainPie from "./MainPie";


function Pie() {
  return (
    <Box>
      <HeaderPages title={"Pie Chart"} desc={"Simple Pie Chart"} />
      <MainPie/>
    </Box>
  );
}

export default Pie;
