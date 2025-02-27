import React from "react";

import styles from "./Contact.module.sass";
import Button from "../components/Button";

// Kontaktformular-Seite
// der Button ist "tot" und hat keine Funktion
// (keine Backend-Anbindung)

const Contact = () => {
    return (
    <section>
        <h1 className={styles.title} aria-label="Kontaktformular">Kontakt</h1>
        <form className={styles.formular}>
            <label id="first-name-label" for="first-name">Vorname:</label>
            <input type="text" id="first-name" name="first-name" required aria-labelledby="first-name-label" aria-required="true"/>
            <label id="surname-label" for="last-name">Nachname:</label>
            <input type="text" id="last-name" name="last-name" required aria-labelledby="surname-label" aria-required="true"/>
            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required aria-required="true"/>
            <label for="message">Nachricht:</label>
            <textarea id="message" name="message" rows="10" required aria-required="true"></textarea>
            <Button className={styles.formButton} text="Absenden" link="#" aria="Button zum Absenden"/>
        </form>
    </section>);
    }

export default Contact;
