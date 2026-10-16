class accountForm {
  constructor(formDisplay, emailField, countryField, postalCodeField, passwordField, passConfirmField) {
    this.#formDisplay = formDisplay;
    this.#emailField = emailField;
    this.#countryField = countryField;
    this.#postalCodeField = postalCodeField;
    this.#passwordField = passwordField;
    this.#passConfirmField = passConfirmField;
  }
  #formDisplay = document.createElement("fieldset");
  #emailField = document.createElement("input");
  #countryField = document.createElement("input");
  #postalCodeField = document.createElement("input");
  #passwordField = document.createElement("input");
  #passConfirmField = document.createElement("input");
}
