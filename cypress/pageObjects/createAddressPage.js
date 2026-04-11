import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }
  static get countryField() {
    return cy.get("[placeholder='Please provide a country.']");
  }
  static get nameField() {
    return cy.get("[placeholder='Please provide a name.']");
  }
  static get mobileNumberField() {
    return cy.get("[placeholder='Please provide a mobile number.']");
  }
  static get zipCode() {
    return cy.get("[placeholder='Please provide a ZIP code.']");
  }
  static get addAddress() {
    return cy.get("[placeholder='Please provide an address.']");
  }
  static get addCity() {
    return cy.get("[placeholder='Please provide a city.']");
  }
  static get addState() {
    return cy.get("[placeholder='Please provide a state.']");
  }
  static get submitButton() {
    return cy.get("#submitButton");
  }
  static get validateAddress() {
    return cy.get("[class*='cdk-table address-table ng-star-inserted']");
  }
}
