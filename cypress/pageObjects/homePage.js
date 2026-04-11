import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get accountButton() {
    return cy.get("#navbarAccount");
  }
  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }
  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }
  static get searchQueryButton() {
    return cy.get("#searchQuery");
  }
  static get searchInputField() {
    return cy.get("#mat-input-1");
  }
  static get productCards() {
    return cy.get(
      "[aria-label='Click for more information about the product']",
    );
  }
  static get productCardInfo() {
    return cy.get("[class*='mdc-dialog__content']");
  }
  static get closeButton() {
    return cy.get("[class*='mat-mdc-outlined-button mat-unthemed']");
  }
  static get expandReviewButton() {
    return cy.get("[class='mat-expansion-panel-header mat-focus-indicator']");
  }
  static get reviewInfo() {
    return cy.get("[class='review-row']");
  }
  static get typeReview() {
    return cy.get("[aria-label='Text field to review a product']");
  }
  static get submitButton() {
    return cy.get("#submitButton");
  }
  static get validateCardAmount() {
    return cy.get("#mat-select-0");
  }
  static get clickChangeItemsPerPage() {
    return cy.get("[class='mat-mdc-paginator-touch-target']");
  }
  static get changeItemsPerPage() {
    return cy.get("[class='mdc-list-item__primary-text']");
  }
  static get addToBasketButton() {
    return cy.get("[class*='button mat-primary ng-star-inserted']");
  }
  static get yourBasketButton() {
    return cy.get("[class*='button mat-unthemed ng-star-inserted']");
  }
  static get ordersPaymentsButton() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }
  static get savedAddressesButton() {
    return cy.get("button[aria-label='Go to saved address page']");
  }
  static get myPaymentOptionsButton() {
    return cy.get("[aria-label='Go to saved payment methods page']");
  }
}