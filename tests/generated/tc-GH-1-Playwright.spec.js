```typescript
// @generated
// Framework: Playwright (TypeScript)
// Generated: 2024-05-06T18:08:06.887Z | Tests: 15
// CI: GitHub Actions | Jenkins | CircleCI | GitLab CI
// Run: npx playwright test

import { test, expect, Page } from '@playwright/test';

// TC001 - Successful Password Reset - Desktop (Chrome)
test('TC001 - Successful Password Reset - Desktop (Chrome)', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('user1@example.com');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add email verification steps using a mock email service or API
  // await page.getByRole('link', { name: 'Reset password' }).click();
  // await page.locator('#password').fill('NewPassword123!');
  // await page.locator('#password_confirmation').fill('NewPassword123!');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // await expect(page.getByText('Password reset successfully.')).toBeVisible();
  // await page.locator('#login_field').fill('user1@example.com');
  // await page.locator('#password').fill('NewPassword123!');
  // await page.getByRole('button', { name: 'Sign in' }).click();
  // await expect(page).toHaveURL(/.*dashboard/);
});

// TC002 - Successful Password Reset - Mobile (Safari)
test('TC002 - Successful Password Reset - Mobile (Safari)', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('user2@example.com');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add email verification steps using a mock email service or API
  // await page.getByRole('link', { name: 'Reset password' }).click();
  // await page.locator('#password').fill('MobilePass456!');
  // await page.locator('#password_confirmation').fill('MobilePass456!');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // await expect(page.getByText('Password reset successfully.')).toBeVisible();
  // await page.locator('#login_field').fill('user2@example.com');
  // await page.locator('#password').fill('MobilePass456!');
  // await page.getByRole('button', { name: 'Sign in' }).click();
  // await expect(page).toHaveURL(/.*dashboard/);
});

// TC003 - Request Reset for Unregistered Email
test('TC003 - Request Reset for Unregistered Email', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('unregistered@example.com');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add assertion for a message indicating email not found or similar
  // await expect(page.getByText('Email not found')).toBeVisible();
});

// TC004 - Request Reset with Invalid Email Format
test('TC004 - Request Reset with Invalid Email Format', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('invalid-email');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add assertion for inline validation error
  // await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
});

// TC005 - Request Reset with Empty Email Field
test('TC005 - Request Reset with Empty Email Field', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add assertion for inline validation error
  // await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
});

// TC006 - Verify Password Reset Email Content and Link
test('TC006 - Verify Password Reset Email Content and Link', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('user3@example.com');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add email verification steps using a mock email service or API
  // TODO: Assert email subject, body, and link content
});

// TC007 - Verify Email Delivery Time (within 2 minutes)
test('TC007 - Verify Email Delivery Time (within 2 minutes)', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('user4@example.com');
  const startTime = new Date().getTime();
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add email verification steps using a mock email service or API
  // const endTime = new Date().getTime();
  // const timeDiff = (endTime - startTime) / 1000; // in seconds
  // expect(timeDiff).toBeLessThanOrEqual(120); // 2 minutes
});

// TC008 - Attempt to Use Expired Password Reset Link (after 24 hours)
test('TC008 - Attempt to Use Expired Password Reset Link (after 24 hours)', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  // TODO: Implement a way to access an expired link (e.g., by manually constructing the URL)
  // await page.goto('EXPIRED_RESET_LINK');
  // TODO: Assert for an error message indicating the link is expired
  // await expect(page.getByText('Link expired')).toBeVisible();
});

// TC009 - Attempt to Use Valid Password Reset Link (within 24 hours)
test('TC009 - Attempt to Use Valid Password Reset Link (within 24 hours)', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  // TODO: Implement a way to access a valid link (e.g., by manually constructing the URL)
  // await page.goto('VALID_RESET_LINK');
  // await page.locator('#password').fill('ValidPass789!');
  // await page.locator('#password_confirmation').fill('ValidPass789!');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // await expect(page.getByText('Password reset successfully.')).toBeVisible();
  // await page.locator('#login_field').fill('user6@example.com');
  // await page.locator('#password').fill('ValidPass789!');
  // await page.getByRole('button', { name: 'Sign in' }).click();
  // await expect(page).toHaveURL(/.*dashboard/);
});

// TC010 - Set New Password - Valid Input
test('TC010 - Set New Password - Valid Input', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  // TODO: Implement a way to access the 'Set New Password' page (e.g., by manually constructing the URL)
  // await page.goto('SET_NEW_PASSWORD_PAGE');
  // await page.locator('#password').fill('StrongPass!2024');
  // await page.locator('#password_confirmation').fill('StrongPass!2024');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // await expect(page.getByText('Password reset successfully.')).toBeVisible();
});

// TC011 - Set New Password - Too Short/Weak
test('TC011 - Set New Password - Too Short/Weak', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  // TODO: Implement a way to access the 'Set New Password' page (e.g., by manually constructing the URL)
  // await page.goto('SET_NEW_PASSWORD_PAGE');
  // await page.locator('#password').fill('short');
  // await page.locator('#password_confirmation').fill('short');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // TODO: Assert for an error message indicating the password is too short or weak
  // await expect(page.getByText('Password must be at least')).toBeVisible();
});

// TC012 - Set New Password - Reusing Current Password
test('TC012 - Set New Password - Reusing Current Password', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  // TODO: Implement a way to access the 'Set New Password' page (e.g., by manually constructing the URL)
  // await page.goto('SET_NEW_PASSWORD_PAGE');
  // await page.locator('#password').fill('OldPassword123!');
  // await page.locator('#password_confirmation').fill('OldPassword123!');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // TODO: Assert for an error message indicating the password cannot be the same
  // await expect(page.getByText('Cannot reuse current password')).toBeVisible();
});

// TC013 - Set New Password - Reusing Recently Used Password (e.g., last 3)
test('TC013 - Set New Password - Reusing Recently Used Password (e.g., last 3)', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  // TODO: Implement a way to access the 'Set New Password' page (e.g., by manually constructing the URL)
  // await page.goto('SET_NEW_PASSWORD_PAGE');
  // await page.locator('#password').fill('PreviousPass!1');
  // await page.locator('#password_confirmation').fill('PreviousPass!1');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // TODO: Assert for an error message indicating the password cannot be reused
  // await expect(page.getByText('Cannot reuse recently used password')).toBeVisible();
});

// TC014 - Verify 'Forgot Password' Link and Navigation
test('TC014 - Verify \'Forgot Password\' Link and Navigation', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await expect(page).toHaveURL(/.*password_reset/);
});

// TC015 - Request Multiple Reset Links - Use Latest
test('TC015 - Request Multiple Reset Links - Use Latest', async ({ page }: { page: Page }) => {
  test.setTimeout(30000);
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('user7@example.com');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  await page.waitForTimeout(60000); // Wait for 1 minute
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.locator('#email_field').fill('user7@example.com');
  await page.getByRole('button', { name: 'Send password reset email' }).click();
  // TODO: Add email verification steps using a mock email service or API
  // TODO: Access the latest reset link and set a new password
  // await page.getByRole('link', { name: 'Reset password' }).click();
  // await page.locator('#password').fill('LatestPass!2024');
  // await page.locator('#password_confirmation').fill('LatestPass!2024');
  // await page.getByRole('button', { name: 'Change password' }).click();
  // await expect(page.getByText('Password reset successfully.')).toBeVisible();
});
```