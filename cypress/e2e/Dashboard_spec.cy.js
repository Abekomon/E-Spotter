describe('Dashboard Spec Flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.pandascore.co/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo', {fixture: 'event-data.json'}).as('pageLoad')
    cy.visit('http://localhost:3000/')
  })
  
  it('Should display a logo on page load', () => {
    cy.get('h1').contains('E-Spotter')
  })
  
  it('Should display card(s) with event information on page load', () => {
    cy.get('.eventCard').should('be.visible')
  })
  
  it('Should display specific event information on the card', () => {
    cy.get('.eventCard').contains('IEM')
    cy.get('.eventCard').contains('Dallas: North American Closed Qualifier')
    cy.get('.eventCard').contains('CS:GO')
  })

  it('Should display a logo for each event', () => {
    cy.get('.leagueLogo').should('be.visible')
  })
  
  it('Should display a dropdown menu that defaults to All on page load', () => {
    cy.get('.select-form').contains('All')
  })

  it('Should allow you to select a videogame from the dropdown, and update new event information', () => {
    cy.intercept('GET', 'https://api.pandascore.co/valorant/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo', {fixture: 'valorant-data.json'}).as('Val Data')
    cy.wait('@pageLoad')
    cy.get('.select-form').select('Valorant')
    cy.wait('@Val Data')
    cy.get('.eventCard').contains('Valorant')
    cy.get('.eventCard').contains('Italy: Rinascimento Split 1')
  })

  it('Should have a favorites button on the top of each card that changes on click', () => {
    cy.get('.card-fav-button').contains('Favorite')
    .click().contains('Added!')
  })

  it('User should be able to add an element to favorites when clicking the favorite button', () => {
    cy.get('.card-fav-button').click().get('.dashboard-nav a').click()
    cy.url().should('include', '/favorites')
    cy.get('.eventCard').contains('Dallas: North American Closed Qualifier')
  })

  it('User should be able to click an event and see expanded information on that event on a new page', () => {
    cy.get('.eventLink').click()
    cy.url().should('include', '/event')
    cy.get('.infoContainer').contains('CS:GO')
    cy.get('.infoContainer').contains('Playoffs')
    cy.get('.infoContainer').contains('Strife, Vendetta, Nouns, LOS + oNe')
  })

  it('Should redirect you to an error page if the defauly api call has a bad response', () => {
    cy.intercept('GET', 'https://api.pandascore.co/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo', {statusCode: 500})
    cy.url().should('include', '/error')
  })

  it('Should redirect you to an error page if the url is not recognized', () => {
    cy.visit('http://localhost:3000/gamers')
    .get("h2").contains('Huh, we can\'t seem to find that.')
  })
})