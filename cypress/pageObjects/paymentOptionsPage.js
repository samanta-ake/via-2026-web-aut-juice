import { BasePage } from "./basePage";
export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get paymentOption() {
    return cy.get('mat-row[role="row"]');
  }

  static get paymentOptionRadiobutton() {
    return cy.get('input[type="radio"]');
  }

  static get continueButton() {
    return cy.get('button[aria-label="Proceed to review"]');
  }
}