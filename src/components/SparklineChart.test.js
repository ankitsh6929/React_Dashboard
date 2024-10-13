import React from 'react';
import { render } from '@testing-library/react';
import SparklineChart from './SparklineChart';

test('renders SparklineChart with empty data', () => {
  const { container } = render(<SparklineChart data={[]} />);
  expect(container).toBeInTheDocument();
});

test('renders SparklineChart with sample data', () => {
  const sampleData = [
    { adults: '2', children: '1' },
    { adults: '3', children: '2' }
  ];

  const { container } = render(<SparklineChart data={sampleData} />);
  expect(container).toBeInTheDocument();
});
