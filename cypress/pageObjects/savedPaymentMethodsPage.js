import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }
  static get addNewCard() {
    return cy.get("[class*='mat-expansion-panel-animations-enabled']");
  }
  static get nameField() {
    return cy.get("[id='mat-input-2']");
  }
  static get cardNumberField() {
    return cy.get("[id='mat-input-3']");
  }
  static get expiryMonthDropDownButton() {
    return cy.get("[id='mat-input-4']");
  }
  static get expiryYearDropDownButton() {
    return cy.get("[id='mat-input-5']");
  }
  static get submitButton() {
    return cy.get("[id='submitButton']");
  }
  static get visibleCard() {
    return cy.get("[class='mat-mdc-table mdc-data-table__table cdk-table']");
  }
}