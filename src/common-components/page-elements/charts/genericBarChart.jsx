import Chart from 'react-apexcharts';
const GenericBarChart = (props) => {
  const { dataSeries, xaxis, height = 500, width = 500 } = props;
  let { options } = props;
  options = {
    ...options,
    options: {
      chart: {
        type: 'bar',
        height: height
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: xaxis
      }
    }
  };
  return <Chart options={options} series={dataSeries} type="bar" height={height} width={width} />;
};
export default GenericBarChart;
