import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        Über uns
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/coffee">
                        Unser Kaffee
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu;