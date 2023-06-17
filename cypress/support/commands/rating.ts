export const setRate = (stars = 5, feedback = 'feedback') => {
  cy.getByTestId(`startRating-${stars}`).click();
  cy.getByTestId('ratingCardInput').type(feedback);
  cy.getByTestId('ratingCardSendButton').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(stars: number, feedback: string): Chainable<void>;
    }
  }
}
