import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

jest.mock(
  'react-router-dom',
  () => ({
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  }),
  { virtual: true }
);

test('renders key nav links', () => {
  render(<Navbar />);
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /volunteers/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /become a volunteer/i })).toBeInTheDocument();
});