describe('User page', () => {
  it('Possible to navigate to user page', () => {
    cy.visit('/');

    //Navigate to group page
    cy.contains(/groups/i).click();

    //Click on group "Näsknäckarna"
    cy.contains(/Näsknäckarna/i).click();

    //Open members list
    cy.get('[data-cy="membersList"]').click();

    //Navigate to Frodo Baggins page
    cy.contains(/Frodo Baggins/i).click();

    //Frodo's title should be visible
    cy.contains(/Ringbärare/i).should('be.visible');
  });
});
