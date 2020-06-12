/// <reference types="cypress" />
// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("div", "视频源自腾讯视频，可能包含广告，请在广告结束后观看");
  });
});
