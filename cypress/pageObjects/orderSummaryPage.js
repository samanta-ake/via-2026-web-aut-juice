import { BasePage } from "./basePage";
export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/order-summary";
  }
  static get checkoutButton() {
    return cy.get("#checkoutButton");
  }
}