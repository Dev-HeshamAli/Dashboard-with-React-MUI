// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "@mui/system";
import HeaderPages from "../Components/HeaderPages.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./tableData/dataInvoices.jsx";

function Invoices() {
  return (
    <Box>
      <HeaderPages title={"INVOICES"} desc={"List of Invoices Balances"} />
      <div style={{ height: 633, width: "100%", margin: "0 auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </Box>
  );
}

export default Invoices;
