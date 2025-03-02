import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./DesktopMenu.module.sass";

// Navigationsmenü für Desktop-Ansicht
// enthält Links zu den Hauptseiten der Website

const DesktopMenu = () => {
    return(
        <nav className={styles.navigationBar} aria-label="Navigation-Menu">
            <ul>
                <li>
                    <NavLink to="/" 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zur Homepage" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zur 'Über uns'" to="/about">
                        Über uns
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zu 'Unser Kaffee'" to="/coffee">
                        Unser Kaffee
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zum Blog" to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zum Kontaktformular" to="/contact">
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopMenu;