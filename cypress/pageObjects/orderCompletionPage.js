import { BasePage } from "./basePage";
export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/order-completion/fe01-26faf3e413be7375";
  }
  static get orderConfirmation() {
    return cy.get("[class='order-completion-header']");
  }
}