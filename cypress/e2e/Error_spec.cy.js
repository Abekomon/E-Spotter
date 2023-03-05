describe('Error view flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/error')
  })
  
  it('Should display a logo', () => {
    cy.get('h1').should('be.visible')
  })

  it('Should display a message stating there was an error', () => {
    cy.get('h2').contains('Something went wrong!')
    cy.get('p').contains('If the problem persists, please try again later')
  })

  it('Should allow the user to reattempt site functionality by returning to the home page', () => {
    cy.intercept('GET', 'https://api.pandascore.co/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo', {fixture: 'event-data.json'})
    cy.get('.error-link').click()
    .url().should('eq', 'http://localhost:3000/')
  })
})