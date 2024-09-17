// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Button } from "@mui/material";
import HeaderPages from "../Components/HeaderPages";
import DashRow1 from "./DashRow1";
import DashRow2 from "./DashRow2";
import DashRow3 from "./DashRow3";
import { DownloadOutlined } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <Box>
      <HeaderPages title={"DASHBOARD"} desc={"Welcome To Your Dashboard"} />
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            mb: "25px",
          }}
        >
          <Button
            sx={{ p: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined sx={{ mr: 1 }} />
            Download Reports
          </Button>
        </Box>

        <DashRow1 />
        <DashRow2 />
        <DashRow3 />
      </Box>
    </Box>
  );
}
