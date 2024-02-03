import Chart from 'react-apexcharts';
import React from 'react';
const GenericRadarChart = (props) => {
  const { dataSeries, chartTitle, dataCategories, height = 500, width = 500 } = props;
  let { options } = props;
  options = {
    ...options,
    chart: {
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      width: 3
    },
    fill: {
      opacity: 0.4
    },
    markers: {
      size: 3
    },

    title: {
      text: chartTitle
    },

    xaxis: {
      categories: dataCategories
    }
  };

  return <Chart options={options} series={dataSeries} type="radar" height={height} width={width} />;
};
export default GenericRadarChart;
