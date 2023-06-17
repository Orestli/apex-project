let currentArticleId = '';

describe('user visits article details page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.log(JSON.stringify(article));
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('article is loading successfully', () => {
    cy.getByTestId('articleDetailsInfo').should('exist');
  });

  it('displays article list recommendations', () => {
    cy.getByTestId('articleRecommendationsList').should('exist');
  });

  it('leaves comment to article', () => {
    cy.getByTestId('articleDetailsInfo');
    cy.getByTestId('addCommentForm').scrollIntoView();
    cy.addComment('comment');
    cy.getByTestId('commentCardContent').should('have.length', 1);
  });

  it('rates the article', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });

    cy.getByTestId('articleDetailsInfo');
    cy.getByTestId('ratingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
