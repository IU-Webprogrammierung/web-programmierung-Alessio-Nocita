import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.sass";

// Button-Komponente
// diese importiert aria-label, text und Verlinkung als props

const Button = ({text, link, aria}) => {
    return(
        <button className={styles.button} aria-label={aria} tabIndex="0"><Link to={link}>{text}</Link></button>
    )
}

export default Button;
