import { setToken } from "../../support/utils/set-token";

describe("Global Code : List View", () => {
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

    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code");

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

    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code");
    cy.get(
      "body > div.ant-notification.ant-notification-top.css-htwhyh > div:nth-child(1) > div > div > div.ant-notification-notice-description"
    ).should("contain", "invalid signature");

    cy.wait(2000);
  });

  it("valid token", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code");
    cy.url().should(
      "eq",
      "https://shospitality.thesuperappcrm.com/main/global-code"
    );

    cy.wait(3000);
  });

  it("Input : Code Type Code", () => {
    setToken();
    cy.visit("https://shospitality.thesuperappcrm.com/main/global-code");

    cy.get(
      "#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.tw-w-full.tw-h-10.tw-bg-white.tw-rounded.tw-shadow.tw-p-2.tw-flex.tw-gap-1.tw-items-center > a > button"
    ).click();
    cy.url().should(
      "eq",
      "https://shospitality.thesuperappcrm.com/main/global-code/new"
    );
  });
});
