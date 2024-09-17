import { useState } from "react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopBar from "./Components/TopBar";
import SidBar from "./Components/SidBar";
import { Outlet } from "react-router-dom";


export default function App() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("currantMode")
      ? localStorage.getItem("currantMode")
      : "light"
  );
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <TopBar show={show} setMode={setMode} setShow={setShow} />
        <SidBar show={show} setShow={setShow} />
        <Box
          component="main"
          sx={{ ml: show ? "220px" : "65px", p: "20px", transition: "0.3s" }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
