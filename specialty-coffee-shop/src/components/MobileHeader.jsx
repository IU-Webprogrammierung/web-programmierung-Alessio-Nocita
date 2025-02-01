import React from "react";
import { Link } from "react-router-dom";

import Burgermenu from "./Burgermenu";
import logo from "../assets/images/logo_with_text.svg";

const MobileHeader = () => {
    return(
        <header>
            <Link to="/" aria-label="Gehe zur Homepage">
            <figure>
                <img src={logo} alt="Specialty Coffee Duisburg Logo" />
            </figure>
            </Link>
            <Burgermenu />
        </header>
    )
}

export default MobileHeader;