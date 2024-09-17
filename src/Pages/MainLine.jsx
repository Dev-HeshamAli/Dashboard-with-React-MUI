import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(8, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 66,
      },
      {
        x: "helicopter",
        y: 76,
      },
      {
        x: "boat",
        y: 54,
      },
      {
        x: "train",
        y: 84,
      },
      {
        x: "subway",
        y: 39,
      },
      {
        x: "bus",
        y: 234,
      },
      {
        x: "car",
        y: 108,
      },
      {
        x: "moto",
        y: 206,
      },
      {
        x: "bicycle",
        y: 288,
      },
      {
        x: "horse",
        y: 242,
      },
      {
        x: "skateboard",
        y: 12,
      },
      {
        x: "others",
        y: 7,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(203, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 213,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 68,
      },
      {
        x: "train",
        y: 81,
      },
      {
        x: "subway",
        y: 69,
      },
      {
        x: "bus",
        y: 260,
      },
      {
        x: "car",
        y: 260,
      },
      {
        x: "moto",
        y: 2,
      },
      {
        x: "bicycle",
        y: 189,
      },
      {
        x: "horse",
        y: 272,
      },
      {
        x: "skateboard",
        y: 67,
      },
      {
        x: "others",
        y: 282,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(213, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 229,
      },
      {
        x: "helicopter",
        y: 143,
      },
      {
        x: "boat",
        y: 22,
      },
      {
        x: "train",
        y: 187,
      },
      {
        x: "subway",
        y: 186,
      },
      {
        x: "bus",
        y: 72,
      },
      {
        x: "car",
        y: 185,
      },
      {
        x: "moto",
        y: 114,
      },
      {
        x: "bicycle",
        y: 198,
      },
      {
        x: "horse",
        y: 156,
      },
      {
        x: "skateboard",
        y: 142,
      },
      {
        x: "others",
        y: 139,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(120, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 234,
      },
      {
        x: "helicopter",
        y: 210,
      },
      {
        x: "boat",
        y: 45,
      },
      {
        x: "train",
        y: 14,
      },
      {
        x: "subway",
        y: 115,
      },
      {
        x: "bus",
        y: 268,
      },
      {
        x: "car",
        y: 287,
      },
      {
        x: "moto",
        y: 75,
      },
      {
        x: "bicycle",
        y: 299,
      },
      {
        x: "horse",
        y: 56,
      },
      {
        x: "skateboard",
        y: 59,
      },
      {
        x: "others",
        y: 275,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(109, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 7,
      },
      {
        x: "helicopter",
        y: 51,
      },
      {
        x: "boat",
        y: 255,
      },
      {
        x: "train",
        y: 182,
      },
      {
        x: "subway",
        y: 77,
      },
      {
        x: "bus",
        y: 183,
      },
      {
        x: "car",
        y: 45,
      },
      {
        x: "moto",
        y: 159,
      },
      {
        x: "bicycle",
        y: 291,
      },
      {
        x: "horse",
        y: 97,
      },
      {
        x: "skateboard",
        y: 198,
      },
      {
        x: "others",
        y: 246,
      },
    ],
  },
];

// eslint-disable-next-line react/prop-types
export default function MainLine({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "400px" : "75vh" }}>
      <ResponsiveLine
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
                stroke: theme.palette.text.secondary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
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
                fill: theme.palette.text.secondary,
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
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
