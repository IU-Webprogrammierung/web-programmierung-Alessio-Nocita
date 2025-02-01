import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
    return(
        <nav aria-label="Navigation-Menu">
            <ul>
                <li>
                    <NavLink to="/" aria-label="Gehe zur Homepage" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Gehe zur 'Über uns'" to="/about">
                        Über uns
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Gehe zu 'Unser Kaffee'" to="/coffee">
                        Unser Kaffee
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Gehe zum Blog" to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink aria-label="Gehe zum Kontaktformular" to="/contact">
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu;