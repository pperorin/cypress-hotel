import { setToken } from "../../support/utils/set-token";
import { LOGIN_PORTAL_URL } from "../../support/constant";

const propertyUrl = "https://shospitality.thesuperappcrm.com/main/property/";
const propertyId = "43fc7277-d5d4-4363-b860-004ed89d0955";

describe("Property : Edit Mode", () => {
  beforeEach(() => {
    cy.viewport(1400, 1400);
  });

  // token
  it("don't have token", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught Exception:", err.message);
      return false;
    });

    cy.clearCookie("hotel-token");

    cy.visit(propertyUrl + propertyId);

    cy.url().should("eq", LOGIN_PORTAL_URL);

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

    cy.visit(propertyUrl + propertyId);
    cy.wait(5000);
    cy.get(
      "body > div.ant-notification.ant-notification-top.css-htwhyh > div:nth-child(1) > div > div > div.ant-notification-notice-description"
    ).should("contain", "invalid signature");

    cy.wait(2000);
  });

  it("valid token", () => {
    setToken();
    cy.visit(propertyUrl + propertyId);
    cy.url().should("eq", propertyUrl + propertyId);

    cy.wait(3000);
  });

  it("Input : Property Code", () => {
    setToken();
    cy.visit(propertyUrl + propertyId);

    // number
    cy.get("#property_code").clear();
    cy.get("#property_code").type(12345);
    cy.get("#property_code").should("have.value", 12345);

    cy.get("#property_code").clear().type(0);
    cy.get("#property_code").should("have.value", 0);

    cy.get("#property_code").clear().type(12345678910);
    cy.get("#property_code").should("have.value", 12345678);

    cy.get("#property_code").clear().type(-1);
    cy.get("#property_code").should("have.value", -1);
    cy.get("#property_code_help > div").should(
      "have.text",
      "Only Eng Uppercase and Number"
    );

    //     // string
    cy.get("#property_code").clear().type("abcdef");
    cy.get("#property_code").should("have.value", "ABCDEF");

    cy.get("#property_code").clear().type("00000");
    cy.get("#property_code").should("have.value", "00000");

    cy.get("#property_code").clear().type("ฟหกดฟหกด");
    cy.get("#property_code").should("have.value", "ฟหกดฟหกด");
    cy.get("#property_code_help > div").should(
      "have.text",
      "Only Eng Uppercase and Number"
    );

    cy.get("#property_code").clear().type("!@#$%^&*");
    cy.get("#property_code").should("have.value", "!@#$%^&*");
    cy.get("#property_code_help > div").should(
      "have.text",
      "Only Eng Uppercase and Number"
    );

    cy.wait(2000);
  });

  it("Input : Property Name", () => {
    setToken();
    cy.visit(propertyUrl + propertyId);

    // number
    cy.get("#property_name").clear();
    cy.get("#property_name").type(12345);
    cy.get("#property_name").should("have.value", 12345);

    cy.wait(2000);
  });
});
