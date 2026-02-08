import { credentials } from '../fixtures/constants';
import { LoginPageLocators } from '../fixtures/locators';

describe('Login', () => {

    beforeEach(() => {
        cy.intercept('GET', '/entries').as('homepage');
        cy.visit('/');

    });

    it('should log in successfully with valid credentials', () => {

        LoginPageLocators.loginOption.should('be.visible');

        cy.wait('@homepage')
            .its('response.statusCode')
            .should('eq', 200);

        cy.intercept('POST', '/check').as('loginRequest');
        LoginPageLocators.loginOption.click();
        LoginPageLocators.loginModal.should('be.visible');
        cy.wait(500);
        LoginPageLocators.usernameInput.type(credentials.user);
        LoginPageLocators.passwordInput.type(credentials.password);
        LoginPageLocators.loginButton.click();

        cy.wait('@loginRequest').then((interception) => {

            expect(interception.response?.statusCode).to.eq(200);

            expect(interception.response?.body.Item.username).to.eq(credentials.user);

            expect(interception.response?.body.Item.token).to.exist;
        });


        // cy.loginToApp(credentials.standard_user, credentials.password);
        // cy.url().should('include', '/inventory');

    });

});

