import { BasePage } from "./basePage";
export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }
  static get selectDeliverySpeed() {
    return cy.get("[role='row']");
  }
  static get continueButton() {
    return cy.get("[aria-label='Proceed to delivery method selection']");
  }
}