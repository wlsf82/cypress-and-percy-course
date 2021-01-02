describe('Ticketbox', () => {
  beforeEach(() => cy.visit('index.html'));

  it('Checks for the initial state', () => {
    cy.percySnapshot();
  });

  it('Checks for invalid email', () => {
    cy.get('#email').type('johndoe-example.com');
    cy.percySnapshot();
  });

  it('Enables submittion after all mandatory fields are filled', () => {
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#email').type('john@doe.com');
    cy.get('#agree').check();
    cy.percySnapshot();
  });

  it('Updates agreement based on full name, tickets quantity, and type', () => {
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get("#ticket-quantity").select("4");
    cy.get("#vip").check();
    cy.percySnapshot();
  });
});
