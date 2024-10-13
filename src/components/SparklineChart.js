import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ data }) => {
  const adultsData = data.map((record) => Number(record.adults));
  const childrenData = data.map((record) => Number(record.children));

  const options = {
    chart: { type: 'line', sparkline: { enabled: true } },
    stroke: { curve: 'smooth' },
    tooltip: { enabled: false },
  };

  return (
    <div className="sparkline-charts">
      <Chart options={options} series={[{ name: 'Adults', data: adultsData }]} type="line" height={100} />
      <Chart options={options} series={[{ name: 'Children', data: childrenData }]} type="line" height={100} />
    </div>
  );
};

export default SparklineChart;
