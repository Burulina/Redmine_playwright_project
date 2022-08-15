import {expect} from '@playwright/test';

class HomePage {

    constructor(page) {
        this.page = page;
        this.homeButton = page.locator('.home');
        this.registerButton = page.locator('a[href="/account/register"]');
        this.allBooksRef = page.locator('.noborder a.external');
        this.extMarketBookTitle = page.locator('.product-info__title');       
    }
    
    async goToHomePage () {
        await this.page.goto('https://www.redmine.org/');     
        await expect(this.page).toHaveTitle("Overview - Redmine");       
    }
    
}
module.exports = {HomePage}; 