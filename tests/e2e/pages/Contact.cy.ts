describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('should render the avatar, name and contact links', () => {
    cy.get('[data-testid="contact-container"]').should('exist').children().contains(/matheus sartori/i)
    cy.get('[data-testid="contact-avatar"]').should('exist')
    cy.get('[data-testid="contact-info"]').should('exist').children().contains('a')
  })

  it('should render the header and searchbar', () => {
    cy.get('[data-testid="header"]').should('exist')
    cy.get('[data-testid="searchbar"]').should('exist')
  })
})
