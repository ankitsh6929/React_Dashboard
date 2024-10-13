import React from 'react';
import { render } from '@testing-library/react';
import ColumnChart from './ColumnChart';

test('renders ColumnChart with no data', () => {
  const { container } = render(<ColumnChart data={[]} />);
  expect(container).toBeInTheDocument();
});

test('renders ColumnChart with valid data', () => {
  const sampleData = [
    { country: 'USA', adults: '2', children: '1', babies: '0' },
    { country: 'UK', adults: '1', children: '1', babies: '1' }
  ];

  const { container } = render(<ColumnChart data={sampleData} />);
  expect(container).toBeInTheDocument();
});
