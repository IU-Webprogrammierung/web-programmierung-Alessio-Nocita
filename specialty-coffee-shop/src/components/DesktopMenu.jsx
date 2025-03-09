import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./DesktopMenu.module.sass";

// Navigationsmenü für Desktop-Ansicht
// enthält Links zu den Hauptseiten der Website

const DesktopMenu = () => {
    return(
        <nav className="hidden w-2/3 mx-auto laptop:block desktop:w-1/2" aria-label="Navigation-Menu">
            <ul className="flex justify-between my-10 mx-auto">
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink to="/" 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zur Homepage" exact>
                        Home
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zur 'Über uns'" to="/about">
                        Über uns
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zu 'Unser Kaffee'" to="/coffee">
                        Unser Kaffee
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink 
                    className={({isActive}) => isActive ? styles.active : styles.inactive}
                    aria-label="Gehe zum Blog" to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
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