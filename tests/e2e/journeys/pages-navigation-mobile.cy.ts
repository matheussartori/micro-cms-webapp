describe('Mobile pages navigation journeys', () => {
  beforeEach(() => {
    cy.viewport(768, 1024)
  })

  it('should navigate through all the pages on a mobile device', () => {
    cy.visit('/')

    // Clicking on about nav-link
    cy.clickOnMobileNavLink(1)
    cy.location('pathname').should('eq', '/about')

    // Clicking on blog nav-link
    cy.clickOnMobileNavLink(2)
    cy.location('pathname').should('eq', '/blog')

    // Clicking on contact nav-link
    cy.clickOnMobileNavLink(3)
    cy.location('pathname').should('eq', '/contact')

    // Returning to home page
    cy.clickOnMobileNavLink(0)
    cy.location('pathname').should('eq', '/')
  })

  it('should be able to search for a blog post on a mobile device', () => {
    cy.visit('/')

    cy.get('[data-testid="header-mobile-menu"]')
      .should('exist')
      .click()
    cy.get('[data-testid="searchbar"]')
      .should('exist')
      .find('input')
      .last()
      .type('react')
    cy.get('#react-select-5-option-0')
      .click()
    cy.location('pathname').should('contain', '/blog/read')
  })
})
