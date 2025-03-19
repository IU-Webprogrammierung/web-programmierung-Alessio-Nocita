import React from "react";
import { NavLink } from "react-router-dom";

// Navigationsmenü für Desktop-Ansicht
// enthält Links zu den Hauptseiten der Website

const DesktopMenu = () => {
    return(
        <nav className="hidden w-2/3 mx-auto laptop:block desktop:w-1/2" aria-label="Navigation-Menu">
            <ul className="flex justify-between my-10 mx-auto">
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink to="/" 
                    className={({isActive}) => isActive ? "underline text-[#616b3a] text-2xl font-bold hover:text-red-800 focus:text-[#616b3a]" : "no-underline text-black text-2xl font-bold hover:text-red-800 focus:text-black"}
                    aria-label="Gehe zur Homepage" exact>
                        Home
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink 
                    className={({isActive}) => isActive ? "underline text-[#616b3a] text-2xl font-bold hover:text-red-800 focus:text-[#616b3a]" : "no-underline text-black text-2xl font-bold hover:text-red-800 focus:text-black"}
                    aria-label="Gehe zur 'Über uns'" to="/about">
                        Über uns
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink 
                    className={({isActive}) => isActive ? "underline text-[#616b3a] text-2xl font-bold hover:text-red-800 focus:text-[#616b3a]" : "no-underline text-black text-2xl font-bold hover:text-red-800 focus:text-black"}
                    aria-label="Gehe zu 'Unser Kaffee'" to="/coffee">
                        Unser Kaffee
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink 
                    className={({isActive}) => isActive ? "underline text-[#616b3a] text-2xl font-bold hover:text-red-800 focus:text-[#616b3a]" : "no-underline text-black text-2xl font-bold hover:text-red-800 focus:text-black"}
                    aria-label="Gehe zum Blog" to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li className="text-md active:text-md hover:text-md focus:text-md list-none">
                    <NavLink 
                    className={({isActive}) => isActive ? "underline text-[#616b3a] text-2xl font-bold hover:text-red-800 focus:text-[#616b3a]" : "no-underline text-black text-2xl font-bold hover:text-red-800 focus:text-black"}
                    aria-label="Gehe zum Kontaktformular" to="/contact">
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopMenu;