import { formData } from "./formData.js";
class accountFormDisplay {
  constructor(formDisplay, emailField, emailError, countryField, countryError, postalCodeField, postalCodeError, passwordField, passwordError, passConfirmField, passConfirmError, submitButton) {
    this.#formDisplay = formDisplay;
    this.#emailField = emailField;
    this.#emailError = emailError;
    this.#countryField = countryField;
    this.#countryError = countryError;
    this.#postalCodeField = postalCodeField;
    this.#postalCodeError = postalCodeError;
    this.#passwordField = passwordField;
    this.#passwordError = passwordError;
    this.#passConfirmField = passConfirmField;
    this.#passConfirmError = passConfirmError;
    this.#submitButton = submitButton;
    this.#formData = new formData();
    this.#emailField.addEventListener("input", () => {
      if (this.#emailField.validity.typeMismatch) {
        this.#emailError.textContent = "please enter a valid email address";
      } else {
        this.#emailError.textContent = "";
      };
    });
    this.#postalCodeField.addEventListener("input", () => {
      if (this.#postalCodeField.validity.patternMismatch) {
        this.#postalCodeError.textContent = "please enter a valid zip code";
      } else {
        this.#postalCodeError.textContent = "";
      };
    });
  };
  #formDisplay = document.createElement("fieldset");
  #emailField = document.createElement("input");
  #emailError = document.createElement("div");
  #countryField = document.createElement("input");
  #countryError = document.createElement("div");
  #postalCodeField = document.createElement("input");
  #postalCodeError = document.createElement("div");
  #passwordField = document.createElement("input");
  #passwordError = document.createElement("div");
  #passConfirmField = document.createElement("input");
  #passConfirmError = document.createElement("div");
  #submitButton = document.createElement("button");
  #formData;
  // getters/setters
  get formDisplay() { return this.#formDisplay };
  set formDisplay(newFormDisplay) { this.#formDisplay = newFormDisplay };
  get emailField() { return this.#emailField };
  set emailField(newEmailField) { this.#emailField = newEmailField };;
  get countryField() { return this.#countryField };
  set countryField(newCountryField) { this.#countryField = newCountryField };
  get postalCodeField() { return this.#postalCodeField };
  set postalCodeField(newPostalCodeField) { this.#postalCodeField = newPostalCodeField };
  get passwordField() { return this.#passwordField };
  set passwordField(newPasswordField) { this.#passwordField = newPasswordField };
  get passConfirmField() { return this.#passConfirmField };
  set passConfirmField(newPassConfirmField) { this.#passConfirmField = newPassConfirmField };
  // functions
  validateInput(input, inputType) {
    switch (inputType) {
      case "email":
        break
    }
  }
};
export { accountFormDisplay };
