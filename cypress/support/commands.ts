/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      addToBag(): void;
      removeFromBag(): void;
      incrementQuantity(): void;
      decrementQuantity(): void;
      assertItemPrice(price: number): void;
      assertPayment(price: number): void;
    }
  }
}

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

Cypress.Commands.add("decrementQuantity", () => {
  cy.findByRole("button", { name: /decrement item quantity/i })
    .should("be.visible")
    .click({
      force: true,
    });
});

Cypress.Commands.add("assertItemPrice", (price) => {
  cy.findByTestId(/checkout-item-price/i).should("have.text", `$${price}`);
});

Cypress.Commands.add("assertPayment", (price) => {
  cy.findByRole("row", { name: /subtotal/i }).should(
    "have.text",
    `subtotal$${price}`
  );
  cy.findByRole("row", { name: /^total/i }).should(
    "have.text",
    `total$${price}`
  );
});
