export type VerticalBarChartProps = {
  width: string | number
  height: string | number
  dataKeys: DataKeysProps
  data: Array
  formatterAxis: FormatterAxisProps
  tooltipFormatter: TooltipFormatterProps
  isError: boolean
  isLoading: boolean
}

type DataKeysProps = {
  xAxis: string
  yAxis: string
}

type FormatterAxisProps = {
  xAxis: any
}

type TooltipFormatterProps = {
  value: any
}
