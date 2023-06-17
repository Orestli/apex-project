describe('user visits article list page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });

  it('articles is loading successfully', () => {
    cy.getByTestId('articleList').should('exist');
    cy.getByTestId('articleListItem').should('have.length.greaterThan', 3);
  });

  it('articles is loading successfully (fixtures)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });

    cy.getByTestId('articleList').should('exist');
    cy.getByTestId('articleListItem').should('have.length.greaterThan', 3);
  });
});
