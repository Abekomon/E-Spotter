describe('Favorites spec flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.pandascore.co/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo', {fixture: 'event-data.json'}).as('pageLoad')
    cy.visit('http://localhost:3000/')
    .wait('@pageLoad')
    .get('.card-fav-button').click()
    .get('.nav-link').click()
  })
  
  it('Should display a logo on page load', () => {
    cy.get('h1').contains('E-Spotter')
  })

  it('Should display favorites page title text', () => {
    cy.get('.favorite-text').contains('Favorited Events')
  })

  it('Should display the favorited event as an event card', () => {
    cy.get('.eventCard').should('be.visible')
    cy.get('.eventCard').contains('Dallas: North American Closed Qualifier')
  })

  it('Should allow the user to return to the dashboard view', () => {
    cy.get('.nav-link').click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('Should allow a user to remove an event from favorites', () => {
    cy.get('.card-fav-button').click()
    cy.get('.eventCard').should('not.exist')
  })

  it('Should display text when there are no favorited events', () => {
    cy.get('.card-fav-button').click()
    .get('.no-favorite-text').contains('No Favorites, add some!')
  })

  it('Shouldn\'t allow a user to add more than one of each event to favorites', () => {
    cy.get('.eventCard').should('have.length', 1)
    cy.get('.nav-link').click()
    .get('.card-fav-button').click()
    .get('.nav-link').click()
    cy.get('.eventCard').should('have.length', 1)
  })
})