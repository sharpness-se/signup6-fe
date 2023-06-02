describe('Group gatherings', () => {
  it('User can find an event', () => {
    cy.visit('/');
    /*   Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    }); */
    //go to group page from home
    /* cy.findByRole('button', { name: /groups/i }).click(); */

    cy.contains(/groups/i).click();
    //Click on group "GroupOnlyForUnitTest"
    cy.contains(/GroupOnlyForUnitTest/i).click();

    //Select "alla sammankomster"
    cy.contains(/all events/i).click();

    //Press "EventUnitTest2" should now be on /events/-67
    cy.contains(/EventUnitTest2/i).click();

    //Cointains member list
    cy.contains(/Member/i).should('be.visible');
  });
});
