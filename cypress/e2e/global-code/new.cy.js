import { setToken } from "../../support/utils/set-token";

describe("Global Code : New", () => {
  beforeEach(() => {
    cy.viewport(1400, 1200);
  });

  // token
  it("don't have token", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught Exception:", err.message);
      return false;
    });

    cy.clearCookie("hotel-token");

    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");

    cy.url().should("eq", "https://portal.thesuperappcrm.com/login");

    cy.wait(2000);
  });

  it("invalid token", () => {
    const validToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE3MDEwNjkxNDYsImV4cCI6MTcwMTE1NTU0Nn0.3fHZpJdxpOwol3-PJq9mD89MIA9rGtD-Y7qNnqv1OKK";
    cy.setCookie("hotel-token", validToken);

    cy.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught Exception:", err.message);
      return false;
    });

    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");
    cy.get(
      "body > div.ant-notification.ant-notification-top.css-htwhyh > div:nth-child(1) > div > div > div.ant-notification-notice-description"
    ).should("contain", "invalid signature");

    cy.wait(2000);
  });

  it("valid token", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");
    cy.url().should(
      "eq",
      "https://shospitality.thesuperappcrm.com/main/global-code/new"
    );

    cy.wait(3000);
  });

  it("Input : Code Type Code", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");

    // number
    cy.get("#code_type_code").type(12345);
    cy.get("#code_type_code").should("have.value", 12345);

    cy.get("#code_type_code").clear().type(0);
    cy.get("#code_type_code").should("have.value", 0);

    cy.get("#code_type_code").clear().type(12345678910);
    cy.get("#code_type_code").should("have.value", 12345678);

    cy.get("#code_type_code").clear().type(-1);
    cy.get("#code_type_code").should("have.value", -1);
    cy.get("#code_type_code_help > div").should(
      "have.text",
      "Only Eng Uppercase and Number"
    );

    // string
    cy.get("#code_type_code").clear().type("abcdef");
    cy.get("#code_type_code").should("have.value", "ABCDEF");

    cy.get("#code_type_code").clear().type("00000");
    cy.get("#code_type_code").should("have.value", "00000");

    cy.get("#code_type_code").clear().type("ฟหกดฟหกด");
    cy.get("#code_type_code").should("have.value", "ฟหกดฟหกด");
    cy.get("#code_type_code_help > div").should(
      "have.text",
      "Only Eng Uppercase and Number"
    );

    cy.get("#code_type_code").clear().type("!@#$%^&*");
    cy.get("#code_type_code").should("have.value", "!@#$%^&*");
    cy.get("#code_type_code_help > div").should(
      "have.text",
      "Only Eng Uppercase and Number"
    );

    cy.wait(2000);
  });

  it("Input : Code Type Name", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");

    // number
    cy.get("#code_type_name").type(12345);
    cy.get("#code_type_name").should("have.value", 12345);

    cy.get("#code_type_name").clear().type(0);
    cy.get("#code_type_name").should("have.value", 0);

    cy.get("#code_type_name").clear().type(12345678910);
    cy.get("#code_type_name").should("have.value", 12345678910);

    cy.get("#code_type_name").clear().type(-1);
    cy.get("#code_type_name").should("have.value", -1);

    // string
    cy.get("#code_type_name").clear().type("abcdef");
    cy.get("#code_type_name").should("have.value", "abcdef");

    cy.get("#code_type_name").clear().type("00000");
    cy.get("#code_type_name").should("have.value", "00000");

    cy.get("#code_type_name").clear().type("ฟหกดฟหกด");
    cy.get("#code_type_name").should("have.value", "ฟหกดฟหกด");

    cy.get("#code_type_name").clear().type("!@#$%^&*");
    cy.get("#code_type_name").should("have.value", "!@#$%^&*");

    cy.wait(2000);
  });

  it("Input : Function Area", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");

    // click
    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div"
    ).click();
    cy.get("#functional_area_list_2 > div").click();
    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item"
    ).should("contain.text", "EV Events");

    // enter string
    cy.get("#functional_area").clear().type("CM common{enter}");
    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item"
    ).should("contain.text", "CM Common");

    // enter invalid
    cy.get("#functional_area").clear().type("OOOOO{enter}");
    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item"
    ).should("contain.text", "CM Common");
    cy.wait(2000);
  });

  it("Input : Allow Property Level", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");

    // click
    cy.get("#allow_property_level")
      .click()
      .should("have.attr", "aria-checked", "true");
    cy.get("#allow_property_level")
      .click()
      .should("have.attr", "aria-checked", "false");
    cy.wait(2000);
  });

  it("Submit : Missing required fields", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");

    cy.get("#code_type_name").type("test-cypress");

    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div"
    ).click();
    cy.get("#functional_area_list_2 > div").click();
    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item"
    ).should("contain.text", "EV Events");

    cy.get(
      "#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)"
    ).click();
    cy.get("#code_type_code_help > div").should(
      "have.text",
      "Code Type Code is required!"
    );
    cy.wait(2000);
  });

  it("Submit : Contains all required fields", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code/new");

    cy.get("#code_type_code").type("cypress");

    cy.get("#code_type_name").type("test-cypress");

    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div"
    ).click();
    cy.get("#functional_area_list_2 > div").click();
    cy.get(
      "#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item"
    ).should("contain.text", "EV Events");
    cy.get(
      "#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)"
    ).click();
    // cy.
    cy.wait(2000);
  });
});
