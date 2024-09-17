import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import MainPie from "./MainPie";
import MainBar from "./MainBar";
import MainRadialBar from "./MainRadialBar";

export default function DashRow3() {
  return (
    <Grid container spacing={2} px={"10px"} mt={2}>
      <Grid size={{ xs: 12, xl: 4 }}>
        <Paper>
          <MainPie isDashboard={true} />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, xl: 4 }}>
        <Paper>
          <MainBar isDashboard={true} />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, xl: 4 }}>
        <Paper>
          <MainRadialBar isDashboard={true} />
        </Paper>
      </Grid>
    </Grid>
  );
}
