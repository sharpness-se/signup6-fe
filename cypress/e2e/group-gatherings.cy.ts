describe('Group gatherings', () => {
  it('User can find an event', () => {
    cy.visit('/');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    //go to group page from home
    //Click on group "GroupOnlyForUnitTest"
    //Select "alla sammankomster"
    //Press "EventUnitTest2" should now be on /events/-67
  });
});
