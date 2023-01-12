describe("bag", () => {
  it("should display number of checkout items", () => {
    cy.visit("/store");

    cy.addToBag();

    cy.findByLabelText(/checkout bag/i)
      .should("have.text", "1")
      .click();

    cy.removeFromBag();

    // no notification badge is shown if there are no items
    cy.findByLabelText(/checkout bag/i).should("have.text", "");
  });
});

describe("checkout item", () => {
  it("should update price on changing item quantity", () => {
    cy.visit("/store");

    cy.addToBag();

    cy.findAllByText(/^\$\d\.\d{2}/).then((prices) => {
      const originalPrice = Number(prices[0].textContent.slice(1));

      cy.findByLabelText(/checkout bag/i).click();

      cy.findByTestId(/checkout-item-price/i).as("checkout-item-price");

      // default
      cy.get("@checkout-item-price").should("have.text", prices[0].textContent);

      // increment
      cy.findByRole("button", { name: /increment item quantity/i })
        .should("be.visible")
        .click({
          force: true,
        });

      cy.get("@checkout-item-price").should(
        "have.text",
        `$${originalPrice * 2}`
      );

      // decrement
      cy.findByRole("button", { name: /decrement item quantity/i })
        .should("be.visible")
        .click({
          force: true,
        });

      cy.get("@checkout-item-price").should("have.text", `$${originalPrice}`);
    });
  });
});

describe("payment", () => {
  it("should update subtotal and total price", () => {
    cy.visit("/store");

    cy.addToBag();

    cy.findAllByText(/^\$\d\.\d{2}/).then((prices) => {
      const originalPrice = Number(prices[0].textContent.slice(1));

      cy.findByLabelText(/checkout bag/i).click();
      cy.findByRole("row", { name: /subtotal/i }).as("subtotalRow");
      cy.findByRole("row", { name: /^total/i }).as("totalRow");

      // prices of subtotal and total should be same as there are no shipping costs
      cy.get("@subtotalRow").should(
        "have.text",
        `subtotal${prices[0].textContent}`
      );
      cy.get("@totalRow").should("have.text", `total${prices[0].textContent}`);

      // increment
      cy.findByRole("button", { name: /increment item quantity/i })
        .should("be.visible")
        .click({
          force: true,
        });

      cy.get("@subtotalRow").should(
        "have.text",
        `subtotal$${originalPrice * 2}`
      );
      cy.get("@totalRow").should("have.text", `total$${originalPrice * 2}`);

      // decrement
      cy.findByRole("button", { name: /decrement item quantity/i })
        .should("be.visible")
        .click({
          force: true,
        });

      cy.get("@subtotalRow").should("have.text", `subtotal$${originalPrice}`);
      cy.get("@totalRow").should("have.text", `total$${originalPrice}`);
    });
  });
});
