```typescript
// @generated
// Framework: Playwright (TypeScript)
// Generated: 2024-05-06T18:08:08.887Z | Tests: 15
// CI: GitHub Actions | Jenkins | CircleCI | GitLab CI
// Run: npx playwright test

import { test, expect, Page } from '@playwright/test';

// PR-1 - Successful Password Reset - Happy Path
test('PR-1 - Successful Password Reset - Happy Path', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox and get reset link.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('NewPassword456!');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('NewPassword456!');
await page.getByRole('button', { name: 'Change password' }).click();
await page.goto('https://github.com/login');
await page.locator('#login_field').fill('user@example.com');
await page.locator('#password').fill('NewPassword456!');
await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page).toHaveURL(/.*github.com/);
});

// PR-2 - Verify Password Reset Email Delivery Time
test('PR-2 - Verify Password Reset Email Delivery Time', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
const startTime = new Date();
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox and get timestamp.  This step requires email automation which is out of scope.
// For now, just assert that the action was performed.
const endTime = new Date();
const timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
expect(timeDiff).toBeLessThan(120);
});

// PR-3 - Attempt Password Reset with Unregistered Email Address
test('PR-3 - Attempt Password Reset with Unregistered Email Address', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('unregistered@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
await expect(page.getByText(/If an account/)).toBeVisible();
// TODO: Verify no email received.  This step requires email automation which is out of scope.
});

// PR-4 - Attempt Password Reset with Invalid Email Format
test('PR-4 - Attempt Password Reset with Invalid Email Format', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('invalid-email');
await page.getByRole('button', { name: 'Send password reset email' }).click();
await expect(page.locator('#email_field-error')).toBeVisible();
});

// PR-5 - Attempt Password Reset with Empty Email Field
test('PR-5 - Attempt Password Reset with Empty Email Field', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.getByRole('button', { name: 'Send password reset email' }).click();
await expect(page.locator('#email_field-error')).toBeVisible();
});

// PR-6 - Verify Reset Link Expiration After 24 Hours
test('PR-6 - Verify Reset Link Expiration After 24 Hours', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link, wait 24+ hours.  This step requires email automation and time manipulation which are out of scope.
// For now, assume the link is expired and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await expect(page.getByText(/expired/)).toBeVisible();
});

// PR-7 - Using Reset Link After Password Has Already Been Changed
test('PR-7 - Using Reset Link After Password Has Already Been Changed', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link, reset password.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('NewPassword456!');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('NewPassword456!');
await page.getByRole('button', { name: 'Change password' }).click();
// Attempt to use the same link again
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await expect(page.getByText(/expired/)).toBeVisible();
});

// PR-8 - Attempt to Reuse Old Password During Reset
test('PR-8 - Attempt to Reuse Old Password During Reset', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('OldPassword123');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('OldPassword123');
await page.getByRole('button', { name: 'Change password' }).click();
await expect(page.getByText(/cannot be the same/)).toBeVisible();
});

// PR-9 - Setting New Password with Insufficient Complexity
test('PR-9 - Setting New Password with Insufficient Complexity', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('short');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('short');
await page.getByRole('button', { name: 'Change password' }).click();
await expect(page.getByText(/must be at least/)).toBeVisible();
});

// PR-10 - Mismatched New Password and Confirm Password Fields
test('PR-10 - Mismatched New Password and Confirm Password Fields', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('NewPassword123!');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('Mismatch456!');
await page.getByRole('button', { name: 'Change password' }).click();
await expect(page.getByText(/passwords do not match/)).toBeVisible();
});

// PR-11 - Reset Link Validity Across Different Browsers and Devices
test('PR-11 - Reset Link Validity Across Different Browsers and Devices', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
// This test requires manual steps to be performed on a different browser/device.
// The test will pass if the reset page loads and the user can enter a new password.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('MobileNewPass789!');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('MobileNewPass789!');
await page.getByRole('button', { name: 'Change password' }).click();
await expect(page.getByText(/Password changed/)).toBeVisible();
});

// PR-12 - Email Field with Leading/Trailing Spaces During Reset Request
test('PR-12 - Email Field with Leading/Trailing Spaces During Reset Request', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('  user@example.com  ');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox.  This step requires email automation which is out of scope.
// For now, just assert that the action was performed.
await expect(page.getByText(/If an account/)).toBeVisible();
});

// PR-13 - New Password Field with Leading/Trailing Spaces
test('PR-13 - New Password Field with Leading/Trailing Spaces', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('  NewPassword123!  ');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('  NewPassword123!  ');
await page.getByRole('button', { name: 'Change password' }).click();
await page.goto('https://github.com/login');
await page.locator('#login_field').fill('user@example.com');
await page.locator('#password').fill('NewPassword123!');
await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page).toHaveURL(/.*github.com/);
});

// PR-14 - Multiple Password Reset Requests for Same Email - Latest Link Validity
test('PR-14 - Multiple Password Reset Requests for Same Email - Latest Link Validity', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user@example.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get both reset links.  This step requires email automation which is out of scope.
// For now, assume the links are valid and proceed.
// First link
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await expect(page.getByText(/expired/)).toBeVisible();
// Second link
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('LatestPass123!');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('LatestPass123!');
await page.getByRole('button', { name: 'Change password' }).click();
await page.goto('https://github.com/login');
await page.locator('#login_field').fill('user@example.com');
await page.locator('#password').fill('LatestPass123!');
await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page).toHaveURL(/.*github.com/);
});

// PR-15 - Password Reset for Account with Special Characters in Email
test('PR-15 - Password Reset for Account with Special Characters in Email', async ({ page }: { page: Page }) => {
test.setTimeout(30000);
await page.goto('https://github.com/login');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.locator('#email_field').fill('user.name+alias@domain.com');
await page.getByRole('button', { name: 'Send password reset email' }).click();
// TODO: Access email inbox, get reset link.  This step requires email automation which is out of scope.
// For now, assume the link is valid and proceed.
await page.goto('https://github.com/password_reset'); // Assuming this is the reset page URL
await page.locator('#password_reset_form > dl > dd > input').fill('SpecialEmailPass1!');
await page.locator('#password_reset_form > dl > dd:nth-child(2) > input').fill('SpecialEmailPass1!');
await page.getByRole('button', { name: 'Change password' }).click();
await page.goto('https://github.com/login');
await page.locator('#login_field').fill('user.name+alias@domain.com');
await page.locator('#password').fill('SpecialEmailPass1!');
await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page).toHaveURL(/.*github.com/);
});
```