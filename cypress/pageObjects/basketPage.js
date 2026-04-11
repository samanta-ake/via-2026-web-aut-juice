import { BasePage } from "./basePage";
export class BasketPage extends BasePage {
  static get url() {
    return "/#/basket";
  }
  static get checkoutButton() {
    return cy.get("[class*='mat-mdc-raised-button mat-primary']");
  }
}