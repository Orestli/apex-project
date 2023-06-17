import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User is not authenticated', () => {
    it('redirects to home page', () => {
      cy.visit('/');
      cy.get(selectByTestId('mainPage')).should('exist');
    });

    it('redirects to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('mainPage')).should('exist');
    });

    it('redirects to not found page', () => {
      cy.visit('/notFoundPageUrl');
      cy.get(selectByTestId('notFoundPage')).should('exist');
    });
  });

  describe('User is authenticated', () => {
    beforeEach(() => {
      cy.login();
    });

    it('redirects to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('profilePage')).should('exist');
    });

    it('redirects to articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('articlesPage')).should('exist');
    });
  });
});
