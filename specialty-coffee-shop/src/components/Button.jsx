import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Button-Komponente
// diese importiert aria-label, text und Verlinkung als props

const Button = ({text, link, aria, color="white", formValid}) => {

    const [disabled, setDisabled] = useState(false);
    const [buttonColor, setButtonColor] = useState(color);

    // Farb-Kontrolle
    useEffect(() => {
        if (color === "black") {
            setButtonColor("black");
        } else if (color === "white") {
            setButtonColor("white");
        }
    }
    , [color]);

    // Button-Deaktivierung bei Formularfehlern
    useEffect(() => {
        if (!formValid) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [formValid]);

    const navigate = useNavigate();


    const handleClick = () => {
        navigate(link);
        window.scrollTo(0, 0); // Scrolle zum Seitenanfang
    };

    return(
        <button
            role="button"
            className={`${disabled ? "button-disabled" : `button-${buttonColor}`}`}
            aria-label={aria} 
            tabIndex="0"
            onClick={handleClick}>
        {text}
        </button>
    )
}

export default Button;
