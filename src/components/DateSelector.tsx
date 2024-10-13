import React from 'react';

interface DateSelectorProps {
  onDateChange: (startDate: string, endDate: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateChange }) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [start, end] = e.target.value.split(' to ');
    onDateChange(start, end);
  };

  return (
    <div>
      <label>Select Date Range: </label>
      <input type="text" placeholder="YYYY-MM-DD to YYYY-MM-DD" onChange={handleDateChange} />
    </div>
  );
};

export default DateSelector;
