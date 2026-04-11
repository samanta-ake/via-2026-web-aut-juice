import { BasePage } from "./basePage";
export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }
  static get selectAddress() {
    return cy.get("[role='row']");
  }
  static get continueButton() {
    return cy.get("[aria-label='Proceed to payment selection']");
  }
}
