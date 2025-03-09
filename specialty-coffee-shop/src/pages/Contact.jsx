import React from "react";

import Button from "../components/Button";

// Kontaktformular-Seite
// der Button ist "tot" und hat keine Funktion
// (keine Backend-Anbindung)

const Contact = () => {
  return (
    <section>
      <h1 className="text-5xl my-5 text-center" aria-label="Kontaktformular">
        Kontakt
      </h1>
      <form
        className="flex flex-col items-center justify-start border border-[#333] rounded-lg text-[#333] bg-[#f0f0f0] w-2/3 p-2 mx-auto mb-40
                        tablet:p-5
                        desktop:w-1/3"
      >
        <label
          className="w-5/6 tablet:w-2/3 my-2 border text-left"
          id="first-name-label"
          for="first-name"
        >
          Vorname:
        </label>
        <input
          className="w-5/6 tablet:w-2/3 mb-3 p-3 border border-[#333] rounded-lg"
          type="text"
          id="first-name"
          name="first-name"
          required
          aria-labelledby="first-name-label"
          aria-required="true"
        />
        <label
          className="w-5/6 tablet:w-2/3 my-2 border  text-left"
          id="surname-label"
          for="last-name"
        >
          Nachname:
        </label>
        <input
          className="w-5/6 tablet:w-2/3 mb-3 p-3 border border-[#333] rounded-lg"
          type="text"
          id="last-name"
          name="last-name"
          required
          aria-labelledby="surname-label"
          aria-required="true"
        />
        <label className="w-5/6 tablet:w-2/3 my-2 border text-left" for="email">
          E-Mail:
        </label>
        <input
          className="w-5/6 tablet:w-2/3 mb-3 p-3 border border-[#333] rounded-lg"
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
        />
        <label
          className="w-5/6 tablet:w-2/3 my-2 border text-left"
          for="message"
        >
          Nachricht:
        </label>
        <textarea
          className="w-5/6 mb-3 tablet:w-2/3 border border-[#333] rounded-lg"
          id="message"
          name="message"
          rows="10"
          required
          aria-required="true"
        ></textarea>
        <div className="w-5/6 tablet:w-2/3 my-2 border text-right">
          <Button text="Absenden" link="#" aria="Button zum Absenden" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
