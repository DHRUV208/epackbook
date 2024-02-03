import Chart from 'react-apexcharts';
const GenericPieChart = (props) => {
  const { dataSeries, height = 500, width = 500 } = props;
  let { options } = props;
  options = {
    ...options,
    chart: {
      width: width,
      type: 'donut'
    },
    dataLabels: {
      enabled: true
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: width
          },
          legend: {
            show: false
          }
        }
      }
    ],
    legend: {
      position: 'right',
      offsetY: 0,
      height: height
    }
  };

  return <Chart options={options} series={dataSeries} type="donut" width={width} height={height} />;
};
export default GenericPieChart;
