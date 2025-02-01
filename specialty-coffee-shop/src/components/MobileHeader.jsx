import React from "react";
import Burgermenu from "./Burgermenu";
import logo from "../assets/images/logo_with_text.svg";

const MobileHeader = () => {
    return(
        <header>
            <figure>
                <img src={logo} alt="Specialty Coffee Duisburg Logo" />
            </figure>
            <Burgermenu />

        </header>
    )
}

export default MobileHeader;