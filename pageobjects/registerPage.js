import {randomStr, getEmailEnd} from '../pageobjects/random.js';

class RegisterPage {

constructor(page) {
    this.page = page;
    this.loginInput = page.locator('#user_login');
    this.passwordInput = page.locator('#user_password');
    this.passwordConfirmInput = page.locator('#user_password_confirmation');
    this.firstnameInput = page.locator('#user_firstname');
    this.lastnameInput = page.locator('#user_lastname');
    this.emailInput = page.locator('#user_mail');
    this.languageDropdown = page.locator('#user_language');
    this.submitButton = page.locator('input[name="commit"]');
    this.regSuccessMessage = page.locator('#flash_notice')
}

async fillInput () {
    await this.loginInput.type(randomStr(12));
    await this.passwordInput.type(randomStr(15));
    let confirmPass = await this.passwordInput.inputValue();
    await this.passwordConfirmInput.fill(confirmPass);
    await this.firstnameInput.type(randomStr(10));
    await this.lastnameInput.type(randomStr(10));
    await this.emailInput.type(randomStr(10)+getEmailEnd());
}

}
module.exports = {RegisterPage}; 
