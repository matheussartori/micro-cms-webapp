describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('should render two panels with data', () => {
    cy.get('[data-testid="about-container"]').should('exist').children().should('have.length', 2)
  })

  it('should render the header and searchbar', () => {
    cy.get('[data-testid="header"]').should('exist')
    cy.get('[data-testid="searchbar"]').should('exist')
  })
})
