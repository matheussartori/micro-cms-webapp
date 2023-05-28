Cypress.Commands.add('clickOnNavLink', (index: number) => {
  cy.get('[data-testid="header-wide-navigation"]')
    .should('exist')
    .children()
    .eq(index)
    .click()
})

Cypress.Commands.add('clickOnMobileNavLink', (index: number) => {
  cy.get('[data-testid="header-mobile-menu"]')
    .should('exist')
    .click()

  cy.get('[data-testid="header-mobile-navigation"]')
    .find('a')
    .eq(index)
    .click()
})
