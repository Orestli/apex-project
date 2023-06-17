export const addComment = (text: string) => {
  cy.getByTestId('addCommentFormInput').type(text);
  cy.getByTestId('addCommentFormButton').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
