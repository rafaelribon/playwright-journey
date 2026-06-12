// @ts-check
import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
});

test('Login com sucesso',{tag : '@login'}, async ({ page }) => {

  const buttonSendMail = await page.getByRole('button', { name: 'Send Mail' })
  await buttonSendMail.scrollIntoViewIfNeeded()
  await buttonSendMail.click()

  const texto = page.locator('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()
  await expect(texto).toBeVisible()
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#user').press('Tab');
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('Login com sucesso 1',{tag : '@login'}, async ({ page }) => {

  const buttonSendMail = await page.getByRole('button', { name: 'Send Mail' })
  await buttonSendMail.scrollIntoViewIfNeeded()
  await buttonSendMail.click()

  const texto = page.locator('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()
  await expect(texto).toBeVisible()
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#user').press('Tab');
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});


test('Login com sucesso 2',{tag : '@login'}, async ({ page }) => {

  const buttonSendMail = await page.getByRole('button', { name: 'Send Mail' })
  await buttonSendMail.scrollIntoViewIfNeeded()
  await buttonSendMail.click()

  const texto = page.locator('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()
  await expect(texto).toBeVisible()
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#user').press('Tab');
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});



// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
