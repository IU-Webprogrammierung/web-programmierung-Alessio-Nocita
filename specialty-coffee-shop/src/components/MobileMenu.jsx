import React from "react";
import { useEffect } from "react";

import styles from "./MobileMenu.module.sass";
import { NavLink } from "react-router-dom";

// Navigationsmenü für Mobile-Ansicht
// enthält Links zu den Hauptseiten der Website
// wird als Slider-Menü angezeigt
// und wird durch anklicken des Burgermenü-Icons geöffnet

const MobileMenu = ({isOpen, toggler}) => {

    const linkClickHandler = () => {
        toggler();
    }

     useEffect(() => {
        if (isOpen) {
          document.body.style.position = "fixed";
          document.body.style.top = `-${window.scrollY}px`;
          document.body.style.width = "100vw";
          document.body.style.height= "100vh";
          document.body.style.overflow = "hidden";

        } else {
          document.body.style.position = ""; // Reset when closed
          document.body.style.top = "";
          document.body.style.overflow = "";
        }
      }, [isOpen]);

    return(
        <nav className={isOpen ? styles.mobileMenu: styles.mobileMenuClosed} aria-label="Navigation-Menu">
            <ul>
                <li>
                    <NavLink onClick={linkClickHandler} to="/" aria-label="Gehe zur Homepage" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zur 'Über uns'" to="/about">
                        Über uns
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zu 'Unser Kaffee'" to="/coffee">
                        Unser Kaffee
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zum Blog" to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zum Kontaktformular" to="/contact">
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu;