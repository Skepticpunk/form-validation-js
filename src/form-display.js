import { formData } from "./form-data.js";
class accountForm {
  constructor(formDisplay, emailField, countryField, postalCodeField, passwordField, passConfirmField, submitButton) {
    this.#formDisplay = formDisplay;
    this.#emailField = emailField;
    this.#countryField = countryField;
    this.#postalCodeField = postalCodeField;
    this.#passwordField = passwordField;
    this.#passConfirmField = passConfirmField;
    this.#submitButton = submitButton;
  };
  #formDisplay = document.createElement("fieldset");
  #emailField = document.createElement("input");
  #countryField = document.createElement("input");
  #postalCodeField = document.createElement("input");
  #passwordField = document.createElement("input");
  #passConfirmField = document.createElement("input");
  #submitButton = document.createElement("button"):
  #formData = new formData();
  // getters/setters
  get #formDisplay() { return this.#formDisplay };
  set #formDisplay(newFormDisplay) { this.#formDisplay = newFormDisplay };
  get #emailField() { return this.#emailField };
  set #emailField(newEmailField) { this.#emailField = newEmailField };;
  get #countryField() { return this.#countryField };
  set #countryField(newCountryField) { this.#countryField = newCountryField };
  get #postalCodeField() { return this.#postalCodeField };
  set #postalCodeField(newPostalCodeField) { this.#postalCodeField = newPostalCodeField };
  get #passwordField() { return this.#passwordField };
  set #passwordField(newPasswordField) { this.#passwordField = newPasswordField };
  get #passConfirmField() { return this.#passConfirmField };
  set #passConfirmField(newPassConfirmField) { this.#passConfirmField = newPassConfirmField };
  // functions
  validateInput(input, inputType) {
    switch (inputType) {
      case "email":
        break
    }
  }
};
export { formDisplay };
