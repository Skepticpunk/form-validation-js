class formData {
  constructor(email, country, postalCode, password) {
    this.#email = email;
    this.#country = country;
    this.#postalCode = postalCode;
    this.#password = password;
  };
  // variables
  #email;
  #country;
  #postalCode;
  #password;
  // setters/setters
  get email() { return this.#email };
  set email(newEmail) { this.#email = newEmail };
  get country() { return this.#country };
  set country(newCountry) { this.#country = newCountry };
  get postalCode() { return this.#postalCode };
  set postalCode(newPostalCode) { this.#postalCode = newPostalCode };
  get password() { return this.#password };
  set password(newPassword) { this.#password = newPassword };
  // functions
  updateData(newEmail, newCountry, newPostalCode, newPassword) {
    this.#email = newEmail;
    this.#country = newCountry;
    this.#postalCode = newPostalCode;
    this.#password = newPassword;
  };
};
export { formData };
