import { Box, Stack, Paper, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

// eslint-disable-next-line react/prop-types
export default function DashBox({ icon, num, title, present, data, scheme }) {
  const theme = useTheme();
  return (
    <Paper sx={{ minWidth: "250px", flexGrow: 1 }}>
      <Stack
        direction={"row"}
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {icon}
          <Typography sx={{ mt: "5px" }} variant="body2">
            {num}
          </Typography>
          <Typography sx={{ mt: "5px" }} variant="body2">
            {title}
          </Typography>
        </Box>

        <Stack direction={"column"} alignItems={"center"}>
          <Box height={"100px"} width={"100px"}>
            <ResponsivePie
              theme={{
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: theme.palette.divider,
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.divider,
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: theme.palette.text.primary,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
              data={data}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
              startAngle={-162}
              innerRadius={0.7}
              padAngle={2}
              colors={{ scheme: scheme }}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", "0.2"]],
              }}
              arcLinkLabelsTextOffset={0}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsOffset={24}
              arcLinkLabelsDiagonalLength={36}
              arcLinkLabelsStraightLength={0}
              enableArcLabels={false}
              arcLinkLabelsThickness={0}
              arcLinkLabelsColor={{ from: "color", modifiers: [] }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", "2.1"]],
              }}
            />
          </Box>
          <Typography variant="h6">{present}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
