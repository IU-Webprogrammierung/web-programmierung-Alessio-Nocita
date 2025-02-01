import React from "react";
import Button from "../components/Button";

const Contact = () => {
    return (
    <section>
        <h1>Kontakt</h1>
        <form>
            <label for="first-name">Vorname:</label>
            <input type="text" id="first-name" name="first-name" required />
            <label for="last-name">Nachname:</label>
            <input type="text" id="last-name" name="last-name" required />
            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Nachricht:</label>
            <textarea id="message" name="message" required></textarea>
            <Button text="Absenden" link="#" />
        </form>
    </section>);
    }

export default Contact;
