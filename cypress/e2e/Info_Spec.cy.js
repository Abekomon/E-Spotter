describe('Individual Event Info spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.pandascore.co/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo', {fixture: 'event-data.json'}).as('pageLoad')
    cy.visit('http://localhost:3000/')
    cy.wait('@pageLoad')
    cy.get('.eventCard').click()
  })
  
  it('Should have a logo at the top of the page', () => {
    cy.get('h1').contains('E-Spotter')
  })

  it('Should display info about the selected event', () => {
    cy.get('h2').contains('CS:GO - IEM - Dallas: North American Closed Qualifier 2023')
    cy.get('h3').contains('Playoffs')
    cy.get('.info').contains('Saturday, Mar 04 @ 5 PM (EST)')
    cy.get('.info').contains('Strife, Vendetta, Nouns, LOS + oNe')
    cy.get('.info').contains('6')
  })

  it('Should display an event logo', () => {
    cy.get('.info-img').should('be.visible')
  })

  it('Should allow a user to favorite the selected event', () => {
    cy.get('.info-fav-button').click().contains('Added!')
    cy.get('.info-home-link').click()
    .get('.nav-link').click()
    .get('.eventCard').should('be.visible')
  })

  it('Should allow a user to return to the dashboard', () => {
    cy.get('.info-home-link').click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('Should show an error page if the url doesn\'t match an expected event', () => {
      cy.visit('http://localhost:3000/event/99')
      .url().should('eq', 'http://localhost:3000/error')
      cy.get('h2').contains('Something went wrong!')
  })
})