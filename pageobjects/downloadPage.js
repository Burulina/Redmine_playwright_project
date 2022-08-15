
class DownloadPage {

    constructor(page) {
        this.downloadButton = page.locator('a.download');
        this.allStableReleases = page.locator('a[href*="releases/redmine"]');
    }
    
}
module.exports = {DownloadPage}; 