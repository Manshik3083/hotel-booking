import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TimeSeriesChart from './components/TimeSeriesChart';
import CountryChart from './components/CountryChart';
import SparklineChart from './components/SparklineChart';
import DateSelector from './components/DateSelector';

interface Booking {
  arrival_date_year: number;
  arrival_date_month: string;
  arrival_date_day_of_month: number;
  adults: number;
  children: number;
  babies: number;
  country: string;
}

const App: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]); // Define bookings as an array of Booking objects
  const [filteredData, setFilteredData] = useState<Booking[]>([]); // Same for filteredData

  useEffect(() => {
    axios.get('http://localhost:3001/bookings').then((response) => {
      setBookings(response.data); // TypeScript now knows this is an array of Booking objects
      setFilteredData(response.data);
    });
  }, []);

  const handleDateChange = (start: string, end: string) => {
    const filtered = bookings.filter((item) => {
      const bookingDate = new Date(
        `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`
      );
      return bookingDate >= new Date(start) && bookingDate <= new Date(end);
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Hotel Booking Dashboard</h1>
      {/* DateSelector will go here */}
      <TimeSeriesChart data={filteredData} />
      <CountryChart data={filteredData} />
      <SparklineChart data={filteredData} type="adults" />
      <SparklineChart data={filteredData} type="children" />
    </div>
  );
};

export default App;
