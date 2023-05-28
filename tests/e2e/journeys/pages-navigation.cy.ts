describe('Pages navigation journeys', () => {
  it('should navigate through all the pages', () => {
    cy.visit('/')

    // Clicking on about nav-link
    cy.clickOnNavLink(1)
    cy.location('pathname').should('eq', '/about')

    // Clicking on blog nav-link
    cy.clickOnNavLink(2)
    cy.location('pathname').should('eq', '/blog')

    // Clicking on contact nav-link
    cy.clickOnNavLink(3)
    cy.location('pathname').should('eq', '/contact')

    // Returning to home page
    cy.clickOnNavLink(0)
    cy.location('pathname').should('eq', '/')
  })

  it('should be able to search for a blog post', () => {
    cy.visit('/')

    cy.get('[data-testid="searchbar"]')
      .should('exist')
      .find('input')
      .first()
      .type('react')
    cy.get('[id^=react-select-][id$=-option-0]')
      .click()
    cy.location('pathname').should('contain', '/blog/read')
  })

  it('should be able to read a post from blog page', () => {
    cy.visit('/blog')

    cy.get('[data-testid="blog-post-item"]').should('exist').first().find('a').click()
    cy.location('pathname').should('contain', '/blog/read')
  })
})
