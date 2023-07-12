import { BarChart, XAxis, Tooltip, ResponsiveContainer, Bar } from "recharts";
import { VerticalBarChartProps } from "./types";

export const VerticalBarChart = ({ width, height }: VerticalBarChartProps) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="pv" fill="#1F78B4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

VerticalBarChart.defaultProps = {
  width: 600,
  height: 400,
};
