export const updateProfile = (firstName?: string, lastName?: string) => {
  cy.getByTestId('edit-button').click();
  cy.getByTestId('firstName-field')
    .clear()
    .type(firstName ?? 'new firstName');
  cy.getByTestId('lastName-field')
    .clear()
    .type(lastName ?? 'new lastName');
  cy.getByTestId('save-button').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: 'token',
    },
    body: {
      id: '4',
      firstName: 'Tester',
      lastName: 'Tester',
      age: 18,
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Lviv',
      username: 'tester',
      avatar: 'https://avatars.githubusercontent.com/u/51513305?v=4',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      resetProfile(profileId: string): Chainable<void>;
      updateProfile(firstName?: string, lastName?: string): Chainable<void>;
    }
  }
}
