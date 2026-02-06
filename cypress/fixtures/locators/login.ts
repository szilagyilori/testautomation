export class LoginPageLocators {

    public static get loginButton(): Cypress.Chainable {
        return cy.get('[data-test="login-button"]');
    }

    public static get usernameInput(): Cypress.Chainable {
        return cy.get('[data-test="username"]');
    }

    public static get passwordInput(): Cypress.Chainable {
        return cy.get('[data-test="password"]');
    }
}

export default LoginPageLocators;
