import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    year: 2017,
    Spain: 2000,
    France: 1300,
    Germany: 1000,
  },
  {
    year: 2018,
    Spain: 700,
    France: 950,
    Germany: 1500,
  },
  {
    year: 2019,
    Spain: 1200,
    France: 1200,
    Germany: 1500,
  },
  {
    year: 2020,
    Spain: 1200,
    France: 1900,
    Germany: 1800,
  },
  {
    year: 2021,
    Spain: 1100,
    France: 1800,
    Germany: 1300,
  },
  {
    year: 2022,
    Spain: 1200,
    France: 1300,
    Germany: 2000,
  },
  {
    year: 2023,
    Spain: 1300,
    France: 1800,
    Germany: 2200,
  },
];

// eslint-disable-next-line react/prop-types
export default function MainBar({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "400px" : "75vh" }}>
      <ResponsiveBar
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
        keys={["Germany", "France", "Spain"]}
        indexBy="year"
        margin={{ top: 50, right: 70, bottom: 50, left: 60 }}
        padding={0.15}
        innerPadding={2}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderRadius={2}
        borderWidth={1}
        borderColor={{ theme: "background" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 2,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Salary / month ",
          legendPosition: "middle",
          legendOffset: -50,
          truncateTickAt: 0,
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 113,
            translateY: 40,
            itemsSpacing: 1,
            itemWidth: 110,
            itemHeight: 14,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 8,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </Box>
  );
}
