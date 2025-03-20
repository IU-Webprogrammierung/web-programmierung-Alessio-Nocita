import React from "react";
import { useState, useEffect } from "react";

import Button from "../components/Button";

// Kontaktformular-Seite
// der Button ist "tot" und hat keine Funktion
// (keine Backend-Anbindung)

const Contact = () => {

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");

  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isMessageTouched, setIsMessageTouched] = useState(false);

  const [isFormValid, setIsFormValid] = useState();

  const nameRegex = /^[a-zA-Z-]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const messageRegex = /^[a-zA-Z0-9-.,;:!?() ]+$/;

  useEffect(() => {
    const isValid =
      firstNameErrorMessage === "" &&
      lastNameErrorMessage === "" &&
      emailErrorMessage === "" &&
      messageErrorMessage === "" &&
      firstNameInput !== "" &&
      lastNameInput !== "" &&
      emailInput !== "" &&
      messageInput !== "";

    setIsFormValid(isValid);
  }, [
    firstNameInput,
    lastNameInput,
    emailInput,
    messageInput,
    isFirstNameTouched,
    isLastNameTouched,
    isEmailTouched,
    isMessageTouched,
  ]);

  const validateFirstName = (firstName) => {
    if (firstName === "") {
      return "Bitte geben Sie Ihren Vornamen ein.";
    } else if (firstName.length < 2) {
      return "Der Vorname muss mindestens 2 Zeichen lang sein.";
    } else if (!nameRegex.test(firstName)) {
      return "Der Vorname darf nur Buchstaben und Bindestriche enthalten.";
    }
    return "";
  }

  const validateLastName = (lastName) => {
    if (lastName === "") {
      return "Bitte geben Sie Ihren Nachnamen ein.";
    } else if (lastName.length < 2) {
      return "Der Nachname muss mindestens 2 Zeichen lang sein.";
    } else if (!nameRegex.test(lastName)) {
      return "Der Nachname darf nur Buchstaben und Bindestriche enthalten.";
    }
    return "";
  }

  const validateEmail = (email) => {
    if (email === "") {
      return "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!emailRegex.test(email)) {
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    return "";
  }

  const validateMessage = (message) => {
    if (message === "") {
      return "Bitte geben Sie eine Nachricht ein.";
    } else if (message.length < 2) {
      return "Die Nachricht muss mindestens 2 Zeichen lang sein.";
    } else if (!messageRegex.test(message)) {
      return "Die Nachricht enthält ungültige Zeichen.";
    }
    return "";
  }

  const handleFirstNameChange = (event) => {
    setFirstNameInput(event.target.value);
   if (isFirstNameTouched) {
      setFirstNameErrorMessage(validateFirstName(event.target.value));
    }
  }


  const handleLastNameChange = (event) => {
    setLastNameInput(event.target.value);
    if (isLastNameTouched) {
      setLastNameErrorMessage(validateLastName(event.target.value));
    }
  }

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
    if (isEmailTouched) {
      setEmailErrorMessage(validateEmail(event.target.value));
  }
  }

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
    if (isMessageTouched) {
      setMessageErrorMessage(validateMessage(event.target.value));
    }
}

  const handleFirstNameBlur = () => {
    setIsFirstNameTouched(true);
    setFirstNameErrorMessage(validateFirstName(firstNameInput));
  }

  const handleLastNameBlur = () => {
    setIsLastNameTouched(true);
    setLastNameErrorMessage(validateLastName(lastNameInput));
  }

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    setEmailErrorMessage(validateEmail(emailInput));
  }

  const handleMessageBlur = () => {
    setIsMessageTouched(true);
    setMessageErrorMessage(validateMessage(messageInput));
  }

  return (
    <section>
      <h1 className="text-5xl my-5 text-center" aria-label="Kontaktformular">
        Kontakt
      </h1>
      <form
        className="flex flex-col items-center justify-start border border-primary rounded-lg text-primary bg-secondary w-2/3 p-2 mx-auto mb-40
                        tablet:p-5
                        desktop:w-1/3"
      >
        <label
          className="w-5/6 tablet:w-2/3 my-2 border text-left"
          id="first-name-label"
          htmlFor="first-name"
        >
          Vorname:
        </label>
        <input
          className="w-5/6 tablet:w-2/3 mb-3 p-3 border border-primary rounded-lg"
          type="text"
          id="first-name"
          name="first-name"
          required
          aria-labelledby="first-name-label"
          aria-required="true"
          onChange={handleFirstNameChange}
          onBlur={handleFirstNameBlur}
        />
        <div className="w-5/6 tablet:w-2/3 my-2 text-left text-md text-red-800">{firstNameErrorMessage}</div>
        <label
          className="w-5/6 tablet:w-2/3 my-2 border  text-left"
          id="surname-label"
          htmlFor="last-name"
        >
          Nachname:
        </label>
        <input
          className="w-5/6 tablet:w-2/3 mb-3 p-3 border border-primary rounded-lg"
          type="text"
          id="last-name"
          name="last-name"
          required
          aria-labelledby="surname-label"
          aria-required="true"
          onChange={handleLastNameChange}
          onBlur={handleLastNameBlur}
        />
        <div className="w-5/6 tablet:w-2/3 my-2 text-left text-md text-red-800">{lastNameErrorMessage}</div>

        <label className="w-5/6 tablet:w-2/3 my-2 border text-left" htmlFor="email">
          E-Mail:
        </label>
        <input
          className="w-5/6 tablet:w-2/3 mb-3 p-3 border border-primary rounded-lg"
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <div className="w-5/6 tablet:w-2/3 my-2 text-left text-md text-red-800">{emailErrorMessage}</div>
        <label
          className="w-5/6 tablet:w-2/3 my-2 border text-left"
          htmlFor="message"
        >
          Nachricht:
        </label>
        <textarea
          className="w-5/6 mb-3 tablet:w-2/3 border border-primary rounded-lg"
          id="message"
          name="message"
          rows="10"
          required
          aria-required="true"
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
        ></textarea>
        <div className="w-5/6 tablet:w-2/3 my-2 text-left text-md text-red-800">{messageErrorMessage}</div>
        <div className="w-5/6 tablet:w-2/3 my-2 border text-right border-none">
          <Button text="Absenden" link="#" aria="Button zum Absenden" color="black" formValid={isFormValid}/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
