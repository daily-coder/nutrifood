Cypress.Commands.add("addToBag", () => {
  cy.findAllByRole("button", { name: /add to bag/i })
    .first()
    .should("be.visible")
    .click({ force: true });
});

Cypress.Commands.add("removeFromBag", () => {
  cy.findAllByRole("button", { name: /delete/i })
    .first()
    .should("be.visible")
    .click({ force: true });
});

Cypress.Commands.add("incrementQuantity", () => {
  cy.findByRole("button", { name: /increment item quantity/i })
    .should("be.visible")
    .click({
      force: true,
    });
});
