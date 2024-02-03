import Chart from 'react-apexcharts';
const GenericLineAreaChart = (props) => {
  const { dataSeries, height = 500, width = 500 } = props;
  let { options } = props;
  options = {
    ...options
  };
  return <Chart options={options} height={height} width={width} series={dataSeries} type="area" />;
};
export default GenericLineAreaChart;
