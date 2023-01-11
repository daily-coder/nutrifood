describe("bag", () => {
  it("should display number of checkout items", () => {
    cy.visit("/store");

    cy.findAllByRole("button", { name: /add to bag/i })
      .first()
      .should("be.visible")
      .click({ force: true })
      // same item cannot be added again
      .click({ force: true });

    cy.findByLabelText(/checkout bag/i)
      .should("have.text", "1")
      .click();

    cy.findAllByRole("button", { name: /delete/i })
      .first()
      .should("be.visible")
      .click({ force: true });

    // no notification badge is shown if there are no items
    cy.findByLabelText(/checkout bag/i).should("have.text", "");
  });
});
