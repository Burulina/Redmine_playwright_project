const { test, expect } = require('@playwright/test');
const {HomePage} = require('../pageobjects/homePage.js');
const {RegisterPage} = require('../pageobjects/registerPage.js');
const {DownloadPage} = require('../pageobjects/downloadPage.js');
const {RepositoryPage} = require('../pageobjects/repositoryPage.js');

const arrMainMenu = ['overview', 'download','activity', 'roadmap', 'issues', 'news', 'wiki', 'boards', 'repository'];

test.describe.serial('Redmine project: test cases', () => {
  
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
  });

  test('Register new redmine account with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.registerButton.click(); 
    await expect(page).toHaveURL('https://www.redmine.org/account/register');             
    const registerPage = new RegisterPage(page);
    await registerPage.fillInput();
    await registerPage.languageDropdown.selectOption('en-GB');
    await registerPage.submitButton.click();
    await expect(page).toHaveURL('https://www.redmine.org/login');
    await expect(registerPage.regSuccessMessage).toBeVisible();
    });


  test('Check navigation on main menu redmine.org', async ({ page }) => {     
    const homePage = new HomePage(page);
      for (let i = 0; i < arrMainMenu.length; i++) {
        await page.locator(`a[class="${arrMainMenu[i]}"]`).click();
        if (arrMainMenu[i] === 'overview') {
          await expect(page).toHaveURL('https://www.redmine.org/projects/redmine');
        } else {
          await expect(page.url().toLowerCase()).toContain(arrMainMenu[i]);
        }              
      }
    await homePage.homeButton.click();
    });


  test('Download stable releases of redmine', async ({ page }) => {
    const downloadPage = new DownloadPage(page);    
    await downloadPage.downloadButton.click();
    const count = await downloadPage.allStableReleases.count();
    for (let i = 0; i < count; i++) {
        const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        downloadPage.allStableReleases.nth(i).click()
        ]);
        console.log('Download path is:  ' + await download.path());
    }
  });

  test('Filter repository revision', async ({ page }) => {
    const repositoryPage = new RepositoryPage(page);  
    await repositoryPage.repositoryButton.click();
    await expect(page).toHaveURL(/.*repository/);
    for (let i = 0; i < 3; i++) {
      await repositoryPage.fillRevSearchInput();
      await page.keyboard.press('Enter');
      await expect (repositoryPage.allRevisions.first()).toContainText(await repositoryPage.getRevInputValue());
      await expect (repositoryPage.h2Heading).toContainText(await repositoryPage.getRevInputValue());
    }
  });

  test('Buy books about redmine from home page', async ({ page }) => {
    const homePage = new HomePage(page);
    const booksRef = homePage.allBooksRef;
    const booksCount = await booksRef.count();
    for (let i = 0; i < booksCount; i++) {     
      await booksRef.nth(i).click();
      await expect(homePage.extMarketBookTitle).toContainText('Redmine');
      await expect(page.url()).toContain('redmine');
      await page.goBack();
    }
  });

});
