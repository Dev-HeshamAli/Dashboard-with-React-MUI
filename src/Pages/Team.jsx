// eslint-disable-next-line no-unused-vars
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./tableData/dataTeam.jsx";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import HeaderPages from "../Components/HeaderPages.jsx";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              mx: "auto",
              my: "8px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              color: theme.palette.primary.contrastText,
              bgcolor:
                params.row.access === "User"
                  ? theme.palette.primary.main
                  : params.row.access === "Admin"
                  ? theme.palette.warning.main
                  : params.row.access === "Manager"
                  ? theme.palette.success.main
                  : theme.palette.primary.main,
            }}
          >
            {params.row.access === "User" ? (
              <LockOpenOutlined fontSize="small" />
            ) : params.row.access === "Admin" ? (
              <AdminPanelSettingsOutlined fontSize="small" />
            ) : params.row.access === "Manager" ? (
              <SecurityOutlined fontSize="small" />
            ) : null}
            <Typography sx={{ fontSize: "13px" }} variant="body1">
              {params.row.access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <HeaderPages title={"TEAM"} desc={"Manage The Team Members"} />
      <div style={{ height: 633, width: "100%", margin: "0 auto" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
}

export default Team;
