describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/blog')
  })

  it('should render at least the two initial blog posts', () => {
    cy.get('[data-testid="blog-post-container"]').should('exist').children().should('have.length.at.least', 2)
  })

  it('should render the header and searchbar', () => {
    cy.get('[data-testid="header"]').should('exist')
    cy.get('[data-testid="searchbar"]').should('exist')
  })
})
