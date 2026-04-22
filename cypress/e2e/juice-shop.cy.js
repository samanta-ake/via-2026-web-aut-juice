import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { BasketPage } from "../pageObjects/basketPage";
import { SelectAddressPage } from "../pageObjects/selectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/deliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/paymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/orderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/savedAddressesPage";
import { CreateAddressPage } from "../pageObjects/createAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/savedPaymentMethodsPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();

      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.loginButton.click();

      HomePage.accountButton.click();
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.notYetCustomerButton.click();

      const randomId = Date.now();
      const email = `user_${randomId}@ebox.com`;
      const password = "SecurePass+1";

      RegistrationPage.emailField.type(email);
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);

      RegistrationPage.securityQuestionDropDown.click();
      RegistrationPage.dropdownMenuOptions
        .contains("Your first school?")
        .click();

      RegistrationPage.securityAnswerField.type("Valmiera School");
      RegistrationPage.registerButton.click();

      LoginPage.emailField.type(email);
      LoginPage.passwordField.type(password);
      LoginPage.loginButton.click();

      HomePage.accountButton.click();
      HomePage.userProfileButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      HomePage.searchQueryButton.click();
      HomePage.searchInputField.type("Lemon Juice{enter}");

      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      HomePage.productCardInfo.should(
        "contain.text",
        "Sour but full of vitamins.",
      );
    });

    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      HomePage.searchQueryButton.click();
      HomePage.searchInputField.type("500ml{enter}");

      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      HomePage.productCardInfo.should(
        "contain.text",
        "Sour but full of vitamins.",
      );
    });

    it("Search 500ml and validate cards", () => {
      HomePage.searchQueryButton.click();
      HomePage.searchInputField.type("500ml{enter}");

      HomePage.productCards.contains("Strawberry Juice (500ml)").click();
      HomePage.productCardInfo.should("contain.text", "Sweet & tasty!");
      HomePage.closeButton.click();

      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      HomePage.productCardInfo.should(
        "contain.text",
        "Sour but full of vitamins.",
      );
      HomePage.closeButton.click();

      HomePage.productCards.contains("Eggfruit Juice (500ml)").click();
      HomePage.productCardInfo.should(
        "contain.text",
        "Now with even more exotic flavour.",
      );
    });

    it("Read a review", () => {
      HomePage.searchQueryButton.click();
      HomePage.searchInputField.type("Facemask{enter}");

      HomePage.productCards
        .contains('OWASP Juice Shop "King of the Hill" Facemask')
        .click();

      HomePage.expandReviewButton.click();
      HomePage.reviewInfo.should(
        "contain.text",
        "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!",
      );
    });

    it("Add a review", () => {
      HomePage.searchQueryButton.click();
      HomePage.searchInputField.type("Raspberry{enter}");
      HomePage.productCards.contains("Raspberry Juice (1000ml)").click();

      cy.wait(500);

      HomePage.typeReview.type("Strong taste but pretty good");
      HomePage.submitButton.click();
      HomePage.expandReviewButton.click();

      HomePage.reviewInfo.should(
        "contain.text",
        "Strong taste but pretty good",
      );
    });

    it("Validate product card amount", () => {
      HomePage.validateCardAmount.contains("12");

      HomePage.clickChangeItemsPerPage.click();
      HomePage.changeItemsPerPage.contains("24").click();
      HomePage.changeItemsPerPage.should("contain.text", "24");

      HomePage.clickChangeItemsPerPage.click();
      HomePage.changeItemsPerPage.contains("36").click();
      HomePage.changeItemsPerPage.should("contain.text", "36");
    });

    it("Buy Girlie T-shirt", () => {
      HomePage.searchQueryButton.click();
      HomePage.searchInputField.type("Girlie{enter}");
      HomePage.addToBasketButton.click();
      HomePage.yourBasketButton.click();

      BasketPage.checkoutButton.click();

      SelectAddressPage.selectAddress.contains("United Fakedom").click();
      SelectAddressPage.continueButton.click();

      DeliveryMethodPage.selectDeliverySpeed
        .contains("Standard Delivery")
        .click();
      DeliveryMethodPage.continueButton.click();

      PaymentOptionsPage.paymentOption.invoke("text").then((text) => {
        if (text.includes("5678")) {
          PaymentOptionsPage.paymentOptionRadiobutton.click();
        }
      });

      PaymentOptionsPage.continueButton.click();
      OrderSummaryPage.checkoutButton.click();

      OrderCompletionPage.orderConfirmation.should(
        "contain.text",
        "Thank you for your purchase!",
      );
    });

    it("Add address", () => {
      HomePage.accountButton.click();
      HomePage.ordersPaymentsButton.click();
      HomePage.savedAddressesButton.click();

      SavedAddressesPage.addNewAddress.click();

      const country = "Estonia";
      const name = "Laura";
      const number = "29112233";
      const zipcode = "EE-10415";
      const address = "Pargi Street 12";
      const city = "Tartu";
      const state = "Tartu County";

      CreateAddressPage.countryField.type(country);
      CreateAddressPage.nameField.type(name);
      cy.wait(500);
      CreateAddressPage.mobileNumberField.type(number);
      CreateAddressPage.zipCode.type(zipcode);
      CreateAddressPage.addAddress.type(address);
      CreateAddressPage.addCity.type(city);
      CreateAddressPage.addState.type(state);

      CreateAddressPage.submitButton.click();

      CreateAddressPage.validateAddress.should("contain.text", country);
      CreateAddressPage.validateAddress.should("contain.text", name);
      CreateAddressPage.validateAddress.should("contain.text", number);
      CreateAddressPage.validateAddress.should("contain.text", zipcode);
      CreateAddressPage.validateAddress.should("contain.text", address);
      CreateAddressPage.validateAddress.should("contain.text", city);
      CreateAddressPage.validateAddress.should("contain.text", state);
    });

    it("Add payment option", () => {
      HomePage.accountButton.click();
      HomePage.ordersPaymentsButton.click();
      HomePage.myPaymentOptionsButton.click();

      SavedPaymentMethodsPage.addNewCard.click();

      const name = "Laura Test";
      const cardnumber = "4111111111111111";

      SavedPaymentMethodsPage.nameField.type(name);
      SavedPaymentMethodsPage.cardNumberField.type(cardnumber);
      SavedPaymentMethodsPage.expiryMonthDropDownButton.select("9");
      SavedPaymentMethodsPage.expiryYearDropDownButton.select("2088");
      SavedPaymentMethodsPage.submitButton.click();

      SavedPaymentMethodsPage.visibleCard.should("contain.text", name);
      SavedPaymentMethodsPage.visibleCard.should("contain.text", cardnumber);
    });
  });
});
