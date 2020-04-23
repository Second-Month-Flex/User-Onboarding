describe("Testing our volunteer form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("add inputs and submits friend", function () {
    cy.get('input[name="first_name"]')
      .type("Bebop")
      .should("have.value", "Bebop");
    cy.get('input[name="email"]')
      .type("bebop@gmail.com")
      .should("have.value", "bebop@gmail.com");
    cy.get('input[name="password"]')
      .type("password")
      .should("have.value", "password");
    cy.get("[type=checkbox]").check().should("be.checked");
    cy.get("button").click();
  });

  it("make sure error message pops up", function () {
    cy.get('input[name="first_name"]').type("Adonis").clear();
  });
});
