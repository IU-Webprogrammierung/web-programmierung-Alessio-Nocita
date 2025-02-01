import React from "react";
import { Link } from "react-router-dom";

const Button = ({text, link, aria}) => {
    return(
        <button aria-label={aria} tabIndex="0"><Link to={link}>{text}</Link></button>
    )
}

export default Button;
