```typescript
// @generated
// Framework: Playwright (TypeScript)
// Generated: 2024-05-06T18:08:00.000Z | Tests: 15
// CI: GitHub Actions | Jenkins | CircleCI | GitLab CI
// Run: npx playwright test

import { test, expect, Page } from '@playwright/test';

// 1 - Verify successful password reset for a registered user
test('1 - Verify successful password reset for a registered user', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// Assuming a reset link is received and the page navigates to reset password page
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('NewPassword456!');
await page.getByLabel('Confirm New Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Reset Password' }).click();
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByLabel('Email address').fill('user@example.com');
await page.getByLabel('Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Sign In' }).click();
// TODO: Add assertion to verify successful login (e.g., check for a welcome message or a specific element)
});

// 2 - Verify password reset email is received within 2 minutes
test('2 - Verify password reset email is received within 2 minutes', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
const startTime = new Date().getTime();
// TODO: Add step to check email inbox for password reset email
// const emailReceived = await checkEmailInbox(startTime, 120000); // 2 minutes in milliseconds
// expect(emailReceived).toBe(true);
});

// 3 - Verify error message for unregistered email address
test('3 - Verify error message for unregistered email address', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('unregistered@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add assertion to verify the error message
// await expect(page.getByText('Error message')).toBeVisible();
});

// 4 - Verify validation for invalid email format on forgot password page
test('4 - Verify validation for invalid email format on forgot password page', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('invalid@email');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add assertion to verify the error message
// await expect(page.getByText('Invalid email format')).toBeVisible();
});

// 5 - Verify password reset link expires after 24 hours
test('5 - Verify password reset link expires after 24 hours', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
// TODO: Simulate waiting for more than 24 hours (e.g., using a test environment feature or by setting a specific time)
// await page.waitForTimeout(86400000); // Wait for 24 hours in milliseconds
// await page.goto(resetLink); // Replace resetLink with the actual link
// TODO: Add assertion to verify the expired link message
// await expect(page.getByText('Reset link expired')).toBeVisible();
});

// 6 - Verify user cannot reuse their current password as the new password
test('6 - Verify user cannot reuse their current password as the new password', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('OldPassword123!');
await page.getByLabel('Confirm New Password').fill('OldPassword123!');
await page.getByRole('button', { name: 'Reset Password' }).click();
// TODO: Add assertion to verify the error message
// await expect(page.getByText('Cannot reuse current password')).toBeVisible();
});

// 7 - Verify user cannot reuse a previously used password (if password history is enforced)
test('7 - Verify user cannot reuse a previously used password (if password history is enforced)', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('PreviousPassword789!');
await page.getByLabel('Confirm New Password').fill('PreviousPassword789!');
await page.getByRole('button', { name: 'Reset Password' }).click();
// TODO: Add assertion to verify the error message
// await expect(page.getByText('Cannot reuse previous password')).toBeVisible();
});

// 8 - Verify new password form enforces password complexity requirements
test('8 - Verify new password form enforces password complexity requirements', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('short');
await page.getByLabel('Confirm New Password').fill('short');
await page.getByRole('button', { name: 'Reset Password' }).click();
// TODO: Add assertion to verify the error message
// await expect(page.getByText('Password must meet complexity requirements')).toBeVisible();
});

// 9 - Verify error message for mismatched new password and confirm new password fields
test('9 - Verify error message for mismatched new password and confirm new password fields', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('NewPassword456!');
await page.getByLabel('Confirm New Password').fill('DifferentPassword789!');
await page.getByRole('button', { name: 'Reset Password' }).click();
// TODO: Add assertion to verify the error message
// await expect(page.getByText('Passwords do not match')).toBeVisible();
});

// 10 - Verify only the latest password reset link is valid after multiple requests
test('10 - Verify only the latest password reset link is valid after multiple requests', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
await page.waitForTimeout(30000); // Wait 30 seconds
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset links
// await page.goto(firstResetLink); // Replace firstResetLink with the actual link
// TODO: Add assertion to verify the error message for the first link
// await expect(page.getByText('Link is invalid')).toBeVisible();
// await page.goto(secondResetLink); // Replace secondResetLink with the actual link
await page.getByLabel('New Password').fill('NewPassword456!');
await page.getByLabel('Confirm New Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Reset Password' }).click();
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByLabel('Email address').fill('user@example.com');
await page.getByLabel('Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Sign In' }).click();
// TODO: Add assertion to verify successful login
});

// 11 - Verify 'Forgot Password' link is present and clickable on the login page
test('11 - Verify \'Forgot Password\' link is present and clickable on the login page', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await expect(page.getByRole('link', { name: 'Forgot Password' })).toBeVisible();
await page.getByRole('link', { name: 'Forgot Password' }).click();
// TODO: Add assertion to verify navigation to the forgot password page
// await expect(page).toHaveURL(/forgot-password/);
});

// 12 - Verify password reset functionality works on Chrome (Desktop)
test('12 - Verify password reset functionality works on Chrome (Desktop)', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('NewPassword456!');
await page.getByLabel('Confirm New Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Reset Password' }).click();
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByLabel('Email address').fill('user@example.com');
await page.getByLabel('Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Sign In' }).click();
// TODO: Add assertion to verify successful login
});

// 13 - Verify password reset functionality works on Safari (Desktop)
test('13 - Verify password reset functionality works on Safari (Desktop)', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('NewPassword456!');
await page.getByLabel('Confirm New Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Reset Password' }).click();
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByLabel('Email address').fill('user@example.com');
await page.getByLabel('Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Sign In' }).click();
// TODO: Add assertion to verify successful login
});

// 14 - Verify password reset functionality works on Firefox (Desktop)
test('14 - Verify password reset functionality works on Firefox (Desktop)', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('NewPassword456!');
await page.getByLabel('Confirm New Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Reset Password' }).click();
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByLabel('Email address').fill('user@example.com');
await page.getByLabel('Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Sign In' }).click();
// TODO: Add assertion to verify successful login
});

// 15 - Verify password reset functionality works on Mobile device (Chrome)
test('15 - Verify password reset functionality works on Mobile device (Chrome)', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByRole('link', { name: 'Forgot Password' }).click();
await page.getByLabel('Email address').fill('user@example.com');
await page.getByRole('button', { name: 'Send Reset Link' }).click();
// TODO: Add step to check email inbox and get reset link
// await page.goto(resetLink); // Replace resetLink with the actual link
await page.getByLabel('New Password').fill('NewPassword456!');
await page.getByLabel('Confirm New Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Reset Password' }).click();
await page.goto(process.env.BASE_URL || 'https://www.website.com/sign-in/');
await page.getByLabel('Email address').fill('user@example.com');
await page.getByLabel('Password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Sign In' }).click();
// TODO: Add assertion to verify successful login
});
```