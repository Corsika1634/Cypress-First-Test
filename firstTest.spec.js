/// <reference types="cypress" />
describe('User should be able', () => {
  it('to sign in with existing valid data', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=t9tjfd');
    cy.get(':nth-child(1) > .form-control').type('catecate@cate.cate').should('have.value', 'catecate@cate.cate');
    cy.get(':nth-child(2) > .form-control').type('CateCate').should('have.value', 'CateCate');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').contains('CateCateCate').should('exist');
  });
})