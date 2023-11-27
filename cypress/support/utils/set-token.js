export const setToken = () => {
  cy.request({
    method: "POST",
    url: "https://portal.thesuperappcrm.com/api/login",
    body: {
      username: "admin-portal",
      password: "P@ssw0rd",
    },
  }).then((portalResponse) => {
    const portalToken = portalResponse.body.token;
    cy.request({
      method: "GET",
      url: `https://shospitality.thesuperappcrm.com/api/login/portal?token=${portalToken}`,
    });
  });
};
