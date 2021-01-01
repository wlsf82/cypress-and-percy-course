describe('Ticketbox', () => {
  beforeEach(() => cy.visit('index.html'));

  it('Checks for the initial state', () => {
    cy.percySnapshot();
  });

  it('Checks for invalid email', () => {
    cy.get('#email').type('johndoe-example.com');
    cy.percySnapshot();
  });
});
