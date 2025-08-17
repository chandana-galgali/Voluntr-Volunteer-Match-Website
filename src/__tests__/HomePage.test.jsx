import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('shows welcome heading', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { name: /welcome to voluntr/i })).toBeInTheDocument();
});