describe('first test', () => {
  it('should go to homepage', () => {
    cy.visit('http://localhost:3000').title().should('eq', 'HiredPro');
  });
});

export const a = 1;