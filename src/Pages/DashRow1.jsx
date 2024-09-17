import { Box, Stack, useTheme } from "@mui/material";
import DashBox from "../Components/DashBox";
import { Mail, Person, Phone, Traffic } from "@mui/icons-material";

const data1 = [
  {
    id: "react",
    label: "react",
    value: 253,
    color: "hsl(339, 70%, 50%)",
  },
  {
    id: "vue",
    label: "vue",
    value: 134,
    color: "hsl(333, 70%, 50%)",
  },
];
const data2 = [
  {
    id: "rust",
    label: "rust",
    value: 156,
    color: "hsl(206, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 255,
    color: "hsl(337, 70%, 50%)",
  },
];
const data3 = [
  {
    id: "vue",
    label: "vue",
    value: 634,
    color: "hsl(333, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 256,
    color: "hsl(206, 70%, 50%)",
  },
];
const data4 = [
  {
    id: "react",
    label: "react",
    value: 153,
    color: "hsl(339, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 455,
    color: "hsl(337, 70%, 50%)",
  },
];

export default function DashRow1() {
  const theme = useTheme();
  return (
    <Box>
      <Stack
        direction={"row"}
        gap={3}
        sx={{
          justifyContent: { xs: "center", xl: "space-between" },
          flexWrap: "wrap",
          px: "10px",
        }}
      >
        <DashBox
          icon={
            <Mail
              sx={{ fontSize: "24px", color: theme.palette.primary.main }}
            />
          }
          num={`${12} K`}
          title={"Email Sent"}
          present={"+14%"}
          data={data1}
          scheme={"nivo"}
        />
        <DashBox
          icon={
            <Person
              sx={{ fontSize: "24px", color: theme.palette.primary.main }}
            />
          }
          num={`${32} K`}
          title={"New Client"}
          present={"+5%"}
          data={data2}
          scheme={"category10"}
        />
        <DashBox
          icon={
            <Traffic
              sx={{ fontSize: "24px", color: theme.palette.primary.main }}
            />
          }
          num={`${1.2} M`}
          title={"Traffic Receive"}
          present={"+25%"}
          data={data3}
          scheme={"accent"}
        />
        <DashBox
          icon={
            <Phone
              sx={{ fontSize: "24px", color: theme.palette.primary.main }}
            />
          }
          num={`${320} K`}
          title={"Sales Obtained"}
          present={"+35%"}
          data={data4}
          scheme={"dark2"}
        />
      </Stack>
    </Box>
  );
}
