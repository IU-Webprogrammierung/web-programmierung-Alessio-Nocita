import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.sass";

import facebook_logo from "../assets/images/facebook_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";

// Footer-Komponente
// zeigt eine Copyright-Angabe, das Impressum und Social Media-Links an

const Footer = () => {
    return(
        <footer className={styles.footer} aria-label="Footer">
            <div>©2025 Alessio Nocita - Specialty Coffee Duisburg - Alle Rechte vorbehalten</div>
            <div className={styles.socialMediaIcons}>
            <figure>
                <img className={styles.facebookLogo} src={facebook_logo} alt="Facebook Logo" />
            </figure>
            <figure>
                <img src={instagram_logo} alt="Instagram Logo" />
            </figure>
            </div>
            <Link to="/impressum" aria-label="Gehe zum Impressum">Impressum</Link>
        </footer>
    )
}

export default Footer;
