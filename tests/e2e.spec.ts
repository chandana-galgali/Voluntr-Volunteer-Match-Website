import { test, expect } from '@playwright/test';

test('nav: Home -> Volunteers -> Form', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /welcome to voluntr/i })).toBeVisible();

  await page.getByRole('link', { name: /volunteers/i }).click();
  await expect(page).toHaveURL(/\/volunteer-list$/);

  await page.getByRole('link', { name: /become a volunteer/i }).click();
  await expect(page).toHaveURL(/\/volunteer-form$/);
});

test('form: invalid -> valid -> success', async ({ page }) => {
  await page.goto('/volunteer-form');
  const submit = page.getByRole('button', { name: /submit/i });
  await expect(submit).toBeDisabled();

  await page.getByLabel('Name').fill('Ada');
  await page.getByLabel('Email').fill('ada@example.com');
  await page.getByLabel('Your Skills')
    .fill('This text has more than twenty characters.');
  await expect(submit).toBeEnabled();

  await submit.click();
  await expect(page.getByText(/thank you!/i)).toBeVisible();
});