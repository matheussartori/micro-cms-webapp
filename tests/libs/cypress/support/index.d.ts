declare namespace Cypress {
  interface Chainable {
    clickOnNavLink(
      index: number
    ): void,

    clickOnMobileNavLink(
      index: number
    ): void
  }
}
