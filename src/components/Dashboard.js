import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import ColumnChart from './ColumnChart';
import SparklineChart from './SparklineChart';
import TimeSeriesChart from './TimeSeriesChart';

const monthMap = {
  January: 0, February: 1, March: 2, April: 3, May: 4, 
  June: 5, July: 6, August: 7, September: 8, October: 9, 
  November: 10, December: 11
};

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('/hotel_bookings_1000.csv')
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data);
            setFilteredData(results.data);
          }
        });
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = data.filter((record) => {
        const bookingDate = new Date(
          record.arrival_date_year,
          monthMap[record.arrival_date_month],
          record.arrival_date_day_of_month
        );
        return bookingDate >= new Date(startDate) && bookingDate <= new Date(endDate);
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [startDate, endDate, data]);

  return (
    <div className="dashboard">
      <div className="date-range-picker">
        <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          selectsStart 
          startDate={startDate} 
          endDate={endDate} 
          placeholderText="Start Date"
        />
        <DatePicker 
          selected={endDate} 
          onChange={(date) => setEndDate(date)} 
          selectsEnd 
          startDate={startDate} 
          endDate={endDate} 
          minDate={startDate} 
          placeholderText="End Date"
        />
      </div>
      {filteredData.length > 0 ? (
        <div>
          <TimeSeriesChart data={filteredData} />
          <ColumnChart data={filteredData} />
          <SparklineChart data={filteredData} />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Dashboard;
