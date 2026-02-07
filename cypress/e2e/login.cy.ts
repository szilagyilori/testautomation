import { credentials } from '../fixtures/constants';

describe('Login', () => {

    beforeEach(() => {

        cy.visit('/');

    });

    it('should log in successfully with valid credentials', () => {

        cy.loginToApp(credentials.standard_user, credentials.password);
        cy.url().should('include', '/inventory');

    });

});

