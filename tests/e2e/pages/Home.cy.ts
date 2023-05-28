describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render the hero and two articles', () => {
    cy.get('[data-testid="main-hero"').should('exist')
    cy.get('[data-testid="articles"]').should('exist').children().should('have.length', 2)
  })

  it('should render the header and searchbar', () => {
    cy.get('[data-testid="header"]').should('exist')
    cy.get('[data-testid="searchbar"]').should('exist')
  })
})
