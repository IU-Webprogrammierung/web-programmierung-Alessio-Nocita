import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Button-Komponente
// diese importiert aria-label, text und Verlinkung als props

const Button = ({text, link, aria, color, formValid}) => {

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (!formValid && typeof formValid!==undefined) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
        if (color !== "white") {
            color = "black";
        }

    }, [formValid]);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
        window.scrollTo(0, 0); // Scrolle zum Seitenanfang
    };

    return(
        <button
            className={`${disabled ? "button-disabled" : `button-${color}`}`}
            aria-label={aria} 
            tabIndex="0"
            onClick={handleClick}>
        {text}
        </button>
    )
}

export default Button;
