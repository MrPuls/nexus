import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro

test('projects header is displayed', async ({ page }) => {
  await page.goto(`/`);
  await expect(page.getByTestId('projects-header')).toBeVisible()
})

test('create project button is displayed', async ({ page }) => {
  await page.goto(`/`);
  await expect(page.getByTestId('create-project-button')).toBeVisible()
})

test('project list is displayed', async ({ page }) => {
  await page.goto(`/`);
  await expect(page.getByTestId('project-list')).toBeVisible()
})

test('create project modal is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-modal')).toBeVisible()
})

test('create project modal header is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-header')).toBeVisible()
})

test('create project modal name input field header is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-name')).toBeVisible()
})

test('create project modal description input field header is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-description')).toBeVisible()
})

test('create project modal name input field is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-name-input')).toBeVisible()
})

test('create project modal description input field is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-name-input')).toBeVisible()
})

test('create project modal submit button is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-submit-button')).toBeVisible()
})

test('create project modal close button is displayed', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-close-button')).toBeVisible()
})

test('create project modal submit button is disabled', async ({ page }) => {
  await page.goto(`/`);
  await page.getByTestId('create-project-button').click()
  await expect(page.getByTestId('create-project-submit-button')).toHaveClass(/btn-disabled/)
})

test('project card title is displayed', async ({ page }) => {
  await page.goto(`/`);
  await expect(page.getByTestId('project-card-1-title')).toBeVisible()
})

test('project card description is displayed', async ({ page }) => {
  await page.goto(`/`);
  await expect(page.getByTestId('project-card-1-description')).toBeVisible()
})

test('project card setting button is displayed', async ({ page }) => {
  await page.goto(`/`);
  await expect(page.getByTestId('project-card-1').getByTestId("project-card-settings-button")).toBeVisible()
})

test('project card setting edit button is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  await expect(settings.getByTestId("project-card-settings-edit-button")).toBeVisible()
})

test('project card setting delete button is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  await expect(settings.getByTestId("project-card-settings-delete-button")).toBeVisible()
})

test('project card setting edit modal is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  const editBtn =  settings.getByTestId('project-card-settings-edit-button')
  await editBtn.click()
  await expect(page.getByTestId("edit-project-modal")).toBeVisible()
})

test('project card setting edit modal name header is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  const editBtn =  settings.getByTestId('project-card-settings-edit-button')
  await editBtn.click()
  await expect(page.getByTestId("edit-project-modal-name-header")).toBeVisible()
})

test('project card setting edit modal description header is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  const editBtn =  settings.getByTestId('project-card-settings-edit-button')
  await editBtn.click()
  await expect(page.getByTestId("edit-project-modal-description-header")).toBeVisible()
})

test('project card setting edit modal name input is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  const editBtn =  settings.getByTestId('project-card-settings-edit-button')
  await editBtn.click()
  await expect(page.getByTestId("edit-project-modal-name-input")).toBeVisible()
})

test('project card setting edit modal description input is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  const editBtn =  settings.getByTestId('project-card-settings-edit-button')
  await editBtn.click()
  await expect(page.getByTestId("edit-project-modal-description-input")).toBeVisible()
})

test('project card setting edit modal edit button is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  const editBtn =  settings.getByTestId('project-card-settings-edit-button')
  await editBtn.click()
  await expect(page.getByTestId("edit-project-modal-edit-button")).toBeVisible()
})

test('project card setting edit modal close button is displayed', async ({ page }) => {
  await page.goto(`/`);
  const settings = page.getByTestId('project-card-1').getByTestId("project-card-settings-button")
  await settings.click()
  const editBtn =  settings.getByTestId('project-card-settings-edit-button')
  await editBtn.click()
  await expect(page.getByTestId("edit-project-modal-close-button")).toBeVisible()
})