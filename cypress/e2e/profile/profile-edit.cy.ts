let profileId = '';

describe('Profile Page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('page is loading successfully', () => {
    cy.getByTestId('firstName-field').should('have.value', 'Tester');
  });

  it('edits profile', () => {
    const firstName = 'firstName';
    const lastName = 'lastName';

    cy.updateProfile(firstName, lastName);
    cy.getByTestId('firstName-field').should('have.value', firstName);
    cy.getByTestId('lastName-field').should('have.value', lastName);
  });
});
