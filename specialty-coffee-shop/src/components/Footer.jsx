import React from "react";
import { Link } from "react-router-dom";

import facebook_logo from "../assets/images/facebook_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";


const Footer = () => {
    return(
        <footer>
            <div>©2025 Alessio Nocita - Specialty Coffee Duisburg - Alle Rechte vorbehalten</div>
            <figure>
                <img src={facebook_logo} alt="Facebook Logo" />
            </figure>
            <figure>
                <img src={instagram_logo} alt="Instagram Logo" />
            </figure>
            <Link to="/impressum">Impressum</Link>
        </footer>
    )
}

export default Footer;
