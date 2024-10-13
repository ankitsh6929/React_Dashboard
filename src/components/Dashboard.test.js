import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders Dashboard component', () => {
  render(<Dashboard />);
  expect(screen.getByText('No data available')).toBeInTheDocument();
});

test('renders date pickers in Dashboard', () => {
  render(<Dashboard />);
  expect(screen.getByPlaceholderText('Start Date')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('End Date')).toBeInTheDocument();
});
