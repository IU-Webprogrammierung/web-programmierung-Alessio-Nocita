import React from "react";
import { Link } from "react-router-dom";
import styles from "./DesktopHeader.module.sass";

import logo from "../assets/images/logo_with_text.svg";

// Desktop-Header-Komponente
// zeigt das Logo (mit Homepage verlinkt) an

const DesktopHeader = () => {
    return(
        <header className={styles.head}>
            <Link to="/" aria-label="Gehe zur Homepage">
        <figure>
            <img src={logo} alt="Specialty Coffee Duisburg Logo" />
        </figure>
        </Link>
    </header>
    )
}

export default DesktopHeader;