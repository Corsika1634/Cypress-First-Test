/// <reference types="cypress" />
describe('User should be able', () => {
  let user;
  before(function () {
    cy.task('freshUser').then((freshUser) => {
        user = freshUser;
    });
});

  it('to registrate a new account with valid data', () => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=q1siw4');
    cy.get(':nth-child(1) > .form-control').type(user.username).should('have.value', user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email).should('have.value', user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password).should('have.value', user.password);
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').contains(user.username).should('exist');
  });
})