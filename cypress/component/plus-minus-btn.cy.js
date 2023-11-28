import { PlusMinusButton } from "../../component/plus-minus-btn";

describe("PlusMinusButton", () => {
  it("playground", () => {
    cy.mount(<PlusMinusButton />);
    cy.get("body > div:nth-child(5) > div > article").should("have.text", "0");
    // plus 1
    cy.get("body > div:nth-child(5) > div > button:nth-child(1)").click();
    cy.get("body > div:nth-child(5) > div > article").should("have.text", "1");

    // minus 3
    cy.get("body > div:nth-child(5) > div > button:nth-child(3)").click().click().click();
    cy.get("body > div:nth-child(5) > div > article").should('have.text', '-2')
  });
});
