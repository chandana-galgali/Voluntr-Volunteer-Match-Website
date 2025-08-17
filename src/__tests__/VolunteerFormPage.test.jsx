import { render, screen } from '@testing-library/react';
import { act } from 'react'; 
import userEvent from '@testing-library/user-event';
import VolunteerFormPage from '../pages/VolunteerFormPage';

test('submit disabled until valid; shows success on submit', async () => {
  render(<VolunteerFormPage />);

  const name   = screen.getByLabelText(/name/i);
  const email  = screen.getByLabelText(/email/i);
  const skills = screen.getByLabelText(/your skills/i);
  const submit = screen.getByRole('button', { name: /submit/i });

  expect(submit).toBeDisabled();

  await act(async () => {
    await userEvent.type(name, 'Ada Lovelace');
    await userEvent.type(email, 'not-an-email');
    await userEvent.type(skills, 'short');
  });
  expect(submit).toBeDisabled();

  await act(async () => {
    await userEvent.clear(email);
    await userEvent.type(email, 'ada@example.com');
    await userEvent.clear(skills);
    await userEvent.type(skills, 'This description is longer than twenty characters.');
  });
  expect(submit).toBeEnabled();

  await act(async () => {
    await userEvent.click(submit);
  });
  expect(await screen.findByText(/thank you!/i)).toBeInTheDocument();
});