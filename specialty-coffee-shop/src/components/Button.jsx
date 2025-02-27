import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.sass";

// Button-Komponente
// diese importiert aria-label, text und Verlinkung als props

const Button = ({text, link, aria}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
        window.scrollTo(0, 0); // Scroll to top
    };

    return(
        <button className={styles.button} aria-label={aria} tabIndex="0" onClick={handleClick}>
        {text}
        </button>
    )
}

export default Button;
