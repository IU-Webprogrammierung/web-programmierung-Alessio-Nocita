import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styles from "./Button.module.sass";

// Button-Komponente
// diese importiert aria-label, text und Verlinkung als props

const Button = ({text, link, aria, color}) => {

    useEffect(() => {
        if (color !== "white") {
            color = "black";
        }
    }, []);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
        window.scrollTo(0, 0); // Scrolle zum Seitenanfang
    };



    return(
        <button 
            className={styles.button} 
            aria-label={aria} 
            tabIndex="0"
            style={{color: color, borderColor: color}}
            onClick={handleClick}>
        {text}
        </button>
    )
}

export default Button;
