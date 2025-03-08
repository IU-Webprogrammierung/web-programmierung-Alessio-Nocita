import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
            className={`button-${color}`}
            aria-label={aria} 
            tabIndex="0"
            onClick={handleClick}>
        {text}
        </button>
    )
}

export default Button;
