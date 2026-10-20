import { formData } from "./formData.js";
class accountFormDisplay {
  constructor(formDisplay, emailField, emailError, countryField, countryError, postalCodeField, postalCodeError, passwordField, passwordError, passConfirmField, passConfirmError, submitButton, submitFeedback) {
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
    this.#submitFeedback = submitFeedback;
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
    this.#passwordField.addEventListener("input", () => {
      if(this.#passwordField.validity.tooShort) {
        this.#passwordError.textContent = "password too short, min 5 chars"
      } else if(this.#passwordField.validity.tooLong) {
        this.#passwordError.textContent = "password too long, max 16 chars"
      } else if(this.#passConfirmField.value != this.#passwordField.value) {
        this.#passwordError.textContent = ""
        this.#passConfirmField.setCustomValidity("passwords must match")
        this.#passConfirmError.textContent = "passwords must match"
      } else {
        this.#passwordError.textContent = ""
        this.#passConfirmField.setCustomValidity("")
        this.#passConfirmError.textContent = ""
      };
    });
    this.#passConfirmField.addEventListener("input", () => {
      if(this.#passConfirmField.validity.tooShort) {
        this.#passConfirmError.textContent = "password too short, min 5 chars"
      } else if(this.#passConfirmField.validity.tooLong) {
        this.#passConfirmError.textContent = "password too long, max 16 chars"
      } else if(this.#passConfirmField.value != this.#passwordField.value) {
        this.#passConfirmField.setCustomValidity("passwords must match")
        this.#passConfirmError.textContent = "passwords must match"
      } else {
        this.#passConfirmField.setCustomValidity("")
        this.#passConfirmError.textContent = ""
      };
      this.#submitButton.addEventListener("click", (event) => {
        if(this.#formDisplay.checkValidity()) {
          this.#formData.updateData(this.#emailField.value, this.#countryField.value, this.#postalCodeField.value, this.#passwordField.value)
          this.#submitFeedback.textContent = "Yippee! You did it!";
        } else {
          this.#submitFeedback.textContent = "Something's wrong. Go fix it."
        }
      })
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
  #submitFeedback = document.createElement("div");
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
  validateInput() {
    if(this.#formDisplay.checkValidity()) {
      this.#formData.updateData(this.#emailField.value, this.#countryField.value, this.#postalCodeField.value, this.#passwordField.value)
      this.#submitFeedback.textContent = "Yippee! You did it!";
    } else {
      this.#submitFeedback.textContent = "Something's wrong. Go fix it."
    };
  };
};
export { accountFormDisplay };
