describe('Default route view flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/something')
  })
  
  it('Should display a logo', () => {
    cy.get('h1').should('be.visible')
  })

  it('Should display a message saying that the url is not recognized', () => {
    cy.get('h2').contains('Huh, we can\'t seem to find that.')
  })

  it('Should direct the user to the home page', () => {
    cy.intercept('GET', 'https://api.pandascore.co/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo', {fixture: 'event-data.json'})
    cy.get('.error-link').click()
    .url().should('eq', 'http://localhost:3000/')
  })
})