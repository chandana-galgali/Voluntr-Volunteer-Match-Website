import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from '../pages/HomePage';
expect.extend(toHaveNoViolations);

test('home page has no basic a11y violations', async () => {
  const { container } = render(<HomePage />);
  const results = await axe(container);
  expect(results.violations).toEqual([]);
});