declare namespace Cypress {
    interface Chainable {

        loginToApp(username: string, password: string): Chainable<void>;
    }
}