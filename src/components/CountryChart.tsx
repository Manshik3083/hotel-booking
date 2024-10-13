import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface CountryChartProps {
  data: any[]; // Adjust based on your data structure
}

const CountryChart: React.FC<CountryChartProps> = ({ data }) => {
  const uniqueCountries = Array.from(new Set(data.map((item) => item.country)));

  const options: ApexOptions = {
    chart: {
      type: 'bar', // Valid chart type for column chart
    },
    xaxis: {
      categories: uniqueCountries, // Use unique countries
    },
  };

  const series = [
    {
      name: 'Visitors by Country',
      data: uniqueCountries.map((country) => {
        return data.reduce((acc, item) => {
          if (item.country === country) {
            return acc + item.adults + item.children + item.babies;
          }
          return acc;
        }, 0);
      }),
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default CountryChart;
