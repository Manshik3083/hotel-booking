import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface TimeSeriesChartProps {
  data: any[]; // Adjust this based on your data structure
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      type: 'line', // Valid chart type
    },
    xaxis: {
      categories: data.map((item) => `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`),
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: data.map((item) => item.adults + item.children + item.babies),
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default TimeSeriesChart;
