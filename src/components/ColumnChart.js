import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const aggregatedData = data.reduce((acc, record) => {
    acc[record.country] = (acc[record.country] || 0) + (Number(record.adults) + Number(record.children) + Number(record.babies));
    return acc;
  }, {});

  const chartData = {
    categories: Object.keys(aggregatedData),
    values: Object.values(aggregatedData),
  };

  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: chartData.categories },
  };

  return (
    <Chart 
      options={options} 
      series={[{ name: 'Visitors', data: chartData.values }]} 
      type="bar" 
      height={350} 
    />
  );
};

export default ColumnChart;
