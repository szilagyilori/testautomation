/// <reference types="cypress" />
import { LoginPageLocators } from '../fixtures/locators';


Cypress.Commands.add('loginToApp', (username: string, password: string) => {
  LoginPageLocators.usernameInput.type(username);
  LoginPageLocators.passwordInput.type(password);
  LoginPageLocators.loginButton.click();
});
