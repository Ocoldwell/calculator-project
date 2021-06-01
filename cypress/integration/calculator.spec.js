it ('Should check 5+2 equals 7', () => {
  // 1. Arrange 
  cy.visit('http://127.0.0.1:5500')
  // 2. Act
  cy.get('#five-btn').click();
  cy.get('#plus-button').click();
  cy.get('#two-btn').click();
  cy.get('#equals-button').click();
   // 3. Assert - How can we improve this?
   //    https://docs.cypress.io/api/commands/should.html#Yields
  cy.get('#calculator-output').invoke('val').should('contain', '7')
});

it('should check 5 -4 equals 1', () =>{
  cy.visit('http://127.0.0.1:5500')

  cy.get('#five-btn').click();
  cy.get('#minus-button').click();
  cy.get('#four-btn').click();
  cy.get('#equals-button').click();

  cy.get('#calculator-output').invoke('val').should('contain', '1')
});

it('should check 3 multiplied by 6 equals 18', () => {
  cy.visit('http://127.0.0.1:5500')

  cy.get('#three-btn').click();
  cy.get('#multiply-button').click();
  cy.get('#six-btn').click();
  cy.get('#equals-button').click();

  cy.get('#calculator-output').invoke('val').should('contain', '18');
})
it ('should check 20 divided by 5 equals 4', () => {
  cy.visit('http://127.0.0.1:5500')

  cy.get('#two-btn').click();
  cy.get('#zero-btn').click();
  cy.get('#divide-button').click();
  cy.get('#five-btn').click();
  cy.get('#equals-button').click();

  cy.get('#calculator-output').invoke('val').should('contain', '4')
})