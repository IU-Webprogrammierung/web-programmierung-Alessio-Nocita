import React from "react";
import { Link } from "react-router-dom";

const Button = ({text, link}) => {
    return(
        <button><Link to={link}>{text}</Link></button>
    )
}

export default Button;
