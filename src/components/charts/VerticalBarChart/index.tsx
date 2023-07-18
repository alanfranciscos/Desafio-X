import { BarChart, XAxis, Tooltip, ResponsiveContainer, Bar } from "recharts";
import { VerticalBarChartProps } from "./types";
import { Container } from "./styles";
import { StatusRequest } from "../../StatusRequest";

export const VerticalBarChart = ({
  width,
  height,
  dataKeys,
  data,
  formatterAxis,
  tooltipFormatter,
  isError,
  isLoading,
}: VerticalBarChartProps) => {
  if (isError || isLoading || !data.length) {
    return <StatusRequest error={isError} loading={isLoading} />;
  }

  return (
    <Container>
      <ResponsiveContainer width={width} height={height}>
        <BarChart data={data}>
          <XAxis
            dataKey={dataKeys.xAxis}
            tickFormatter={(value) => formatterAxis.xAxis(value)}
          />
          <Tooltip formatter={(value) => tooltipFormatter.value(value)} />
          <Bar dataKey={dataKeys.yAxis} fill="#1F78B4" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

VerticalBarChart.defaultProps = {
  width: 600,
  height: 400,
  formatterAxis: {
    xAxis: (value: any) => value,
  },
  tooltipFormatter: {
    value: (value: any) => value,
  },
};
