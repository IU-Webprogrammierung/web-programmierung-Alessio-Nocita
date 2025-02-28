import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.sass";

import facebook_logo from "../assets/images/facebook_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";

// Footer-Komponente
// zeigt eine Copyright-Angabe, das Impressum und Social Media-Links an

const Footer = ({viewport}) => {
    return(
        <footer className={styles.footer} aria-label="Footer">
            {viewport > 768 && <div className={styles.copyright}>©2025 Alessio Nocita - Specialty Coffee Duisburg</div>}
            <div className={styles.socialMediaIcons}>
            <figure>
                <img className={styles.facebookLogo} src={facebook_logo} alt="Facebook Logo" />
            </figure>
            <figure>
                <img src={instagram_logo} alt="Instagram Logo" />
            </figure>
            </div>
            <Link className={styles.impressumLink} to="/impressum" aria-label="Gehe zum Impressum">Impressum</Link>
        </footer>
    )
}

export default Footer;
