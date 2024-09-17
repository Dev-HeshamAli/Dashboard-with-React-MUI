// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "@mui/system";
import HeaderPages from "../Components/HeaderPages.jsx";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./tableData/dataCont.jsx";

function Contacts() {
  return (
    <Box>
      <HeaderPages
        title={"CONTACTS"}
        desc={"List of Contacts for Future Reference"}
      />
      <div style={{ height: 633, width: "100%", margin: "0 auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </Box>
  );
}

export default Contacts;
