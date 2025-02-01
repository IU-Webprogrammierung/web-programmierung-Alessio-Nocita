import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo_with_text.svg";

const DesktopHeader = () => {
    return(
        <header>
            <Link to="/" aria-label="Gehe zur Homepage">
        <figure>
            <img src={logo} alt="Specialty Coffee Duisburg Logo" />
        </figure>
        </Link>
    </header>
    )
}

export default DesktopHeader;