import { DownloadOutlined } from "@mui/icons-material";
import { Box, Typography, useTheme, Paper } from "@mui/material";
import MainLine from "./MainLine";
import Grid from "@mui/material/Grid2";

const Transactions = [
  {
    user: "Josef",
    date: "2022-9-8",
    cost: "43.4",
  },
  {
    user: "Ahmed",
    date: "2021-4-8",
    cost: "23.4",
  },
  {
    user: "Karim",
    date: "20220-1-8",
    cost: "63.4",
  },
  {
    user: "Hamed",
    date: "2023-10-8",
    cost: "33.4",
  },
  {
    user: "Haidy",
    date: "2022-2-8",
    cost: "25.4",
  },
];

export default function DashRow2() {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={2} mt="20px" px="10px">
        <Grid  size={{ xs: 12, xl: 8 }}>
          <Paper sx={{ p: "20px" }}>
            <Grid container justifyContent="space-between" alignItems="start">
              <Grid>
                <Typography
                  variant="h5"
                  color={theme.palette.secondary.main}
                  mb="10px"
                >
                  Revenue Generated
                </Typography>
                <Typography variant="body1">$ 59,342.36</Typography>
              </Grid>
              <Grid>
                <DownloadOutlined />
              </Grid>
            </Grid>

            <MainLine isDashboard={true} />
          </Paper>
        </Grid>

        <Grid  size={{ xs: 12, xl: 4 }} p="20px">
          <Typography variant="h5" color={theme.palette.secondary.main}>
            Recent Transactions
          </Typography>
          {Transactions.map((el, index) => (
            <Paper key={index} sx={{ p: "15px", my: "15px" }}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">{el.user}</Typography>
                <Typography variant="h6">{el.date}</Typography>
                <Box
                  sx={{
                    bgcolor: theme.palette.primary.dark,
                    p: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography variant="h6">$ {el.cost}</Typography>
                </Box>
              </Grid>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
