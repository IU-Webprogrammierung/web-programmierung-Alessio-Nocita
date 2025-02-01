import React from "react";
import Button from "../components/Button";

const Contact = () => {
    return (
    <section>
        <h1 aria-label="Kontaktformular">Kontakt</h1>
        <form>
            <label id="first-name-label" for="first-name">Vorname:</label>
            <input type="text" id="first-name" name="first-name" required aria-labelledby="first-name-label" aria-required="true"/>
            <label id="surname-label" for="last-name">Nachname:</label>
            <input type="text" id="last-name" name="last-name" required aria-labelledby="surname-label" aria-required="true"/>
            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required aria-required="true"/>
            <label for="message">Nachricht:</label>
            <textarea id="message" name="message" required aria-required="true"></textarea>
            <Button text="Absenden" link="#" aria="Button zum Absenden"/>
        </form>
    </section>);
    }

export default Contact;
