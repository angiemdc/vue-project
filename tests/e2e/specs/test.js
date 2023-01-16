// https://docs.cypress.io/api/table-of-contents

describe('display search content', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Find your Movie');
  });
  it('should fill input search', () => {
    cy.visit('/');
    cy.get('.search__input').type('fifty');
    cy.get('button[type=submit]').click();
    cy.contains('.found__container', '3 movie found');
  });
  it('should redirect', () => {
    cy.visit('/');
    cy.get('.cards__component  li').first().click();
    cy.url()
      .should('be.equal', 'http://localhost:8080/details/337167');
  });
});
