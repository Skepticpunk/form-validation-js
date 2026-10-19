import "./page.css";
import { accountFormDisplay } from "./formDisplay.js";

const accountForm = new accountFormDisplay(document.querySelector("#accountForm"),
  document.querySelector("#accountForm > p > .email"),
  document.querySelector("#accountForm > .emailError"),
  document.querySelector("#accountForm > p > .country"),
  document.querySelector("#accountForm > .countryError"),
  document.querySelector("#accountForm > p > .postalCode"),
  document.querySelector("#accountForm > .postalCodeError"),
  document.querySelector("#accountForm > p > .password"),
  document.querySelector("#accountForm > .passwordError"),
  document.querySelector("#accountForm > p > .passConfirm"),
  document.querySelector("#accountForm > .passConfirmError"),
  document.querySelector("#accountForm > .submitButton"),
)
console.log(document.querySelector("#accountForm > p > .postalCode"))
