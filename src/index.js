import "./page.css";
import { accountFormDisplay } from "./formDisplay.js";

const accountForm = new accountFormDisplay(document.querySelector("#accountForm"),
  document.querySelector("#accountForm > fieldset > p > .email"),
  document.querySelector("#accountForm > fieldset > .emailError"),
  document.querySelector("#accountForm > fieldset > p > .country"),
  document.querySelector("#accountForm > fieldset > .countryError"),
  document.querySelector("#accountForm > fieldset > p > .postalCode"),
  document.querySelector("#accountForm > fieldset > .postalCodeError"),
  document.querySelector("#accountForm > fieldset > p > .password"),
  document.querySelector("#accountForm > fieldset > .passwordError"),
  document.querySelector("#accountForm > fieldset > p > .passConfirm"),
  document.querySelector("#accountForm > fieldset > .passConfirmError"),
  document.querySelector("#accountForm > fieldset > .submitButton"),
  document.querySelector("#accountForm > fieldset > .submitFeedback"),
)
