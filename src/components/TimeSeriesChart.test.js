import React from 'react';
import { render } from '@testing-library/react';
import TimeSeriesChart from './TimeSeriesChart';

test('renders TimeSeriesChart with no data', () => {
  const { container } = render(<TimeSeriesChart data={[]} />);
  expect(container).toBeInTheDocument();
});

test('renders TimeSeriesChart with sample data', () => {
  const sampleData = [
    { arrival_date_year: 2022, arrival_date_month: 5, arrival_date_day_of_month: 10, adults: '2', children: '1', babies: '0' },
    { arrival_date_year: 2022, arrival_date_month: 6, arrival_date_day_of_month: 12, adults: '3', children: '2', babies: '1' }
  ];

  const { container } = render(<TimeSeriesChart data={sampleData} />);
  expect(container).toBeInTheDocument();
});
