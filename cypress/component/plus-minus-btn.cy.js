import { PlusMinusButton } from "../../component/plus-minus-btn";

describe("PlusMinusButton", () => {
  it("playground", () => {
    cy.mount(<PlusMinusButton />);
    cy.get("#count").should("have.text", "0");
    cy.wait(1000);

    // plus 1
    cy.get("#plus").click();
    cy.get("#count").should("have.text", "1");
    cy.wait(1000);

    // minus 3
    cy.get("#minus").click().click().click();
    cy.get("#count").should('have.text', '-2')
    cy.wait(1000);
  });
});
