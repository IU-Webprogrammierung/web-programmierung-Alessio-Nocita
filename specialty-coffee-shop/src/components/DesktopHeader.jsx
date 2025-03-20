import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/specialty_coffee_duisburg_logo.png";

// Desktop-Header-Komponente
// zeigt das Logo an (mit Homepage verlinkt)

const DesktopHeader = () => {
    return(
        <header className="flex justify-center z-100">
            <Link to="/" aria-label="Gehe zur Homepage">
            <figure>
                <img className="mt-5" src={logo} alt="Specialty Coffee Duisburg Logo" />
            </figure>
            </Link>
        </header>
    )
}

export default DesktopHeader;