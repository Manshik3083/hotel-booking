import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface SparklineChartProps {
  data: any[]; // Adjust based on your data structure
  type: 'adults' | 'children'; // Pass the type of visitors (adults or children)
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, type }) => {
  const options: ApexOptions = {
    chart: {
      type: 'line', // Sparkline is typically a line chart
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      categories: data.map((item) => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`),
    },
  };

  const series = [
    {
      name: `${type} Visitors`,
      data: data.map((item) => item[type]),
    },
  ];

  return <Chart options={options} series={series} type="line" height={100} />;
};

export default SparklineChart;
