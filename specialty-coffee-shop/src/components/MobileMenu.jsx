import React from "react";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";

// Navigationsmenü für Mobile-Ansicht
// enthält Links zu den Hauptseiten der Website
// wird als Slider-Menü angezeigt
// und wird durch anklicken des Burgermenü-Icons geöffnet

const MobileMenu = ({isOpen, toggler}) => {

    // schließt das Menü bei Klick auf einen Link
    // der Toggler ist importiert aus der MobileHeader-Komponente
    // die ihn wiederum aus Root.jsx erhält
    // und wird dort als handleClick-Funktion definiert
    // der Toggler sendet per State Uplift das Befehl zum Schalten des isOpen-Status
    // der dann hierher als props zurückgesendet wird

    const linkClickHandler = () => {
        toggler();
    }

    // verschiebt das Menu aus dem Viewport hinein und heraus
    // und sperrt/entsperrt das Scrollen des Body-Inhalts
    // je nach Zustand von isOpen

     useEffect(() => {
        if (isOpen) {
          document.body.style.position = "fixed";
          document.body.style.top = `-${window.scrollY}px`;
          document.body.style.width = "100vw";
          document.body.style.height= "100vh";
          document.body.style.overflow = "hidden";

        } else {
          document.body.style.position = "";
          document.body.style.top = "";
          document.body.style.overflow = "";
        }
      }, [isOpen]);

    return(
        <nav className={`flex flex-col justify-center items-center fixed top-0 w-screen h-screen bg-primary transition-left duration-500 z-[500] ${isOpen ? "left-0" : "left-[-100vw]"}`} aria-label="Navigation-Menu">
            <ul role="menubar" className="grid grid-rows-5 grid-cols-1 list-none h-2/3 w-2/3 ">
                <li role="menuitem" className="text-secondary no-underline text-center text-3xl cursor-pointer self-center justify-self-center hover:text-primary hover:underline">
                    <NavLink onClick={linkClickHandler} to="/" aria-label="Gehe zur Homepage">
                        Home
                    </NavLink>
                </li>
                <li role="menuitem" className="text-secondary no-underline text-center text-3xl cursor-pointer self-center justify-self-center hover:text-primary hover:underline">
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zur 'Über uns'" to="/about">
                        Über uns
                    </NavLink>
                </li>
                <li role="menuitem" className="text-secondary no-underline text-center text-3xl cursor-pointer self-center justify-self-center hover:text-primary hover:underline">
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zu 'Unser Kaffee'" to="/coffee">
                        Unser Kaffee
                    </NavLink>
                </li>
                <li role="menuitem" className="text-secondary no-underline text-center text-3xl cursor-pointer self-center justify-self-center hover:text-primary hover:underline">
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zum Blog" to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li role="menuitem" className="text-secondary no-underline text-center text-3xl cursor-pointer self-center justify-self-center hover:text-primary hover:underline">
                    <NavLink onClick={linkClickHandler} aria-label="Gehe zum Kontaktformular" to="/contact">
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu;