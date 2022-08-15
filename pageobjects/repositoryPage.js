import {rand} from '../pageobjects/random.js';

class RepositoryPage {

    constructor(page) {
        this.repositoryButton = page.locator('a.repository');
        this.revSearchInput = page.locator('#rev');
        this.h2Heading = page.locator('h2');
        this.allRevisions = page.locator('.changesets a');
    }
    
    async fillRevSearchInput () {
        await this.revSearchInput.fill(String(rand(1, 2769)));
    }
    
    async getRevInputValue () {
        return await this.revSearchInput.inputValue();
    }

}
module.exports = {RepositoryPage}; 