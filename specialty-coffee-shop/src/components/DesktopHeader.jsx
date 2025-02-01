import React from "react";

import logo from "../assets/images/logo_with_text.svg";

const DesktopHeader = () => {
    return(
        <header>
        <figure>
            <img src={logo} alt="Specialty Coffee Duisburg Logo" />
        </figure>
    </header>
    )
}

export default DesktopHeader;