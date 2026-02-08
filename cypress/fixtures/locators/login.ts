export class LoginPageLocators {

    public static get loginOption(): Cypress.Chainable {
        return cy.get('#login2');
    }

    public static get loginModal(): Cypress.Chainable {
        return cy.get('.modal-content');
    }

    public static get usernameInput(): Cypress.Chainable {
        return cy.get('#loginusername');
    }

    public static get passwordInput(): Cypress.Chainable {
        return cy.get('#loginpassword');
    }

    public static get loginButton(): Cypress.Chainable {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }
}

export default LoginPageLocators;
