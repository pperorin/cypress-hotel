import { setToken } from "../../support/utils/set-token";

describe("template spec", () => {
  it("don't have token", () => {
    cy.clearCookie("hotel-token");

    cy.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught Exception:", err.message);
      return false;
    });

    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code");

    cy.url().should("eq", "https://portal.thesuperappcrm.com/login");
  });

  it("invalid token", () => {
    const validToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE3MDEwNjkxNDYsImV4cCI6MTcwMTE1NTU0Nn0.3fHZpJdxpOwol3-PJq9mD89MIA9rGtD-Y7qNnqv1OKK";
    cy.setCookie("hotel-token", validToken);

    cy.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught Exception:", err.message);
      return false;
    });

    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code");
    cy.get(
      "body > div.ant-notification.ant-notification-top.css-htwhyh > div:nth-child(1) > div > div > div.ant-notification-notice-description"
    ).should("contain", "invalid signature");
  });
});
