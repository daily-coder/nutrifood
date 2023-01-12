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

  it("should persist checkout item data on page reload", () => {
    cy.visit("/store");

    cy.addToBag();

    cy.findByLabelText(/checkout bag/i).should("have.text", 1);

    cy.reload();

    cy.findByLabelText(/checkout bag/i).should("have.text", 1);
  });
});

describe("checkout item", () => {
  it("should update price on changing item quantity", () => {
    cy.visit("/store");

    cy.addToBag();

    // find the original price from store page and assert using it.
    cy.findAllByText(/^\$\d\.\d{2}/).then((prices) => {
      const originalPrice = Number(prices[0].textContent.slice(1));

      cy.findByLabelText(/checkout bag/i).click();

      cy.assertItemPrice(originalPrice);
      cy.incrementQuantity();
      cy.assertItemPrice(originalPrice * 2);
      cy.decrementQuantity();
      cy.assertItemPrice(originalPrice);
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

      // prices of subtotal and total should be same as there are no shipping costs
      cy.assertPayment(originalPrice);
      cy.incrementQuantity();
      cy.assertPayment(originalPrice * 2);
      cy.decrementQuantity();
      cy.assertPayment(originalPrice);
    });
  });
});
