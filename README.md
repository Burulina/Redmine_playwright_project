This is redmine.org test project ver. 1.0
1. Documentation for project (test plan, test cases) is located in the root directory in the "Docs" folder;

2. To run auto tests and genereate allure report manually on local machine make such steps:
2.1 Write "npm run test" in terminal and press "Enter", wait for auto test execution;
2.2 Write "npm run allure-generate" in terminal and press "Enter", wait for allure report generation;
2.3 Write "npm run allure-open" in terminal and press "Enter", wait for allure report opening.

3. Project included .yml file, which run auto tests from redmine project in GitHub actions after every push on main branch of repository.
To see allure report after execution auto tests in GitHub actions you should open URL: https://github.com/Burulina/Redmine_playwright_project/blob/gh-pages/index.html and copy URL with allure report from it (for example: https://Burulina.github.io/Redmine_playwright_project/1/). Paste copied URL to browser search bar and press "Enter", wait for allure report opening.